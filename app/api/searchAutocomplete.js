// components/WeatherFetcher.js
import { useEffect } from 'react';

const SearchAutocomplete = ({ setResults, cityName }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/search.json?key=1179e4c0e0ab49a48f3171723231910&q=${cityName}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [setResults,cityName]);

  return null; // This component doesn't render anything directly
};

export default SearchAutocomplete;
