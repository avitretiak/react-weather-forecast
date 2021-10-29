import React from 'react';

const WindDisplay = (props: any) => {
  const { windSpeed } = props;
  return (
    <div className="windspeed-container ">
      <span className="windspeed-text ">Wind Speed</span>
      <br />
      <span className="windspeed-value ">{`${windSpeed.toFixed(1)} km/h`}</span>
    </div>
  );
};

export default WindDisplay;
