import React from "react";
import { useState } from "react";
import Timer from "../Timer/Timer";
import Drone from "./img/Drone.png";
import "./Section.css";

const Section = () => {
  const getCountry = async () => {
    const resp = await fetch("https://api.ipregistry.co/?key=ogg11epxr23zr784");
    const countryRes = await resp.json();

    const country = countryRes.location.country.name;

    return country;
  };

  const [country, setCountry] = useState(null);
  const [timer, setTimer] = useState(null);

  getCountry().then((data) => {
    setCountry(data);
  });

  const showTimer = () => {
    const timeStampNow = Date.now();
    const timeStamp15 = timeStampNow + 902000;
    
    setTimer(<Timer timeStamp={timeStamp15} />);
  };

  return (
    <div className="text-center pt-3">
      <h1 className="fw-bolder pb-3">
        The first high-end drone at an affordable price, now in {country}
      </h1>
      <button
        className="btn btn-primary rounded-pill btn-lg"
        onClick={showTimer}
      >
        ORDER NOW
      </button>
      {timer}
      <div>
        <img src={Drone} alt="Drone" className="drone" />
      </div>
    </div>
  );
};

export default Section;
