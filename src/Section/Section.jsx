import React from "react";
import Drone from "./img/Drone.png";

const Section = () => {
  return (
    <div className="text-center">
      <h1 className="fw-bolder">
        The first high-end drone at an affordable price, now in
      </h1>
      <button className="btn btn-primary rounded-pill">ORDER NOW</button>
      <div>
        <img src={ Drone } alt="Drone" />
      </div>
    </div>
  );
};

export default Section;
