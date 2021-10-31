import React, { useState } from 'react';
import WeatherChart from './WeatherChart';
import WeatherCardSmall from './WeatherCardSmall';

const RightPane = ({ dailyWeather }: any) => {
  const [selectedDay, setSelectedDay] = useState(0);
  const nextFourDays = dailyWeather?.slice(0, 4);
  const temperatures = nextFourDays?.map((day: any) => day.temp.day - 273.15);

  const handleCardClick = (cardNumber: number) => {
    setSelectedDay(cardNumber);
  };
  return (
    <div className="right-pane-container">
      <WeatherChart temperatures={temperatures} selectedDay={selectedDay} />
      <div className="small-cards-container">
        {nextFourDays?.map(
          (forecast: any, i: number) => (
            <WeatherCardSmall
              forecast={forecast}
              dayOffset={i}
              selectedDay={selectedDay}
              handleClick={handleCardClick}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default RightPane;