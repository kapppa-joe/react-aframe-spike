import React from "react";
import "aframe";
import "aframe-orbit-controls";
// import "aframe-star-system-component";
import "../js/star-system";
import { Entity, Scene } from "aframe-react";
import MarsModel from "../assets/3d-models/mars_small.glb";

const AFrameVR = () => {
  return (
    <Scene vr-mode-ui="enabled: false" embedded className="a-scene">
      <Entity
        id="camera"
        camera={{ active: true }}
        position="0 0 5"
        orbit-controls={{
          target: "1 1 1",
          enableDamping: true,
          dampingFactor: 0.25,
          autoRotate: false,
          rotateSpeed: 0.16,
          minDistance: 3,
          maxDistance: 15,
        }}
      >
        <a-light
          type="spot"
          position="0 0 0"
          target="#target"
          color="#fff"
          intensity="1.2"
        ></a-light>
      </Entity>

      <Entity id="mouseCursor" cursor={{ rayOrigin: "mouse" }} />

      <Entity
        id="target"
        gltf-model={MarsModel}
        position="1 1 1"
        scale="0.3 0.3 0.3"
        class="clickable"
        animation="property: rotation; from: 0 0 0; to: 0 360 0; dur: 20000; easing: linear; loop: true"
        gesture-handler
      />

      <a-sky color="#000000"></a-sky>
      <Entity
        star-system={{
          count: 1000,
          radius: 250,
          depth: 0,
          size: 0.5,
        }}
      ></Entity>
    </Scene>
  );
};

export default AFrameVR;
