import React from "react";
import CityList from "./CityList";
import Weather from "./Weather";

const Container = () => {
  return (
    <div className="container">
      <CityList />
      <Weather />
    </div>
  );
};

export default Container;
