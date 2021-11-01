import React, { useState, useEffect } from 'react';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import './styles/WeatherForecast.scss';

const WeatherForecast = () => {
  const [location, setLocation] = useState({ lat: 0.0, lng: 0.0 });
  const [apiData, setApiData] = useState<any>();
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat.toPrecision(
    4,
  )}&lon=${location.lng.toPrecision(4)}&exclude=minutely,hourly,alerts&appid=${
    process.env.REACT_APP_WEATHER_API_KEY
  }`;
  const loadWeather = async () => {
    if (location.lat || location.lng) {
      await fetch(apiUrl)
        .then((response) => response.json())
        .then((json) => setApiData(json));
    }
  };
  useEffect(() => {
    loadWeather();
  }, [apiUrl]);

  return (
    <div className="container">
      <LeftPane
        currentWeather={apiData?.current}
        timezoneOffset={apiData?.timezone_offset}
        location={location}
        setLocation={setLocation}
      />
      <RightPane dailyWeather={apiData?.daily} />
    </div>
  );
};

export default WeatherForecast;
