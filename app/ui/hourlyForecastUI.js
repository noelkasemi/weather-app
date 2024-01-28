// HourlyForecast.js
import React from 'react';

const HourlyForecastUI = ({ hourlyData }) => {
  return (
    <section className=" border border-black rounded-xl py-4 px-2">
      <h1 className='text-gray-500 font-semibold py-4 pl-4'>{`Today's forecast`}</h1>
      <section className='flex flex-wrap justify-center divide-x-2'>
              {hourlyData.map((hour) => (
        <article key={hour.time_epoch} className="p-4 text-center ">
           <p className="text-gray-600 font-semibold">{hour.time.split(' ')[1].split(':')[0]}:00</p>
          <img src={`https:${hour.condition.icon}`} alt={hour.condition.text} className="mx-auto" />
          <p className="text-lg font-semibold">{hour.temp_c}°C</p>
          <p className="text-gray-500">{hour.condition.text}</p>
          <p className="text-gray-500">Wind: {hour.wind_kph} km/h</p>
        </article>
      ))}
      </section>

    </section>
  );
};

export default HourlyForecastUI;
