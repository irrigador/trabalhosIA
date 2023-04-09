// Inicialização da cena
const scene = new THREE.Scene();

// Criação da câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Criação do renderizador
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector("#canvas")});
renderer.setSize(window.innerWidth, window.innerHeight);

// Criação do chão
const groundGeometry = new THREE.PlaneGeometry(10, 10);
const groundMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -1;
scene.add(ground);

// Criação do cubo
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.y = 0.5;
scene.add(cube);

// Função para renderizar a cena
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
animate();
