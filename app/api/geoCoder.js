// api/GeoCoder.js
"use client";
import React, { useState, useEffect } from "react";

const GeoCoder = ({ setLonLat, setWeatherData, cityName, show }) => {
  const [geocodingResults, setGeocodingResults] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=3bcc32d37c4f0b7082c3c91ed936fe6d`
        );
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        setGeocodingResults(data);
      } catch (error) {
        console.error("Error fetching geolocation data:", error);
      }
    };
  
    if (show) {
      fetchData();
    }
  }, [cityName, show]);
  

  const handleResultClick = (result) => {
    setLonLat({ lat: result.lat, lon: result.lon });
    setWeatherData(null); // Reset weather data before fetching new data
  };

  return (
    <>
      {show && (
        <section className="bg-white w-fit h-fit p-4 rounded space-y-3">
          <p>Choose a location:</p>
          <ul className="space-y-2">
            {geocodingResults.map((result) => (
              <li
                className="hover:bg-gray-300 cursor-pointer px-2 py-1 "
                key={result.lat + result.lon}
                onClick={() => handleResultClick(result)}
              >
                {result.name}, {result.state}, {result.country}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default GeoCoder;
