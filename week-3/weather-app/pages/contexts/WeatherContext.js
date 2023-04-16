import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import data from "../../Mocks/Cities.json";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const cities = data;
  const [city, setCity] = useState("Manisa");
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    let selectCities = cities.filter((item) => item.name === city)[0];

    const key = "367a3edfd717872adbc82fa788bdb08a";

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${selectCities.name}&exclude=daily&units=metric&appid=${key}`
      )
      .then((res) => res.data)
      .then((res) =>
        setWeatherData(
          res.list.filter((item) => item.dt_txt.includes("12:00:00"))
        )
      );
  }, [city, cities]);

  const values = {
    cities,
    city,
    setCity,
    weatherData,
    setWeatherData,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};
export const useWeatherContext = () => useContext(WeatherContext);
