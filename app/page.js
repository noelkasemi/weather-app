//home.js
"use client";
import React, { useState } from "react";
import WeatherCard from "./ui/weatherCard";
import CurrentWeatherFetcher from "./api/currentWeather";
import SearchAutocomplete from "./api/searchAutocomplete";
import SearchResultCard from "./ui/searchResultsCard";
import HourlyForecastFetcher from "./api/hourlyForecast";
import DailyForecastFetcher from "./api/dailyForecastFetcher";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("paris");
  const [tempCity, setTempCity] = useState("paris");
  const [show, setShow] = useState(false);
  const [results, setResults] = useState("");

  const handleCityChange = (e) => {
    setTempCity(e.target.value);
  };

  return (
    <>
      <header className="py-4 relative flex flex-col items-center">
        <input
          onFocus={() => setShow(true)}
          onBlur={() => setTimeout(() => setShow(false), 100)}
          type="text"
          placeholder="City Name"
          className="w-1/3 rounded p-2 border border-black"
          onChange={handleCityChange}
        />
        <SearchAutocomplete setResults={setResults} cityName={tempCity} />
        <SearchResultCard
          setCityName={setCityName}
          results={results}
          show={show}
          setWeatherData={setWeatherData}
        />
      </header>
      <main className="flex justify-center space-x-32 items-center min-h-screen bg-gray-100">
        <CurrentWeatherFetcher
          cityName={cityName}
          setWeatherData={setWeatherData}
        />

        <section className="flex flex-col space-y-12">
          {weatherData && <WeatherCard data={weatherData} />}

          <section>
            <HourlyForecastFetcher cityName={cityName} />
          </section>
        </section>
        <DailyForecastFetcher cityName={cityName} />
       
      </main>
    </>
  );
};

export default Home;
