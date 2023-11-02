const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const createSphere = (radius, color, opacity) => {
    const geometry = new THREE.SphereGeometry(radius, 64, 64);
    const material = new THREE.MeshPhongMaterial({
        color: color,
        transparent: true,
        opacity: opacity,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });
    return new THREE.Mesh(geometry, material);
};

const innerSphere = createSphere(1, 0x9a4be2, 0.5);
scene.add(innerSphere);

const middleSphere = createSphere(1.3, 0x8a2be2, 0.4);
scene.add(middleSphere);

const outerSphere = createSphere(1.6, 0x7a1bd2, 0.3);
scene.add(outerSphere);

const light = new THREE.PointLight(0xFFFFFF, 1);
light.position.set(2, 2, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

const loader = new THREE.FontLoader();
loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function(font) {
    const textGeometry = new THREE.TextGeometry('Hello World', {
        font: font,
        size: 0.5,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.01,
        bevelSize: 0.01,
        bevelOffset: 0,
        bevelSegments: 5
    });
    const textMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(-1.5, 0, 0);
    scene.add(textMesh);
});

camera.position.z = 5;

const animate = () => {
    requestAnimationFrame(animate);
    innerSphere.rotation.y += 0.005;
    middleSphere.rotation.y -= 0.005;
    renderer.render(scene, camera);
};

animate();

window.addEventListener('resize', () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
