import React from 'react';

const HumidityDisplay = ({ humidityPercentage }: any) => (
  <div className="humidity-container">
    <span className="humidity-text">Humidity</span>
    <br />
    <span className="humidity-percentage">{`${humidityPercentage}%`}</span>
  </div>
);

export default HumidityDisplay;
