import React from "react";

import MarsBadge from "../assets/mars-badge.png";
import "../TestUILook.css";

const TestUILook = () => {
  return (
    <section id="test-ui-look">
      <div>
        <img className="badge" src={MarsBadge} alt="mars-badge" />
        <p>
          Mars is the fourth planet from the Sun – a dusty, cold, desert world
          with a very thin atmosphere. Mars is also a dynamic planet with
          seasons, polar ice caps, canyons, extinct volcanoes, and evidence that
          it was even more active in the past.
        </p>
      </div>
    </section>
  );
};

export default TestUILook;
