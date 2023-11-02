let scene, camera, renderer, torus;

function init() {
    // Setup the basic Three.js scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({antialias: true});

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    camera.position.z = 5;

    // Create the torus
    createTorus();

    // Handle window resizing
    window.addEventListener('resize', function() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });

    // Start the animation loop
    animate();
}

function createTorus() {
    // Define the torus geometry and material
    const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
    const material = new THREE.MeshBasicMaterial({color: 0x8a2be2});
    torus = new THREE.Mesh(geometry, material);

    // Add the torus to the scene
    scene.add(torus);
}

function animate() {
    // This creates a loop that causes the renderer to draw the scene every time the screen is refreshed
    requestAnimationFrame(animate);
    
    // Rotate the torus for some added visuals
    torus.rotation.x += 0.005;
    torus.rotation.y += 0.005;

    // Pulsating effect for the torus
    torus.scale.x = 1 + 0.1 * Math.sin(Date.now() * 0.001);
    torus.scale.y = 1 + 0.1 * Math.sin(Date.now() * 0.001);
    torus.scale.z = 1 + 0.1 * Math.sin(Date.now() * 0.001);

    // Render the scene from the perspective of the camera
    renderer.render(scene, camera);
}

// Initialize everything
init();
