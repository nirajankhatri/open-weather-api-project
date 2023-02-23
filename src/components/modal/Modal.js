import React, { useEffect, useState } from "react";
import "../../style/components/_modal.scss";
import axios from "axios";

const Modal = () => {
  const [city, setCity] = useState("kathmandu");
  const [weatherData, setWeatherData] = useState(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const cityName = document.getElementById("modal__from__input").value;
    setCity(cityName);
  };

  useEffect(() => {
    async function fetchData() {
      const apiKey = "1ed8adbf90879330a8509d4a9be3d222";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      await axios.get(url).then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data);
        setWeatherData(response.data);
      });
    }
    fetchData();
  }, [city]);

  return (
    <div className="modal">
      <form className="modal__form" onSubmit={formSubmitHandler}>
        <label htmlFor="modal__from__input" className="modal_form__input_label">
          City Name
        </label>
        <input
          type="text"
          className="modal__from__input"
          id="modal__from__input"
        />
        <input type="submit" className="modal__form__submit" value="Search" />
      </form>
      <div className="modal__result">
        <p>
          {weatherData.name ? weatherData.name : null}
        </p>
      </div>
    </div>
  );
};

export default Modal;
