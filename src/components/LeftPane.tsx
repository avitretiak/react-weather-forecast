import React from 'react';
import WeatherIcon from './WeatherIcon';
import LocationInput from './LocationInput';
import './styles/LeftPane.scss';

const LeftPane = (props: any) => {
  const {
    location, setLocation, apiData,
  } = props;
  const message = `It is currently ${apiData?.weather[0].main} in ${apiData?.name}`;

  return (
    <div className="left-pane-container">
      <LocationInput
        setLocation={setLocation}
      />
      {apiData ? (
        <>
          <WeatherIcon iconId={apiData?.weather[0].icon} />
          <span>{message}</span>
        </>
      ) : ''}
    </div>
  );
};

export default LeftPane;
