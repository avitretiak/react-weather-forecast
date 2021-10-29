import React from 'react';
import LocationInput from './LocationInput';
import './styles/LeftPane.scss';
import WeatherCardBig from './WeatherCardBig';

const LeftPane = (props: any) => {
  const {
    setLocation, currentWeather, timezoneOffset,
  } = props;

  return (
    <div className="left-pane-container">
      <LocationInput
        setLocation={setLocation}
      />
      {currentWeather ? (
        <>
          <WeatherCardBig weather={currentWeather} timezoneOffset={timezoneOffset} />
        </>
      ) : ''}
    </div>
  );
};

export default LeftPane;
