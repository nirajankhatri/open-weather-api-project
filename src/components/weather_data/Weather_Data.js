import React from "react";
import "../../style/components/_weather_data.scss";

const Weather_Data = (props) => {
  return (
    <div className="weatherData">
      <table className="weatherData__table">
        <tr className="weatherData__table__row">
          <td className="weatherData__table__row__label">City Name</td>
          <td className="weatherData__table__row__info">{props.data.name}</td>
        </tr>
        <tr className="weatherData__table__row">
          <td className="weatherData__table__row__label">Temperature</td>
          <td className="weatherData__table__row__info">{props.data.main.temp}°C</td>
        </tr>
        <tr className="weatherData__table__row">
          <td className="weatherData__table__row__label">Humidity</td>
          <td className="weatherData__table__row__info">{props.data.main.humidity}%</td>
        </tr>
        <tr className="weatherData__table__row">
          <td className="weatherData__table__row__label">Weather</td>
          <td className="weatherData__table__row__info">{props.data.weather[0].description}</td>
        </tr>
      </table>
    </div>
  );
};

export default Weather_Data;
