import { useState } from "react";
function Weather({ date = "11", month = "jully", city = "delhi" }) {
  let key = "a583fd036e794a6192e121741243107 ";
  let url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;
  let promiseGetCurrentWeather = fetch(url);
  const [tempratureCelsius, setTempratureCelsius] = useState("12");
  const [windSpeed, setWindSpeed] = useState("Not available");
  promiseGetCurrentWeather
    .then((response) => response.json())
    .then((jsonResponse) => {
      setTempratureCelsius(jsonResponse.current.temp_c.toString());
      setWindSpeed(jsonResponse.current.wind_kph);
    })
    .catch((error) => {
      console.log(error);
      setTempratureCelsius("");
      setWindSpeed("");
    });

  // console.log(navigator.geolocation.getCurrentPosition);
  return (
    <>
      <div className="flex flex-col min-h-96 bg-slate-100 w-5/6 mt-10 font-bold text-3xl text-gray-700 rounded-lg p-3 justify-evenly items-center">
        <div className="">
          <h2 className="text-5xl">{city}</h2>
        </div>
        <div className="flex justify-evenly w-11/12">
          <h2>temp: {tempratureCelsius}</h2>
          <h2>wind speed: {windSpeed}</h2>
        </div>
      </div>
    </>
  );
}

export default Weather;
