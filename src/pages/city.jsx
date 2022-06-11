import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const City = () => {
  const { cityCode } = useParams();
  const [weather, setWeather] = useState();

  let city = cityCode.split(",")[0];
  const clientSecret = "4AR0djJQEyvJR4Fm6EJQdAs0cl4KGcICayuilSyM";
  const clientId = "lzGCpIE4IHQBOHwDYSRvB";

  const getWeather = async (location) => {
    let response = await fetch(
      `https://api.aerisapi.com/conditions/summary/${location}?format=json&client_id=${clientId}&client_secret=${clientSecret}`
    );

    let weather = await response.json();
    console.log(weather);
    setWeather(weather);
  };

  useEffect(() => {
    getWeather(cityCode);
  }, [cityCode]);

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "75vh" }}
      >
        {weather && (
          <div className="card col-6">
            <div className="card-body">
              <a
                target="_blank"
                href={`https://www.google.com/maps?q=loc:${weather.response[0].loc.lat},${weather.response[0].loc.long}`}
              >
                {" "}
                Google map
              </a>
              <h5 className="card-title text-success font-weight-bold">
                {city.toUpperCase()}
              </h5>
              <p className="card-text">
                The lowest temperature:{" "}
                <span className="text-dark">
                  {weather.response[0].periods[0].temp.minC} C°
                </span>
              </p>
              <p className="card-text">
                The highets temperature:{" "}
                <span className="text-danger">
                  {parseInt(weather.response[0].periods[0].temp.maxC
                  )}{" "}
                  C°
                </span>
              </p>
              <h6 className="card-text">
                Average temperature:{" "}
                <span className="text-dark">
                  {parseInt(weather.response[0].periods[0].temp.avgC
                  )}{" "}
                  C°
                </span>
              </h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default City;
