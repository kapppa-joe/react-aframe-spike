import React from "react";
import "aframe";
import "../js/aframe-glow";
import { Entity, Scene } from "aframe-react";
import MarsModel from "../assets/3d-models/Mars.glb";

const Test = () => {
  return (
    <Scene>
      <a-camera position="0 0 10" rotation="0 0 0" />
      <Entity
        id="box"
        position="0 0 3"
        geometry={{ primitive: "box" }}
        material={{
          color: "#4040F0",
        }}
        scale="1 1 1"
      />

      {/* <a-torus glow="c:0.3;p:1.1;" position="0 6 0"></a-torus> */}
      {/* <a-sphere glow="p:1.1;" position="0 0 0"></a-sphere> */}
      <Entity
        id="mars"
        emit-glow
        gltf-model={MarsModel}
        position="0 0 0"
        scale="0.1 0.1 0.1"
      >
        {/* <Entity
          geometry={{
            primitive: "ring",
            radiusInner: 7,
            radiusOuter: 10,
          }}
          material="side: double; color: yellow; opacity: 0.7"
          animation={{
            property: "rotation",
            from: "0 0 0",
            to: "0 360 0",
            dur: 2000,
            easing: "linear",
            loop: "true",
          }}
        ></Entity> */}
        {/* <Entity
          geometry={{ primitive: "sphere", radius: 10 }}
          material={{
            emissive: "#FFF",
            color: "#66C",
            opacity: 0.3,
            emissiveIntensity: 0.1,
          }}
          glow="p: 0.5;"
        /> */}
      </Entity>
    </Scene>
  );
};

export default Test;
