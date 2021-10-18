import React, { useState } from 'react';
import LeftPane from './LeftPane';
import './styles/WeatherForecast.scss';

const WeatherForecast = () => {
  const [location, setLocation] = useState({});

  return (
    <div className="weather-forecast-container">
      <LeftPane location={location} setLocation={setLocation} />
    </div>
  );
};

export default WeatherForecast;
