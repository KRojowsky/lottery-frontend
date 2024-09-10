// src/components/CountdownTimer.jsx
import React, { useState, useEffect } from 'react';
import './CountdownTimer.scss';

const CountdownTimer = ({ targetDate, onClose }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-timer">
      <button className="close-btn" onClick={onClose}>X</button>
      <h3>Do końca loterii pozostało:</h3>
      <div className="timer">
        {timeLeft.days !== undefined && (
          <div className="time-unit">
            <span className="number">{timeLeft.days}</span>
            <span className="label">dni</span>
          </div>
        )}
        {timeLeft.hours !== undefined && (
          <div className="time-unit">
            <span className="number">{timeLeft.hours}</span>
            <span className="label">godz.</span>
          </div>
        )}
        {timeLeft.minutes !== undefined && (
          <div className="time-unit">
            <span className="number">{timeLeft.minutes}</span>
            <span className="label">min.</span>
          </div>
        )}
        {timeLeft.seconds !== undefined && (
          <div className="time-unit">
            <span className="number">{timeLeft.seconds}</span>
            <span className="label">sek.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
