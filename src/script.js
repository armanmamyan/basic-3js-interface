import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Resizer from "./system/Resizer";

/**
 * Interface
 */
class World {
  constructor(container) {
    this.container = container;
    this.renderer = new THREE.WebGLRenderer();
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("skyblue");
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      100
    );

    // System Settings
    const resizer = new Resizer(this.container,this.camera,this.renderer)

    // Camera Settings
    this.camera.position.set(0,0,10)
    this.camera.updateProjectionMatrix();
    // Renderer Settings
    this.container.append(this.renderer.domElement)

    // Create Cube
    const cube = this.createCube();
    this.scene.add(cube);
  }

  createCube() {
    const geometry = new THREE.BoxGeometry(2,2,2);
    const material = new THREE.MeshBasicMaterial();
    return new THREE.Mesh(geometry,material);
  }

  // Render void
  render() {
    this.renderer.render(this.scene, this.camera);
  }
}

 // Container
 const container = document.querySelector(".canvas-container");
 // Instance creation
 const world = new World(container);
 // Render
 world.render();
export { World };
