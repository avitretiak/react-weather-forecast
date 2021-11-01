import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import WeatherApp from './components/WeatherApp';

ReactDOM.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>,
  document.getElementById('root'),
);
