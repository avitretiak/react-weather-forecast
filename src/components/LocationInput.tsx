import React, {useState} from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import GeoLocateButton from './GeoLocateButton';
import './styles/LocationInput.scss'

const LocationInput = () => {
  const [location, setLocation] = useState();
  
  const styles = {
    container: (css: any) => ({ ...css, flex: "1 1 auto", alignSelf: "stretch"}),
    control: (css: any) => ({ ...css, 
      border: '0 !important',
      boxShadow: '0 !important',
      '&:hover': {
        border: '0 !important',
        cursor: 'text'
      },
    })
  };


  const selectCustomProps = {
    className: 'locationInputField form-control',
    placeholder: <div className="locationInputPlaceholder">Location</div>,
    components: {
      DropdownIndicator: () => null,
      IndicatorSeparator: () => null,
    },
    location,
    onChange: setLocation,
  }
  
  return (
    <div className="locationInput input-group">
      <GooglePlacesAutocomplete 
        selectProps={{...selectCustomProps, styles: styles}}
        debounce={1000}
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      />
      <div className="input-group-seamless-append">
        <GeoLocateButton />
      </div>
      
    </div>
  );
}

export default LocationInput;