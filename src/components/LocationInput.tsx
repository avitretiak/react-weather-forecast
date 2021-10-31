import React, { useState } from 'react';
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  getLatLng,
} from 'react-google-places-autocomplete';
import './styles/LocationInput.scss';
import LocationButton from './LocationButton';

const LocationInput = ({ setLocation }: any) => {
  const [value, setValue] = useState('Location');

  const handleLocation = async (event: any) => {
    await geocodeByPlaceId(event.value.place_id)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => setLocation({ lat, lng }));

    const text = event.value.terms[1]
      ? `${event.value.terms[0].value}, ${event.value.terms[1].value}`
      : `${event.value.terms[0].value}`;
    setValue(text);
  };

  const style = {
    input: (provided: any) => ({
      ...provided,
      width: '75%',
    }),
  };
  const selectProps = {
    placeholder: value,
    noOptionsMessage: () => 'No Results Found',
    components: {
      IndicatorSeparator: () => null,
      DropdownIndicator: () => null,
    },
    styles: { style },
    className: 'location-select-input',
    classNamePrefix: 'location-select-input',
    label: value,
    value,
    onSelect: handleLocation,
    onChange: handleLocation,
  };

  return (
    <div className="location-input-container">
      <GooglePlacesAutocomplete
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        debounce={1500}
        selectProps={{
          ...selectProps,
        }}
      />
      <LocationButton setValue={setValue} setLocation={setLocation} />
    </div>
  );
};

export default LocationInput;
