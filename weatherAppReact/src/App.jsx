import "./App.css";
import Weather from "./components/Weather";
import OtherWeatherDetails from "./components/OtherWeatherDetails";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
function App() {
  const [cityName, setCityName] = useState("");
  return (
    <>
      <div className="m-0 p-0 w-full min-h-screen flex flex-col items-center bg-blue-900">
        <SearchBar cityName={cityName} setCityName={setCityName} />
        <Weather city={cityName} />
        <OtherWeatherDetails />
      </div>
    </>
  );
}

export default App;
