import React from "react";
import VeterImg from "./assets/veter.svg";
const App = () => {

  return (
    <>
      <header className="header">
        <div className="container input-center">
          <h1 className="logo-text">Прогноз погоды</h1>
          <input
            className="input"
            type="search"
            placeholder="Ведите название города"/>
          <button className="btn">
            Показать
          </button>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="weather-card">
            <h1 className="nameCity">
              <span className="kg">
                ru
              </span>
            </h1>
            <div className="flex-img">
              <h1 className="temp-city">
                ℃
              </h1>
            </div>
            <h1 className="weather">
            </h1>
            <h4 className="veterText">
              Ветер:
              <img src={VeterImg} alt="" />
              км/ч
            </h4>
            <h4 className="vlajnostText"> влажность:
              %</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
