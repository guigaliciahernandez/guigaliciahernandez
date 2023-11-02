// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 50;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// OrbitControls
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Lights
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const spotlight = new THREE.SpotLight(0xffffff);
spotlight.position.set(15, 40, 35);
spotlight.castShadow = true;
scene.add(spotlight);

// Spheres
const spheres = [];
const sphereMaterial = new THREE.MeshPhongMaterial();
for (let i = 0; i < 100; i++) {
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    sphereMaterial.color = new THREE.Color(`hsl(${Math.random() * 290 + 250}, 100%, 70%)`);
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.castShadow = true;
    sphere.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
    );
    spheres.push(sphere);
    scene.add(sphere);
}

// Random direction array
const directions = [];
for (let i = 0; i < spheres.length; i++) {
    directions.push(new THREE.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2));
}

// Animate
function animate() {
    requestAnimationFrame(animate);

    // Move spheres
    spheres.forEach((sphere, index) => {
        sphere.position.add(directions[index].multiplyScalar(0.05));

        // Reverse direction if out of bounds
        if (sphere.position.x > 50 || sphere.position.x < -50) directions[index].x *= -1;
        if (sphere.position.y > 50 || sphere.position.y < -50) directions[index].y *= -1;
        if (sphere.position.z > 50 || sphere.position.z < -50) directions[index].z *= -1;
    });

    controls.update();
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', onWindowResize, false);
function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

animate();

