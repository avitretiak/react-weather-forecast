import React from 'react';
import LocationInput from './LocationInput';
import './styles/LeftPane.scss';
import DateTimeDisplay from './DateTimeDisplay';
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
          <DateTimeDisplay secondsOffset={timezoneOffset} />
          <WeatherCardBig weather={currentWeather} />
        </>
      ) : ''}
    </div>
  );
};

export default LeftPane;
