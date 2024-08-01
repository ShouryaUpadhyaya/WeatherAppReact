import React from "react";
import { useState } from "react";
function SearchBar({ cityName, setCityName }) {
  function capitaliseFirstLetter(name) {
    return name.slice(0, 1).toUpperCase() + name.toLowerCase().slice(1);
  }
  return (
    <>
      <div className="flex flex-row bg-slate-100 w-5/6 mt-10 font-bold text-3xl text-gray-700 rounded-lg p-3 justify-evenly items-center">
        <h1>City:</h1>
        <input
          type="text"
          className="rounded-xl w-3/4 pl-5 p-2"
          value={cityName}
          onChange={(e) => {
            let name = capitaliseFirstLetter(e.target.value);
            setCityName(name);
          }}
        />
      </div>
    </>
  );
}

export default SearchBar;
