import * as THREE from "three";
import portalImage from './assets/the-face.jpg'
import portalAlpha from './assets/the-face-alpha.jpg'

// TODO: linting required! Ts? 

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
scene.background = new THREE.Color( 0x00ff00 );
// scene.fog = new THREE.Fog( 0xcce0ff, 500, 10000 );
camera.position.z = 2;

const loader = new THREE.TextureLoader();
const tester = loader.load(portalImage);
const testerAlpha = loader.load(portalAlpha, (texture) => {
  console.log(texture)
});
// tester.repeat.set( 1, 1 );

const material = new THREE.MeshBasicMaterial({
  map: tester,
  alphaMap: testerAlpha,
  side: THREE.DoubleSide,
  alphaTest: 0.5
});
const sprite = new THREE.Sprite(material);
sprite.scale.set(2, 2.75, 1)
scene.add(sprite);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio( window.devicePixelRatio );
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
  sprite.rotation.y -= 0.01;
}
animate();