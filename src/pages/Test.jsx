import React from "react";
import "aframe";
import "../js/aframe-glow";
import { Entity, Scene } from "aframe-react";

const Test = () => {
  return (
    <Scene>
      <Entity geometry={{ primitive: "box" }} position="0 0 -4"></Entity>
      <a-entity glow="c:0.3;" position="1 2 -4"></a-entity>
      <a-box position="1 3 -4"></a-box>
      <a-sphere glow="p:1.1;" position="0 0 0-4"></a-sphere>
      <a-sky></a-sky>
    </Scene>
  );
};

export default Test;
