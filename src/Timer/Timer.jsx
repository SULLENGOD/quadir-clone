import React, { useState, useEffect} from "react";
import getCountdown from "./Countdown/getCountdown";

const defaultTime = {
  seconds: "00",
  minutes: "00",
};

const Timer = ({ timeStamp }) => {

    const [ timer, setTimer ] = useState(defaultTime)

    useEffect( () => {
        const interval = setInterval( () => {
            updateTime( timeStamp )
        }, 1000);
        return () => clearTimeout( interval )
    }, [ timeStamp ])

    function updateTime( countdown ) {
        setTimer(getCountdown(countdown))
    }

  return (
    <div className="pt-3">
      <h5>{ timer.minutes }</h5>
      <span className="fw-bold">  min  </span>
      <h5>{ timer.seconds }</h5>
      <span className="fw-bold">  sec</span>
    </div>
  );
};

export default Timer;
