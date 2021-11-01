import React from 'react';
import './styles/_icons.scss';

const WeatherIcon = ({ iconId, iconClass }: any) => {
  const weatherClass = `block owi owi-${iconId} ${iconClass}`;

  return <i className={weatherClass} />;
};

export default WeatherIcon;
