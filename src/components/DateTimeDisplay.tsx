import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import './styles/LeftPane.scss';

const DateTimeDisplay = (props: any) => {
  const { secondsOffset } = props;
  dayjs.extend(utc);
  const [dateTime, setDateTime] = useState(dayjs.utc());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(dayjs.utc());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const dateTimeText = `${dateTime.utcOffset(secondsOffset / 60).format('hh:mm a, dddd, MMM DD, YYYY')}`;

  return (
    <span>
      {dateTimeText}
    </span>
  );
};

export default DateTimeDisplay;
