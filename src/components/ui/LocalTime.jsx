import React, { useEffect, useState } from 'react';

// Live clock in the given IANA time zone, e.g. "Asia/Dhaka".
const LocalTime = ({ timeZone, className = '' }) => {
  const format = () =>
    new Date().toLocaleTimeString('en-US', { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  });

  return <span className={`tabular-nums ${className}`}>{time}</span>;
};

export default LocalTime;
