import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ setModelName }) => {
  const models = ["mars", "venus"];

  return (
    <nav id="nav-bar">
      <div classame="row">
        <Link className="button" to={`/vr`}>
          VR
        </Link>
        <Link className="button" to={`/ar`}>
          AR
        </Link>
        <Link className="button" to={`/ar_no_marker`}>
          AR no marker
        </Link>
        <Link className="button" to="/test_ui_look">
          Test UI Look
        </Link>
      </div>
      <div className="row">
        Planet:
        {models.map((model) => {
          return (
            <button
              key={model}
              className="button"
              onClick={() => setModelName(model)}
            >
              {model}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
