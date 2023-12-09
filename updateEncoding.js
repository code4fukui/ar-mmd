import { THREE } from "https://code4fukui.github.io/egxr.js/egxr.js";

// three.jsでは、テクスチャのエンコーディングタイプを設定できます。例えば、sRGBエンコーディングを使用する場合は `texture.encoding = THREE.sRGBEncoding;` のように設定します。

export const updateEncodingMaterial = (material, enc) => {
  console.log(material, THREE.sRGBEncoding, THREE.LinearEncoding, enc);
  if (material.map) material.map.encoding = enc;
  if (material.emissiveMap) material.emissiveMap.encoding = enc;
  if (material.map || material.emissiveMap) material.needsUpdate = true;
  return material;
};

export const updateEncodingModel = (model, enc = THREE.sRGBEncoding) => {
  model.traverse(child => {
    if (child.isMesh && child.material) {
      if (Array.isArray(child.material)) {
        for (const m of child.material) {
          updateEncodingMaterial(m, enc);
        }
      } else {
        updateEncodingMaterial(child.material, enc);
      }
    }
  });
  return model;
};
