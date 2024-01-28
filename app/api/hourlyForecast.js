// WeatherAPI.js
import React, { useEffect, useState } from 'react';
import HourlyForecastUI from '../ui/hourlyForecastUI';

const HourlyForecastFetcher = ({ cityName }) => {
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=1179e4c0e0ab49a48f3171723231910&q=${cityName}&days=1&aqi=no&alerts=no`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Filter hourly data for the next 24 hours
        const currentHour = new Date().getHours();
        const todayDate = new Date().toISOString().split('T')[0];
        const next24HoursData = data.forecast.forecastday[0].hour.filter(
          (hour) => {
            const hourDate = hour.time.split(' ')[0];
            const hourTime = parseInt(hour.time.split(' ')[1].split(':')[0]);

            // Include hours from the current hour onwards until the same hour the next day
            return (
              (hourDate === todayDate && hourTime >= currentHour) ||
              (hourDate > todayDate && hourTime <= currentHour)
            );
          }
        );

        setHourlyData(next24HoursData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [cityName]);

  return <HourlyForecastUI hourlyData={hourlyData} />;
};

export default HourlyForecastFetcher;
