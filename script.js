let scene, camera, renderer, spheres = [];

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Multiple Spheres with varying opacity
    const radii = [4.8, 5, 5.2];
    for (let i = 0; i < radii.length; i++) {
        const geometry = new THREE.SphereGeometry(radii[i], 64, 64);
        const material = new THREE.MeshPhongMaterial({
            color: 0x8844AA,
            emissive: 0x221122,
            shininess: 10,
            transparent: true,
            opacity: (i === 1) ? 0.5 : 0.2 // Central sphere more opaque
        });
        const sphere = new THREE.Mesh(geometry, material);
        spheres.push(sphere);
        scene.add(sphere);
    }

    // Ambient Light
    const ambient = new THREE.AmbientLight(0x222222);
    scene.add(ambient);

    // Point light at center for glowing effect
    const pointLight = new THREE.PointLight(0xffffff, 1, 15);
    scene.add(pointLight);

    camera.position.z = 15;

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    for (let sphere of spheres) {
        sphere.rotation.x += 0.002;
        sphere.rotation.y += 0.002;
    }
    renderer.render(scene, camera);
}

window.addEventListener('resize', function() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

init();
