import React, { useState } from 'react';
import LeftPane from './LeftPane';
import './styles/WeatherForecast.scss';

const WeatherForecast = () => (
  <div className="weather-forecast-container">
    <LeftPane />
  </div>
);

export default WeatherForecast;
