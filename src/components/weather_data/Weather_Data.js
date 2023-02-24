import React from "react";
import '../../style/components/_weather_data.scss'

const Weather_Data = (props) => {
  return (
    <div className="weatherData">
      <div className="weatherData__city-container">
        <h1 className="weatherData__city-container__label">City Name</h1>
        <p className="weatherData__weather-container__info">{props.data.name}</p>
      </div>
      <div className="weatherData__temp-container">
        <h1 className="weatherData__temp-container__label">Temperature</h1>
        <p className="weatherData__weather-container__info">{props.data.main.temp}°C</p>
      </div>
      <div className="weatherData__humid-container">
        <h1 className="weatherData__humid-container__label">Humidity</h1>
        <p className="weatherData__weather-container__info">{props.data.main.humidity}%</p>
      </div>
      <div className="weatherData__weather-container">
        <h1 className="weatherData__weather-container__label">Weather</h1>
        <p className="weatherData__weather-container__info">{props.data.weather[0].description}</p>
      </div>
    </div>
  );
};

export default Weather_Data;
