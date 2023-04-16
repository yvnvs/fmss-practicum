import React from "react";

import { useWeatherContext } from "../contexts/WeatherContext";
import Image from "next/image";

const Weather = () => {
  const { city, weatherData } = useWeatherContext();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  console.log(typeof weatherData);

  return (
    <>
      <div className="  max-[768]: flex flex-row flex-wrap text-zinc-950 justify-center mt-16 bg-amber-500-500/30 rounded-2xl">
        {Array.isArray(weatherData) &&
          weatherData.map((item, idx) => {
            return (
              <div
                key={idx}
                className="py12 px-16 flex flex-1 flex-col items-center rounded-md m-2 border-4 border-zinc-950 font-normal "
              >
                <div>
                  <span>{days[new Date(item.dt * 1000).getDay()]}</span>{" "}
                  <br></br>
                  <span>{new Date(item.dt * 1000).getDate()}</span>
                  <span>{new Date(item.dt * 1000).getFullYear()}</span>
                  {console.log(item)}
                </div>
                <Image
                  className="w-full max-w-80"
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt="desc"
                  width={20}
                  height={20}
                />
                <div className="mr-2">
                  <span className="">
                    Max {Math.round(item.main.temp_max)} &deg;
                  </span>
                  <br></br>
                  <span className="">
                    Min {Math.round(item.main.temp_min)} &deg;
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Weather;
