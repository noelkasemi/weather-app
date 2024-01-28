// ui/WeatherCard.js
import React from 'react';

const WeatherCard = ({ data }) => {
  const { location, current, } = data;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md md:max-w-2xl p-6">
      <h2 className="text-2xl font-semibold mb-4">{location.name}</h2>
      <div className="flex items-center">
        <img
          src={current.condition.icon}
          alt={current.condition.text}
          className="mr-2"
        />
        <span className="text-xl">{current.temp_c}°C</span>
      </div>
      <p className="text-gray-600 mt-2">{current.condition.text}</p>
    </div>
  );
};

export default WeatherCard;
