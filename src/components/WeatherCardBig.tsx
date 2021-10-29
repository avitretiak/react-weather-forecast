import React from 'react';
import WeatherIcon from './WeatherIcon';
import HumidityDisplay from './HumidityDisplay';
import WindDisplay from './WindDisplay';

const WeatherCardBig = (props: any) => {
  const {
    weather,
  } = props;

  return (
    <div className="weather-card-main">
      <WeatherIcon iconClass="wi-main" iconId={weather.weather[0].icon} />
      <span className="temp-display" />
      <span className="current-weather-display" />
      <HumidityDisplay humidityPercentage={weather.humidity} />
      <WindDisplay windSpeed={weather.wind_speed * 3.6} />
    </div>
  );
};

export default WeatherCardBig;
