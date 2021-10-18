import React from 'react';
import './styles/WeatherIcons.scss';

const WeatherIcon = (props: any) => {
  const { iconId } = props;
  const weatherClass = `owi owi-${iconId}`;

  return (
    <>
      <span className={weatherClass} />
    </>
  );
};

export default WeatherIcon;
