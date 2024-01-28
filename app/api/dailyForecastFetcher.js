// DailyForecastFetcher.js
import React, { useEffect, useState } from 'react';
import DailyForecastUI from '../ui/dailyForecastUI';

const DailyForecastFetcher = ({ cityName }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=1179e4c0e0ab49a48f3171723231910&q=${cityName}&days=10&aqi=no&alerts=no`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Use the forecastday array directly
        setDailyData(data.forecast.forecastday);
      } catch (error) {
        console.error('Error fetching daily weather data:', error);
      }
    };

    fetchData();
  }, [cityName]);

  return <DailyForecastUI dailyData={dailyData} />;
};

export default DailyForecastFetcher;
