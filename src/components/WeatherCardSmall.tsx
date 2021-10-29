import React from 'react';
import dayjs from 'dayjs';
import WeatherIcon from './WeatherIcon';
import HumidityDisplay from './HumidityDisplay';
import './styles/WeatherCardSmall.scss';

const WeatherCardSmall = (props: any) => {
  const { forecast, dayOffset, handleClick } = props;
  return (
    <button type="button" className="weather-card-small" onClick={() => handleClick(dayOffset)}>
      <span className="weather-card-small-day">
        {dayOffset === 0 ? 'Today' : `${dayjs().add(dayOffset, 'day').format('MMM DD')}`}
      </span>
      <WeatherIcon iconId={forecast.weather[0].icon} />
      <HumidityDisplay humidityPercentage={forecast.humidity} />
    </button>
  );
};

export default WeatherCardSmall;
