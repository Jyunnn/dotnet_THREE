import * as THREE from './three/build/three.module.js';
import { OrbitControls } from './three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from './three/examples/jsm/loaders/GLTFLoader.js';

let mycanvas = document.querySelector('#mycanvas');
let container = document.querySelector('#threeBuild');

const scene = new THREE.Scene()
// scene.background = new THREE.Color('#6c757d');

const camera = new THREE.PerspectiveCamera(35, container.clientWidth / container.clientHeight, 0.1, 100);
camera.position.set(0, 0, 20);

const camera2 = new THREE.PerspectiveCamera(35, container.clientWidth / container.clientHeight, 0.1, 100);
camera2.position.set(0, 0, 10);


const geometry = new THREE.BoxBufferGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({
    color: 0x0000ff,
    opacity: 0.5,
    transparent: true,
    // wireframe: true
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


const light = new THREE.DirectionalLight(0xffffff, 8);
light.position.set(400, 200, 300);
scene.add(light);

const renderer = new THREE.WebGLRenderer({ canvas: mycanvas });
const containerRenderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setClearColor(0xFFFFFF, 1);
containerRenderer.setSize(container.clientWidth, container.clientHeight);
containerRenderer.setClearColor(0xFFFFFF, 1);
renderer.physicallyCorrectLights = true;
container.append(containerRenderer.domElement);

// var axisHelper = new THREE.AxesHelper(250);
// scene.add(axisHelper);
const controls = new OrbitControls(camera, renderer.domElement);
const containercontrols = new OrbitControls(camera2, containerRenderer.domElement);



function render() {

    renderer.render(scene, camera);
    containerRenderer.render(scene, camera2);
    requestAnimationFrame(render)

}

render();

renderer.domElement.addEventListener('mousedown', function (e) {
    console.log(e);
})

createBox.onclick = function () {
    console.log('CREATED');

    const geometry = new THREE.SphereGeometry(0.1, 16, 8);
    const material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        opacity: 0.7,
        transparent: true,
        // wireframe: true
    });

    const sphere = new THREE.Mesh(geometry, material);

    sphere.position.x = 1
    sphere.position.y = 1
    sphere.position.z = 1

    scene.add(sphere);
    console.log(scene);
    render();
}
