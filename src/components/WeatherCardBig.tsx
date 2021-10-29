import React from 'react';
import WeatherIcon from './WeatherIcon';
import HumidityDisplay from './HumidityDisplay';
import WindDisplay from './WindDisplay';
import DateTimeDisplay from './DateTimeDisplay';
import './styles/WeatherCardBig.scss';

const WeatherCardBig = (props: any) => {
  const {
    weather,
    timezoneOffset,
  } = props;

  return (
    <div className="weather-card-big">
      <DateTimeDisplay className="date-time-container" secondsOffset={timezoneOffset} />
      <WeatherIcon iconClass="wi-main" iconId={weather.weather[0].icon} />
      <span className="temp-display">
        {`${(weather.temp - 273.15).toFixed(1)} °C`}
      </span>
      <span className="current-weather-display">
        {weather.weather[0].main}
      </span>
      <HumidityDisplay humidityPercentage={weather.humidity} />
      <WindDisplay windSpeed={weather.wind_speed * 3.6} />
    </div>
  );
};

export default WeatherCardBig;
