import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/searchBar.jsx";
import WeatherCard from "./components/weatherCard.jsx";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async (city) => {
    if (!city) {
      setError("City can't be empty.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE}/weather?city=${city}`
      );
      setWeather(response.data);
    } catch (err) {
      setError("Couldn't retrieve weather data.");
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <SearchBar onSearch={getWeather} />
      {loading && <p>Loading weather...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && <WeatherCard {...weather} />}
    </div>
  );
}

export default App;
