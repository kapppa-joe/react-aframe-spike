import React, { useState } from "react";
import "aframe";
import "../js/star-system";
import "../js/aframe-orbit-controls-component";
import "../js/detect-click";
import { Entity, Scene } from "aframe-react";

import Models from "../assets/3d-models/index.js";

const solarSystemPlanetsData = {
  mercury: {
    siderealYears: 0.2408467,
    selfRotationPeriod: 0.16,
    radius: 2439,
    distanceFromSun: 57909227,
    color: "#CCC",
  },
  venus: {
    siderealYears: 0.61519726,
    selfRotationPeriod: 0.6658,
    radius: 6051,
    distanceFromSun: 108209475,
    color: "#FF9",
  },
  earth: {
    siderealYears: 1.0000174,
    radius: 6371,
    selfRotationPeriod: 0.0027,
    distanceFromSun: 149598262,
    color: "#33F",
  },
  mars: {
    siderealYears: 1.8808476,
    radius: 3389,
    selfRotationPeriod: 0.0027,
    distanceFromSun: 227943824,
    color: "#F33",
  },
  jupiter: {
    siderealYears: 11.862615,
    radius: 69911,
    selfRotationPeriod: 0.001132,
    distanceFromSun: 778340821,
    color: "#3F3",
  },
  saturn: {
    siderealYears: 29.447498,
    radius: 58232,
    selfRotationPeriod: 0.001205,
    distanceFromSun: 1426666422,
    color: "#FF3",
  },
  uranus: {
    siderealYears: 84.016846,
    radius: 25362,
    selfRotationPeriod: 0.001968,
    distanceFromSun: 2870658186,
    color: "#CCC",
  },
  neptune: {
    siderealYears: 164.79132,
    radius: 24622,
    selfRotationPeriod: 0.001839,
    distanceFromSun: 4498396441,
    color: "#33F",
  },
  pluto: {
    siderealYears: 248.5,
    radius: 1188.3,
    selfRotationPeriod: 0.017499,
    distanceFromSun: 5906380000,
    color: "#999",
  },
};
const nonPlanets = {
  sun: {
    siderealYears: 0,
    radius: 695508,
    distanceFromSun: 0,
  },
  moon: {
    radius: 1371,
  },
};

const roundToDecimalPlace = (value, n) => {
  if (n < 0) {
    return 0;
  }
  return Math.round(value * 10 ** n) / 10 ** n;
};

const speedRatio = 12000;
const sizeScaleFunc = (radius) =>
  roundToDecimalPlace((Math.log(radius) - 7) * 0.08 + 0.1, 2);

const distanceScaleFunc = (dis) =>
  (Math.round(dis / 57909200 + Math.log(dis) * 5) - 82) * 1.2;

const generatePlanet = (planetData) => {
  const { siderealYears, radius, distanceFromSun, selfRotationPeriod } =
    planetData;

  return {
    duration: speedRatio * siderealYears,
    selfRotationDuration: speedRatio * selfRotationPeriod,
    scale: sizeScaleFunc(radius),
    position: distanceScaleFunc(distanceFromSun),
    color: planetData.color,
  };
};

// Object.entries(solarSystemPlanetsData).map(([name, planetData]) => {
//   console.log(name, generatePlanet(planetData));
// });

// const planetNames = Object.keys(solarSystemPlanetsData);

const AFrameVR = () => {
  const [cameraTarget, setCameraTarget] = useState("#sun");
  const [message, setMessage] = useState("");

  return (
    <>
      {/* <button className="button" onClick={() => setCameraTarget("#earth")}>
        Change target
      </button> */}
      {message && <span>{message}</span>}
      <Scene
        vr-mode-ui="enabled: false"
        renderer="colorManagement: true;"
        embedded
        className="a-scene"
      >
        <Entity
          id="camera"
          camera={{ active: true }}
          // position="0 -20 -80"
          orbit-controls={{
            target: cameraTarget,
            enableDamping: true,
            dampingFactor: 0.25,
            autoRotate: false,
            rotateSpeed: 0.16,
            minDistance: 10,
            maxDistance: 250,
            minPolarAngle: -90,
            maxPolarAngle: 90,
          }}
        >
          <a-light
            type="ambient"
            position="0 0 0"
            color="#fff"
            intensity="0.15"
          ></a-light>
        </Entity>

        <Entity id="mouseCursor" cursor={{ rayOrigin: "mouse" }} />

        <a-light
          id="center-lighting"
          type="point"
          position="0 0 0"
          color="#fff"
          intensity="2"
        ></a-light>

        <Entity id="camera-center" position="0 0 0" visible="false" />
        <Entity
          id="sun"
          gltf-model={Models["sun"].default}
          position="0 0 0"
          scale="1 1 1"
          detect-click={{
            // element: "#earth",
            onClick: (e) => {
              setMessage(`you have clicked ${e.target.id}`);
            },
            onMouseEnter: (e) => {
              console.log("mouse enter for :", e.target.id);
              setMessage(`you have hovered ${e.target.id}`);
            },
          }}
        ></Entity>

        {Object.entries(Models).map(([model_name, path], idx) => {
          if (model_name in solarSystemPlanetsData) {
            let { duration, scale, position, color, selfRotationDuration } =
              generatePlanet(solarSystemPlanetsData[model_name]);
            return (
              <Entity
                id={model_name + "-locus"}
                key={model_name}
                className="locus"
                geometry={{
                  arc: 90,
                  primitive: "torus",
                  radius: position,
                  radiusTubular: 0.03,
                  segmentsTubular: 50,
                }}
                position="0 0 0"
                material={{ shader: "flat", color: color, opacity: 0.6 }}
                animation={{
                  property: "rotation",
                  from: "0 0 -180",
                  to: "0 0 180",
                  dur: duration,
                  easing: "linear",
                  loop: "true",
                }}
              >
                <Entity
                  geometry={{
                    primitive: "ring",
                    radiusInner: position - 0.03,
                    radiusOuter: position,
                    segmentsTheta: 50,
                  }}
                  material={{
                    side: "double",
                    color: "#CCC",
                  }}
                ></Entity>
                <Entity
                  id={model_name + "-self-tilt"}
                  position={`0 ${position} 0`}
                  rotation="-67 0 0"
                >
                  <Entity
                    id={model_name}
                    gltf-model={path.default}
                    scale={`${scale} ${scale} ${scale}`}
                    className="planet"
                    detect-click={{
                      onClick: (e) => {
                        setMessage(`you have clicked ${e.target.id}`);
                      },
                      onMouseEnter: (e) => {
                        console.log("mouse enter for :", e.target.id);
                        setMessage(`you have hovered ${e.target.id}`);
                      },
                    }}
                    animation={{
                      property: "rotation",
                      from: "0 0 0",
                      to: "0 360 0",
                      dur: selfRotationDuration * 365,
                      easing: "linear",
                      loop: "true",
                    }}
                  />
                </Entity>
              </Entity>
            );
          }
        })}

        <a-sky color="#000000"></a-sky>
        <Entity
          star-system={{
            count: 2000,
            radius: 250,
            depth: 0,
            size: 0.5,
          }}
        ></Entity>
      </Scene>
    </>
  );
};

export default AFrameVR;
