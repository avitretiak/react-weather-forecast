import React from 'react';

const WindDisplay = ({ windSpeed }: any) => (
  <div className="windspeed-container">
    <span className="windspeed-text">Wind Speed</span>
    <br />
    <span className="windspeed-value">{`${windSpeed.toFixed(1)} km/h`}</span>
  </div>
);

export default WindDisplay;
