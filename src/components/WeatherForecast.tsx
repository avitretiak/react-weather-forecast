import React, { useState, useEffect } from 'react';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import './styles/WeatherForecast.scss';

const WeatherForecast = () => {
  const [location, setLocation] = useState({ lat: 0.00, lng: 0.00 });
  const [apiData, setApiData] = useState<any>();
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat.toPrecision(4)}&lon=${location.lng.toPrecision(4)}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  const loadWeather = async () => {
    if (location.lat || location.lng) {
      await fetch(apiUrl).then((response) => {
        if (!response.ok) {
          console.log(`Did not get an ok. got: ${response.statusText}`);
        }
        return response.json();
      })
        .then((json) => setApiData(json))
        .catch((error) => {
          console.log(`Error getting weather data: ${error.message}`);
        });
    }
  };
  useEffect(() => {
    loadWeather();
  }, [apiUrl]);

  return (
    <div className="weather-forecast-container">
      <LeftPane
        currentWeather={apiData?.current}
        timezoneOffset={apiData?.timezone_offset}
        location={location}
        setLocation={setLocation}
      />
    </div>
  );
};

export default WeatherForecast;
