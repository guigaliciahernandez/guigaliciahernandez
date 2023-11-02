let scene, camera, renderer, spheres, raycaster, mouse;

init();
animate();

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    spheres = [];
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const vertexShader = `
        varying vec3 vUv;
        void main() {
            vUv = position; 
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }`;
    const fragmentShader = `
        varying vec3 vUv;
        void main() {
            float gradient = dot(normalize(vUv), vec3(0.0, 0.0, 1.0));
            gl_FragColor = vec4(vec3(0.5 + 0.5 * gradient), 0.6);
        }`;
    const material = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        transparent: true
    });

    for (let i = 0; i < 5; i++) {
        const sphere = new THREE.Mesh(geometry, material);
        sphere.scale.set(1 + i * 0.5, 1 + i * 0.5, 1 + i * 0.5);
        spheres.push(sphere);
        scene.add(sphere);
    }

    camera.position.z = 6;

    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('click', onClick, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onClick(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(spheres);

    if (intersects.length > 0) {
        gsap.to(intersects[0].object.scale, {
            x: intersects[0].object.scale.x + 0.5,
            y: intersects[0].object.scale.y + 0.5,
            z: intersects[0].object.scale.z + 0.5,
            duration: 0.5,
            yoyo: true,
            repeat: 1
        });
    }
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
