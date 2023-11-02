let scene, camera, renderer, controls, spheres = [];

// Scene & Camera
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer
renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // added alpha: true
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Add an ambient light
let ambientLight = new THREE.AmbientLight(0xffffff, 0.5);  // soft white light
scene.add(ambientLight);

// Add Spheres with Gradient
let geometry = new THREE.SphereGeometry(1, 32, 32);
let materials = [
    new THREE.MeshBasicMaterial({ color: 0x8E2DE2 }),
    new THREE.MeshBasicMaterial({ color: 0x4A00E0 })
];

for(let i=0; i<2; i++) {
    let sphere = new THREE.Mesh(geometry, materials[i]);
    sphere.position.y = i * 2.5;
    scene.add(sphere);
    spheres.push(sphere);
}

// Orbit Controls
controls = new THREE.OrbitControls(camera, renderer.domElement);

// Animation
function animate() {
    requestAnimationFrame(animate);

    // Rotate Spheres
    spheres.forEach(sphere => {
        sphere.rotation.x += 0.005;
        sphere.rotation.y += 0.005;
    });

    renderer.render(scene, camera);
}

// Window Resize
window.addEventListener('resize', () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

console.log("Script Loaded and Running");  // Logging

animate();

