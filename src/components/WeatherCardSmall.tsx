import React from 'react';
import dayjs from 'dayjs';
import WeatherIcon from './WeatherIcon';
import HumidityDisplay from './HumidityDisplay';
import './styles/WeatherCardSmall.scss';

const WeatherCardSmall = ({
  forecast, dayOffset, handleClick, selectedDay,
}: any) => {
  const className = `weather-card-small inline-block ${dayOffset === selectedDay ? 'selected' : ''}`;
  return (
    <button type="button" className={className} onClick={() => handleClick(dayOffset)}>
      <span className="block weather-card-small-day">
        {dayOffset === 0 ? 'Today' : `${dayjs().add(dayOffset, 'day').format('MMM DD')}`}
      </span>
      <WeatherIcon iconId={forecast.weather[0].icon} />
      <HumidityDisplay humidityPercentage={forecast.humidity} />
    </button>
  );
};

export default WeatherCardSmall;
