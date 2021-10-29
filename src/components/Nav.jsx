import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav id="nav-bar">
      <Link className="button" to="./">
        VR
      </Link>
      <Link className="button" to="./ar">
        AR with marker
      </Link>
      <Link className="button" to="./ar_no_marker">
        AR - no marker
      </Link>
    </nav>
  );
};

export default Nav;
