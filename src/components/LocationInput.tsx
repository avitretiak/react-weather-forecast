import React, { useState } from 'react';
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  getLatLng,
} from 'react-google-places-autocomplete';
import './styles/LocationInput.scss';
import LocationButton from './LocationButton';

const LocationInput = (props: any) => {
  const { setLocation } = props;
  const [value] = useState();

  const handleLocation = async (event: any) => {
    await geocodeByPlaceId(event.value.place_id)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => setLocation({ lat, lng }));
  };

  const style = {
    input: (provided: any) => ({
      ...provided,
      width: '75%',
    }),
  };
  const selectProps = {
    placeholder: 'Location',
    noOptionsMessage: () => 'No Results Found',
    components: {
      IndicatorSeparator: () => null,
      DropdownIndicator: () => null,
    },
    styles: { style },
    className: 'location-select-input',
    classNamePrefix: 'location-select-input',
    value,
    onChange: handleLocation,
  };

  return (
    <div className="location-container">
      <GooglePlacesAutocomplete
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        debounce={1500}
        selectProps={{
          ...selectProps,
        }}
      />
      <LocationButton />
    </div>
  );
};

export default LocationInput;
