import React, {useState} from 'react';
import {BiCurrentLocation} from "react-icons/bi";
import './styles/GeoLocateButton.scss'

const GeoLocateButton = () => {
  return (
    <div className="GeoLocateButtonContainer"> 
        <button className="GeoLocateButton"><BiCurrentLocation /></button>
    </div>
  );
}



export default GeoLocateButton;