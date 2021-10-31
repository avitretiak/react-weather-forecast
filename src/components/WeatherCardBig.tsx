import React from 'react';
import WeatherIcon from './WeatherIcon';
import HumidityDisplay from './HumidityDisplay';
import WindDisplay from './WindDisplay';
import DateTimeDisplay from './DateTimeDisplay';
import './styles/WeatherCardBig.scss';

const WeatherCardBig = ({ weather, timezoneOffset }: any) => (
  <div className="weather-card-big">
    <DateTimeDisplay className="date-time-container" secondsOffset={timezoneOffset} />
    <div className="weather-card-big-current">
      <WeatherIcon iconClass="wi-main" iconId={weather.weather[0].icon} />
      <span className="temp-display">
        {`${(weather.temp - 273.15).toFixed(1)}°c`}
      </span>
    </div>
    <span className="weather-card-big-current-text">
      {weather.weather[0].main}
    </span>
    <div className="weather-card-big-lower">
      <HumidityDisplay humidityPercentage={weather.humidity} />
      <WindDisplay windSpeed={weather.wind_speed * 3.6} />
    </div>
  </div>
);

export default WeatherCardBig;
