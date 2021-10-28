import "aframe";
// import "aframe-particle-system-component";
import { Entity, Scene } from "aframe-react";
import React from "react";
import ReactDOM from "react-dom";

export class Demo extends React.Component {
  render() {
    return (
      <Scene>
        <a-assets>
          <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
            alt=""
          />
          <img
            id="skyTexture"
            src="https://cdn.aframe.io/a-painter/images/sky.jpg"
            alt=""
          />
        </a-assets>
        <Entity
          primitive="a-plane"
          src="#groundTexture"
          rotation="-90 0 0"
          height="100"
          width="100"
        />
        <Entity primitive="a-light" type="ambient" color="#445451" />
        <Entity
          primitive="a-light"
          type="point"
          intensity="2"
          position="2 4 4"
        />
        <Entity
          primitive="a-sky"
          height="2048"
          radius="30"
          src="#skyTexture"
          theta-length="90"
          width="2048"
        />
        <Entity
          geometry={{ primitive: "box" }}
          material={{ color: "red" }}
          position={{ x: 0, y: 0, z: -5 }}
        />
        <Entity particle-system={{ preset: "star", particleCount: 2000 }} />
        {/* <Entity particle-system={{ preset: "snow" }} /> */}
        <Entity light={{ type: "point" }} />
        <Entity gltf-model={{ src: "virtualcity.gltf" }} />
        <Entity text={{ value: "Hello, WebVR!" }} />
      </Scene>
    );
  }
}

// ReactDOM.render(<VRScene />, document.querySelector("#sceneContainer"));
