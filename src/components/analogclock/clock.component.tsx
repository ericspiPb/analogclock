import React from 'react';

import './clock.css';

export interface ClockProps {}

export default function AnalogClock(props: ClockProps) {

  const [date, setDate] = React.useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, [date]);

  return (
    <div className="clock">
      <div className="clock-hour">
        <span className="clock-hour-hand" style={{transform: `rotateZ(${date.getHours() * 30 + date.getMinutes() * 0.5}deg)`}}></span>
      </div>
      <div className="clock-minute">
        <span className="clock-minute-hand" style={{transform: `rotateZ(${date.getMinutes() * 6}deg)`}}></span>
      </div>
      <div className="clock-second">
        <span className="clock-second-hand" style={{transform: `rotateZ(${date.getSeconds() * 6}deg)`}}></span>
      </div>
    </div>
  );
}