import React, { useEffect, useState } from "react";
import "./style.scss";
import Sun from "../../img/weatherTransparent.png";
import axios from "axios";

function Welcome() {
  const [weather, setweather] = useState(0);
  const [weatherType, setweatherType] = useState("");
  const [weatherImg, setweatherImg] = useState("");
  useEffect(() => {
    axios(
      "https://api.weatherapi.com/v1/current.json?key=c6f347ddedc94f69a8a210804231612&q=Baku&aqi=no"
    ).then((res) => {
      setweather(res.data.current.temp_c);
      setweatherType(res.data.current.condition.text);
      setweatherImg(res.data.current.condition.icon);
      console.log(res.data);
    });
  }, []);

  const welcomeDate = new Date();
  const Months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  const Days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };
  function welcDateGet(date) {
    const day = date.getDate();
    const dayName = Days[date.getDay()];
    const month = Months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName}, ${month} ${day}`;
  }
  const welcDate = new Date();
  const dataDate = welcDateGet(welcDate);
  return (
    <div className="welcome container">
      <div className="left">
        <h1>Your briefing</h1>

        <div className="date">{dataDate}</div>
      </div>
      <div className="right">
        <a
          href="https://www.accuweather.com/"
          className="weather"
          style={{ color: "white", cursor: "pointer" }}
        >
          <img src={weatherImg} alt="" />
          <p>
            {weatherType} {weather}°C
          </p>
        </a>
      </div>
    </div>
  );
}

export default Welcome;
