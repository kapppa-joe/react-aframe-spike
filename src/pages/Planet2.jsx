import React from "react";
import "aframe";
import Mars from "../assets/3d-models/mars_1_6792.glb";
import Neptune from "../assets/3d-models/Neptune_1_49528.glb";

const Planet = () => {
  return (
    <a-scene
      arjs
      embedded
      renderer="logarithmicDepthBuffer: true;"
      vr-mode-ui="enabled: false"
      gesture-detector
      id="scene"
    >
      <a-assets>
        <a-asset-item id="mars" src={Mars}></a-asset-item>
        <a-asset-item id="neptune" src={Neptune}></a-asset-item>
      </a-assets>

      <a-marker
        preset="custom"
        type="pattern"
        url="pattern-hip-hip-array-bw2.patt"
        raycaster="objects: .clickable"
        emitevents="true"
        cursor="fuse: false; rayOrigin: mouse;"
        smooth="true"
        smoothCount="100"
        id="marker-hip-hip"
      >
        <a-entity
          id="ar-model"
          gltf-model="#venus"
          position="-2.5 -2.5 2.5"
          scale="0.002 0.002 0.002"
          class="clickable"
          gesture-handler
        ></a-entity>
      </a-marker>

      <a-marker
        preset="custom"
        type="pattern"
        url="pattern-hip-hip-array-bw.patt"
        raycaster="objects: .clickable"
        emitevents="true"
        cursor="fuse: false; rayOrigin: mouse;"
        smooth="true"
        smoothCount="100"
        id="marker-hip-hip2"
      >
        <a-entity
          id="ar-model"
          gltf-model="#neptune"
          position="-2.5 -2.5 2.5"
          scale="0.002 0.002 0.002"
          class="clickable"
          gesture-handler
        ></a-entity>
      </a-marker>

      <a-marker
        preset="hiro"
        raycaster="objects: .clickable"
        emitevents="true"
        cursor="fuse: false; rayOrigin: mouse;"
        smooth="true"
        smoothCount="100"
        id="marker-hiro"
      >
        <a-entity
          id="ar-model"
          gltf-model="#mars"
          position="-2.5 -2.5 2.5"
          scale="0.002 0.002 0.002"
          class="clickable"
          gesture-handler
        ></a-entity>
      </a-marker>

      <a-marker
        preset="kanji"
        raycaster="objects: .clickable"
        emitevents="true"
        cursor="fuse: false; rayOrigin: mouse;"
        smooth="true"
        smoothCount="5000"
        id="marker-kanji"
      >
        <a-entity
          id="ar-model"
          gltf-model="#neptune"
          position="0 0 0"
          scale="0.002 0.002 0.002"
          class="clickable"
          gesture-handler
        ></a-entity>
      </a-marker>
    </a-scene>
  );
};

export default Planet;
