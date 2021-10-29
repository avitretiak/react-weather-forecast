import React from 'react';
import WeatherChart from './WeatherChart';
import './styles/RightPane.scss';

const RightPane = (props: any) => {
  const { dailyWeather } = props;
  const temperatures = dailyWeather?.slice(0, 4).map((day: any) => day.temp.day - 273.15);
  return (
    <div className="right-pane-container">
      <WeatherChart temperatures={temperatures} />
    </div>
  );
};

export default RightPane;
