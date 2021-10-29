import React, { useState } from 'react';

const HumidityDisplay = (props: any) => {
  const { humidityPercentage, big } = props;
  const getTypeClass: string = (big ? 'big' : 'small');
  return (
    <div className={`humidity-container ${getTypeClass}`}>
      <span className={`humidity-text ${getTypeClass}`}>Humidity</span>
      <br />
      <span className={`humidity-percentage ${getTypeClass}`}>{`${humidityPercentage}%`}</span>
    </div>
  );
};

export default HumidityDisplay;
