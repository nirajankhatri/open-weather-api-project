import React, { useEffect, useState } from "react";
import "../../style/components/_controls.scss";
import axios from "axios";
import Weather_Data from "../weather_data/Weather_Data";
import Error_Dialog from "../error_dialog/Error_Dialog";

const Controls = (props) => {
  const [city, setCity] = useState("kathmandu");
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [requestError, setRequestError] = useState({ isError: false });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const cityName = document.getElementById("from__input").value;
    setCity(cityName);
  };

  useEffect(() => {
    async function fetchData() {
      const apiKey = "1ed8adbf90879330a8509d4a9be3d222";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      await axios
        .get(url)
        .then((response) => {
          // handle success
          // console.log(response);
          // console.log(response.data);
          setWeatherData({ ready: true, ...response.data });
        })
        .catch((error) => {
          // console.log(error.response.data.message);
          setRequestError({
            isError: true,
            errorMessage: error.response.data.message,
          });
          setWeatherData({ ready: false });
        });
    }
    fetchData();
  }, [city]);

  return (
    <div className="controls">
      <form className="form" onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="Please enter city name..."
          className="from__input form__input--nameInput"
          id="from__input"
        />
        <input type="submit" value="Search" className="form__submit" />
      </form>
      {weatherData.ready ? (
        <Weather_Data data={weatherData} />
      ) : (
        <Error_Dialog errorMessage={requestError.errorMessage} />
      )}
    </div>
  );
};

export default Controls;
