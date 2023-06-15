"use client";
import { useEffect, useState } from "react";
import "../styles/globals.css";

export default function Countdown() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const eventDate = new Date("Jul 20, 2023 23:59:59").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference < 0) {
      setCountdown({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" flex flex-column-reverse ">
      {/* <p>{countdown.days} days</p>
      <p>{countdown.hours} hours</p>
      <p>{countdown.minutes} minutes</p>
      <p>{countdown.seconds} seconds</p> */}
      <div className="stats shadow flex-1">
        <div className="stat place-items-center">
          <div className="stat-title text-secondMain font-orbitron">days</div>
          <div className="stat-value font-orbitron">
            {countdown.days < 10 ? `0${countdown.days}` : countdown.days}
          </div>
          <div className="stat-desc"> </div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title text-secondMain font-orbitron">hours</div>
          <div className=" stat-value font-orbitron  xs:stat-desc ">
            {countdown.hours < 10 ? `0${countdown.hours}` : countdown.hours}{" "}
          </div>
          <div className="stat-desc"> </div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title text-secondMain font-orbitron">
            minutes
          </div>
          <div className="stat-value font-orbitron">
            {countdown.minutes < 10
              ? `0${countdown.minutes}`
              : countdown.minutes}
          </div>
          <div className="stat-desc text-secondMain font-orbitron"></div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title text-secondMain font-orbitron">
            seconds
          </div>
          <div className="stat-value font-orbitron">
            {countdown.seconds < 10
              ? `0${countdown.seconds}`
              : countdown.seconds}
          </div>
          <div className="stat-desc"> </div>
        </div>
      </div>
    </div>
  );
}
