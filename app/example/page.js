"use client"
import React, { useState } from "react";

const WeatherApp = () => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [results, setResults] = useState([]);
  const [show, setShow] = useState(false);

  const handleCityChange = (e) => {
    setCityName(e.target.value);
    // Fetch search results here
  };

//   const setCityName = (city) => {
//     setCityName(city);
//     // Fetch weather data here
//   };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 p-8">
        <header className="mb-8">
          <input
            onFocus={() => setShow(true)}
            onBlur={() => setTimeout(() => setShow(false), 100)}
            type="text"
            placeholder="City Name"
            className="w-full p-2 border border-black rounded"
            onChange={handleCityChange}
          />
          <div
            className={`absolute mt-2 w-full bg-white border border-gray-300 rounded ${
              show ? "block" : "hidden"
            }`}
          >
            {/* Search results go here */}
          </div>
        </header>
        <CurrentWeatherFetcher
          cityName={cityName}
          setWeatherData={setWeatherData}
        />
        <HourlyForecastFetcher cityName={cityName} />
      </div>
      <div className="w-2/3 p-8">
        <DailyForecastFetcher cityName={cityName} />
      </div>
    </div>
  );
};

const CurrentWeatherFetcher = ({ cityName, setWeatherData }) => {
  // Fetch current weather data here

  return (
    <div className="bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Today</h2>
      <div className="flex space-x-4">
        <div>
          <p className="text-6xl font-semibold">31°</p>
          <p className="text-gray-500">Real Feel: 30°</p>
        </div>
        <div>
          <p>AIR CONDITIONS</p>
          <ul className="list-disc list-inside text-gray-500">
            <li>Chance of rain: 0%</li>
            <li>UV Index: 3</li>
            <li>Wind: 0.2 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const HourlyForecastFetcher = ({ cityName }) => {
  // Fetch hourly forecast data here

  return (
    <div className="bg-white p-8 rounded shadow mt-8">
      <h2 className="text-2xl font-semibold mb-4">Hourly Forecast</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Temperature</th>
            <th className="px-4 py-2">Conditions</th>
          </tr>
        </thead>
        <tbody>
          {/* Hourly forecast data goes here */}
        </tbody>
      </table>
    </div>
  );
};

const DailyForecastFetcher = ({ cityName }) => {
  // Fetch daily forecast data here

  return (
    <div className="bg-white p-8 rounded shadow mt-8">
      <h2 className="text-2xl font-semibold mb-4">Daily Forecast</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Day</th>
            <th className="px-4 py-2">High/Low</th>
            <th className="px-4 py-2">Conditions</th>
          </tr>
        </thead>
        <tbody>
          {/* Daily forecast data goes here */}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherApp;