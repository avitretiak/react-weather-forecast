import React, { useState } from 'react';
import LeftPane from './LeftPane';
import './styles/WeatherForecast.scss';

const WeatherForecast = () => {
  const [value, setValue] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="weather-forecast-container">
      <LeftPane />
    </div>
  );
};

export default WeatherForecast;
