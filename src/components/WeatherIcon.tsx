import React from 'react';
import './styles/WeatherIcons.scss';

const WeatherIcon = (props: any) => {
  const { iconId, iconClass } = props;
  const weatherClass = `owi owi-${iconId} ${iconClass}`;

  return (
    <i className={weatherClass} />
  );
};

export default WeatherIcon;
