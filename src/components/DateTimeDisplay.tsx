import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

const DateTimeDisplay = ({ secondsOffset }: any) => {
  dayjs.extend(utc);
  const [dateTime, setDateTime] = useState(dayjs.utc());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(dayjs.utc());
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsOffset]);

  const dateTimeText = `${dateTime
    .utcOffset(secondsOffset / 60)
    .format('hh:mm a, dddd, MMM DD, YYYY')}`;

  return <span className="date-time-text">{dateTimeText}</span>;
};

export default DateTimeDisplay;
