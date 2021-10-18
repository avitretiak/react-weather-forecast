import React from 'react';
import LocationInput from './LocationInput';
import './styles/LeftPane.scss';

const LeftPane = (props: any) => {
  const { location, setLocation } = props;

  return (
    <div className="left-pane-container">
      <LocationInput setLocation={setLocation} />
    </div>
  );
};

export default LeftPane;
