import { useState } from "react";
function Weather({ date = "11", month = "jully", city = "delhi" }) {
  let key = "a583fd036e794a6192e121741243107 ";
  let url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;
  let promiseGetCurrentWeather = fetch(url);
  const [tempratureCelsius, setTempratureCelsius] = useState("12");
  promiseGetCurrentWeather
    .then((response) => response.json())
    .then((jsonResponse) => {
      setTempratureCelsius(jsonResponse.current.temp_c.toString());
      console.log(jsonResponse);
    })
    .catch((error) => {
      console.log(error);
    });

  // console.log(navigator.geolocation.getCurrentPosition);
  return (
    <>
      <div className="flex flex-col min-h-96 bg-slate-100 w-5/6 mt-10 font-bold text-2xl text-gray-700 rounded-lg p-3 justify-center items-center">
        <h1 className=" ">
          Weather {date} {month} :
        </h1>
        <h2 className="">{city}</h2>
        <h2>{tempratureCelsius}</h2>
      </div>
    </>
  );
}

export default Weather;
