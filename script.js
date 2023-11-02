const phrases = ["Innovation", "Design", "Creativity", "Excellence"];
let index = 0;
const textElement = document.getElementById("phrase");

let scene, camera, renderer, sphere;
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    let geometry = new THREE.SphereGeometry(0.5, 32, 32);
    let material = new THREE.MeshNormalMaterial();
    
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    camera.position.z = 1;

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    setInterval(changePhrase, 3000);
}

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) / 100;
    mouseY = (event.clientY - windowHalfY) / 100;
}

function changePhrase() {
    gsap.to(textElement, { opacity: 0, duration: 0.5, onComplete: () => {
        index = (index + 1) % phrases.length;
        textElement.textContent = phrases[index];
        gsap.to(textElement, { opacity: 1, duration: 0.5 });
    }});
}

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.005;
    sphere.rotation.y += 0.005;
    
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    
    renderer.render(scene, camera);
}

