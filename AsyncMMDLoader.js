import { MMDLoader } from "https://code4fukui.github.io/three.js_examples/jsm/loaders/MMDLoader.js";

export class AsyncMMDLoader {
  constructor() {
    this.mmdloader = new MMDLoader();
  }
  async loadMMD(path) {
    return new Promise(resolve => {
      this.mmdloader.load(path, resolve);
    });
  }
  async loadAnimation(path, mesh) {
    return new Promise(resolve => {
      this.mmdloader.loadAnimation(path, mesh, resolve);
    });
  }
  async loadVPD(path, b) {
    return new Promise(resolve => {
      this.mmdloader.loadVPD(path, b, resolve);
    });
  }
};
