const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const bubbleGeometry = new THREE.SphereGeometry(1, 32, 32);
const bubbleMaterial = new THREE.MeshBasicMaterial({ color: 0x8844aa, transparent: true, opacity: 0.8 });

const bubbles = [];
for (let i = 0; i < 10; i++) {
    const bubble = new THREE.Mesh(bubbleGeometry, bubbleMaterial);
    bubble.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
    bubble.velocity = new THREE.Vector3(Math.random() * 0.02 - 0.01, Math.random() * 0.02 - 0.01, 0);
    bubbles.push(bubble);
    scene.add(bubble);
}

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

document.addEventListener('mousemove', onMouseMove, false);
function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function animate() {
    requestAnimationFrame(animate);

    for (const bubble of bubbles) {
        bubble.position.add(bubble.velocity);
        if (bubble.position.y > 5 || bubble.position.y < -5) bubble.velocity.y = -bubble.velocity.y;
        if (bubble.position.x > 5 || bubble.position.x < -5) bubble.velocity.x = -bubble.velocity.x;
    }

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(bubbles);
    if (intersects.length > 0) {
        document.getElementById('info').style.display = 'block';
    } else {
        document.getElementById('info').style.display = 'none';
    }

    renderer.render(scene, camera);
}
animate();

