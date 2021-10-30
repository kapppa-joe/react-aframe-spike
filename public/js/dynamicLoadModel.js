const modelList = [
  { name: "mars", "gltf-model": "./model/mars_small.glb" },
  { name: "venus", "gltf-model": "./model/venus_small.glb" },
];

const defaultModel = {
  name: "mars",
  "gltf-model": "./model/mars_small.glb",
};

AFRAME.registerComponent("dynamic-load-model", {
  schema: {
    enabled: { default: true },
  },

  init: function () {
    const modelToLoad = getModel();
    if (modelToLoad) {
      for (const [key, value] of Object.entries(modelToLoad)) {
        if (key !== "name") {
          this.el.setAttribute(key, value);
        }
      }
    }
  },
});

function getModel() {
  const urlParams = new URLSearchParams(window.location.search);
  const modelName = urlParams.get("model");
  if (!modelName) {
    console.log("can't determine which model to load");
    return defaultModel;
  }
  return modelList.find((model) => model.name === modelName);
}
