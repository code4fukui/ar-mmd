import { GLTFLoader } from "https://code4fukui.github.io/three.js_examples/jsm/loaders/GLTFLoader.js";

export class AsyncGLTFLoader {
  constructor() {
    this.loader = new GLTFLoader();
  }
  async load(path) {
    return new Promise(resolve => {
      this.loader.load(path, resolve);
    });
  }
}