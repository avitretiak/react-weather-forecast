import React from 'react';
import LocationInput from './LocationInput';
import WeatherCardBig from './WeatherCardBig';

const LeftPane = ({ setLocation, currentWeather, timezoneOffset }: any) => (
  <div className="left-pane-container">
    <LocationInput setLocation={setLocation} />
    {currentWeather ? (
      <>
        <WeatherCardBig weather={currentWeather} timezoneOffset={timezoneOffset} />
      </>
    ) : (
      ''
    )}
  </div>
);

export default LeftPane;
