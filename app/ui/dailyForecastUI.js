// DailyForecastUI.js
import React from "react";

const DailyForecastUI = ({ dailyData }) => {
  const todayDate = new Date();
  return (
    <section className="border border-black rounded-xl px-4 py-4 ">
      <h1 className="text-gray-500 font-semibold py-4 pl-4">3-Day forecast</h1>
      <section className="flex flex-col flex-wrap justify-center divide-y-2 divide-gray-300">
        {dailyData.map((day) => (
          <article key={day.date_epoch} className="p-4 text-center">
            <p className="text-gray-600">
              {day.date === todayDate.toISOString().split("T")[0]
                ? "Today"
                : day.date}
            </p>
            <img
              src={`https:${day.day.condition.icon}`}
              alt={day.day.condition.text}
              className="mx-auto"
            />
            <p className="text-lg font-semibold">{day.day.maxtemp_c}°C</p>
            <p className="text-gray-500">{day.day.condition.text}</p>
            <p className="text-gray-500">Wind: {day.day.maxwind_kph} km/h</p>
          </article>
        ))}
      </section>
    </section>
  );
};

export default DailyForecastUI;
