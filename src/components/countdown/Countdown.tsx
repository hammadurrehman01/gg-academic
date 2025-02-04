import React, { useState, useEffect } from "react";

const GetTimeLeft = () => {
  const initialTime = 2 * 60 * 59; // 2 hours in seconds
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        // Stop the timer when it reaches zero
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timerInterval);
          return 0;
        }
      });
    }, 7000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timerInterval);
  }, []);

  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="flex items-center justify-center content-center text-center gap-1 sm:gap-2 ">
      <p className="value text-[#1c3d72] font-semibold text-[18px] sm:text-[20px] flex flex-col justify-center items-center ">
        {hours}
        <span className="label text-center uppercase text-[10px]  font-extrabold text-black ">
          hours
        </span>
      </p>
      <span className="text-[20px] max-sm:text-[20px] mt-[-20px]">:</span>
      <p className="value text-[#1c3d72] font-semibold text-[18px] sm:text-[20px] flex flex-col justify-center items-center">
        {minutes}
        <span className="label text-center uppercase text-[10px]  font-extrabold text-black ">
          minutes
        </span>
      </p>
      <span className="text-[20px] max-sm:text-[20px] mt-[-20px]">:</span>
      <p className="value text-[#1c3d72] font-semibold text-[18px] sm:text-[20px] flex flex-col justify-center items-center">
        {seconds}
        <span className="label text-center uppercase text-[10px]  font-extrabold text-black ">
          seconds
        </span>
      </p>
    </div>
  );
};

export default GetTimeLeft;
