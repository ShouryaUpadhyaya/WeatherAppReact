import "./App.css";
import DateNav from "./components/DateNav";
import Weather from "./components/Weather";
import OtherWeatherDetails from "./components/OtherWeatherDetails";
function App() {
  return (
    <>
      <div className="m-0 p-0 w-full min-h-screen flex flex-col items-center bg-blue-900">
        <DateNav />
        <Weather />
        <OtherWeatherDetails />
      </div>
    </>
  );
}

export default App;
