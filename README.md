<h1 align="center">React Weather Forecast Widget</h1>

<div align="center">
   <img src="./public/logo192.png" />
   <br/>
   Solution for a challenge from  <a href="https://www.codementor.io/" target="_blank">DevProjects</a>.
</div>



<div align="center">
  <h3>
    <a href="https://avitretiak.github.io/react-weather-forecast/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/avitretiak/react-weather-forecast">
      Code
    </a>
    <span> | </span>
    <a href="https://www.codementor.io/projects/web/weather-forecast-website-atx32lz7zb">
      Challenge
    </a>
  </h3>
</div>



<!-- TABLE OF CONTENTS -->
- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)

## Overview
   <a target="_blank" href="https://avitretiak.github.io/react-weather-forecast/">
      <img src="https://github.com/avitretiak/react-weather-forecast/blob/gh-pages/appScreenshot.png?raw=true" /> 
   </a>

## Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->
- React
- Chart.js
- Sass
- TypeScript

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

- Location input bar, integrating Google's autocomplete and geocoding API
- Geolocation button to automatically use the user's location
- Display current weather including weather condition, temperature, humidity, wind speed, and the location's date and time
- Line chart with the temperature and humidity forecast for today and the next three days, with a daily temperature average that can be selected by the user

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com) installed on your computer.  

If building and/or using the project locally, you'll also need proper API keys for Google Maps Autocomplete, Google Maps Geocoding, and OpenWeatherMap's OneCall, these will be added to a .env file in the project's root directory.

From your command line:

```zsh
# Clone this repository
$ git clone git@github.com:avitretiak/react-weather-forecast.git

# Open the repository's folder
$ cd react-weather-forecast

# Install dependencies
$ yarn

# Create .env file for API keys
$ touch .env

# Add your API keys to the .env file, where '<ApiKeyHere>' is the corresponding API key
$ echo 'REACT_APP_GOOGLE_API_KEY=<ApiKeyHere>' > .env
$ echo 'REACT_APP_WEATHER_API_KEY=<ApiKeyHere>' > .env

# Run the app
$ yarn start

# Build the app for deployment
$ yarn build 
```
