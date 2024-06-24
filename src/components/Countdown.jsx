import React, { useState, useEffect } from "react";

function Countdown({ duration }) {
  const [timer, setTimer] = useState(duration);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [h, setHours] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTimer(timer - 1000);
    }, 1000);
    getCountdown(timer);
  }, [timer]);

  const getCountdown = (time) => {
    let seconds = parseInt(Math.floor(time / 1000));
    let minutes = parseInt(Math.floor(seconds / 60));
    let hours = parseInt(Math.floor(minutes / 60));
    let days = parseInt(Math.floor(hours / 24));

    // 24 hours format
    seconds = parseInt(seconds % 60);
    minutes = parseInt(minutes % 60);
    hours = parseInt(hours % 24);

    setDays(days);
    setHours(hours);
    setMin(minutes);
    setSec(seconds);
  };

  return (
    <div className="text-center md:text-md text-sm font-bold text-yellow-300">
      <div className="flex items-center border-white border-2 p-0.5 rounded-lg bg-gray-800 w-fit shadow-lg">
        <p className="mx-1">{days}days</p>:<p className="mx-1">{h}hr</p>:
        <p className="mx-1">{min}min</p>:<p className="mx-1">{sec}s</p>
      </div>
    </div>
  );
}

export default Countdown;
