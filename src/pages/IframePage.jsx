import React from "react";
import Iframe from "react-iframe";

const IframePage = () => {
  return (
    <div
      id="iframe-container"
      style={{ width: "100vw", height: "60vh", overflow: "visible" }}
    >
      <Iframe
        id="iframe"
        src="./vr.html"
        style={{ width: "100%", overflow: "visible" }}
      />
    </div>
  );
};

export default IframePage;
