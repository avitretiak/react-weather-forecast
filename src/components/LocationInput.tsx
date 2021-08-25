import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import './styles/LocationInput.scss';
import { Input } from 'antd';
import LocationButton from './LocationButton';

const LocationInput = () => {
  // const [value, setValue] = useState('');
  // const [location, setLocation] = useState('');

  const selectProps = {
    placeholder: 'Location',
    noOptionsMessage: () => 'No Results Found',
  };
  const style = {
    input: (provided: any) => ({
      ...provided,
      width: '75%',
    }),
  };

  return (
    <Input.Group>
      <GooglePlacesAutocomplete
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        debounce={1500}
        selectProps={{
          ...selectProps,
          components: {
            IndicatorSeparator: () => null,
            DropdownIndicator: () => null,
          },
          styles: { style },
          className: 'location-select-input',
          classNamePrefix: 'location-select-input',
        }}
      />
      <LocationButton />
    </Input.Group>
  );
};

export default LocationInput;
