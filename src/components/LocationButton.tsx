import React from 'react';
import './styles/LocationButton.scss';
import { Button } from 'antd';
import { AimOutlined } from '@ant-design/icons';
import {
  geocodeByLatLng,
} from 'react-google-places-autocomplete';

const LocationButton = (props: any) => {
  const { setLocation, setValue } = props;
  async function successCallback(position: any) {
    const [lat, lng] = [position.coords.latitude, position.coords.longitude];
    const locationResult = await geocodeByLatLng(
      { lat, lng },
    )
      .then((results) => results.filter((result) => result.types[0] === 'neighborhood'))
      .then((filteredResults) => filteredResults[0].formatted_address.split(', '))
      .then((splitName) => `${splitName[0]}, ${splitName[1]}`);
    setLocation({ lat, lng });
    setValue('Current Location');
  }

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(successCallback);
  };

  return (
    navigator.geolocation
      ? (
        <Button
          size="middle"
          className="location-btn"
          shape="circle"
          icon={<AimOutlined />}
          onClick={getLocation}
        />
      )
      : null
  );
};

export default LocationButton;
