import React from "react";
import "aframe";
import { Entity, Scene } from "aframe-react";
import Mars from "../assets/3d-models/mars_1_6792.glb";
import Neptune from "../assets/3d-models/Neptune_1_49528.glb";

const Planet = () => {
  return (
    <Scene>
      <a-assets>
        <a-asset-item id="mars" src={Mars}></a-asset-item>
        <a-asset-item id="neptune" src={Neptune}></a-asset-item>
      </a-assets>

      {/* <a-entity
        id="camera"
        camera
        position="0 0 5"
        orbit-controls="target: #target;
                              enableDamping: true; dampingFactor: 0.25;
                              autoRotate: false;
                              rotateSpeed:0.16;
                              minDistance:3; maxDistance:15;"
        mouse-cursor=""
      >
        <a-light type="spot" position="0 0 0" target="#target" color="#fff">
          <a-animation
            attribute="position"
            direction="alternate"
            from="0 0 0"
            to="0 5 0"
            dur="5000"
            easing="ease"
            fill="forwards"
            repeat="indefinite"
          ></a-animation>
        </a-light>
      </a-entity> */}
      <Entity
        id="target"
        gltf-model="#mars"
        position="1 1 1"
        scale="0.002 0.002 0.002"
        class="clickable"
        gesture-handler
      >
        <a-animation
          attribute="scale"
          direction="alternate"
          from="1 1 1"
          to="2 2 2"
          dur="1000"
          easing="ease-elastic"
          fill="forwards"
          repeat="indefinite"
        ></a-animation>
      </Entity>
      {/* <a-box id="target" position="0 0 0" radius="1" material="color:#fdb619; roughness:1; metalness:0.5;">
      <a-animation attribute="scale" direction="alternate"
                   from="1 1 1" to="2 2 2"
                   dur="2000" easing="ease-elastic"
                   fill="forwards" repeat="indefinite"
                   ></a-animation>
      <a-animation attribute="color" direction="alternate"
                   from="white" to="red"
                   dur="2000" easing="ease-elastic"
                   fill="forwards" repeat="indefinite"
                   ></a-animation>
    </a-box>
      */}
      <a-sky color="#000000"></a-sky>
    </Scene>
  );
};

export default Planet;
