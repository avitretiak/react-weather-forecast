import React from 'react';
import { Button } from 'antd';
import { AimOutlined } from '@ant-design/icons';
import { geocodeByLatLng } from 'react-google-places-autocomplete';

const LocationButton = ({ setLocation, setValue }: any) => {
  async function successCallback(position: any) {
    const [lat, lng] = [position.coords.latitude, position.coords.longitude];
    await geocodeByLatLng({ lat, lng })
      .then((results) => results.filter((result) => result.types[0] === 'postal_code'))
      .then((filteredResults) => filteredResults[0].formatted_address.split(', '))
      .then((splitName) => `${splitName[0]}, ${splitName[1]}`);
    setLocation({ lat, lng });
    setValue('Current Location');
  }

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(successCallback);
  };

  return navigator.geolocation ? (
    <Button
      size="middle"
      className="location-btn"
      shape="circle"
      icon={<AimOutlined />}
      onClick={getLocation}
    />
  ) : null;
};

export default LocationButton;
