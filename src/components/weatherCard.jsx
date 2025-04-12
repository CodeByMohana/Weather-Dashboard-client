import React from 'react';
import './weatherCard.css';

const WeatherCard = ({ temperature, condition, icon, humidity, windSpeed }) => (
  <div className="weather-card">
    <img src={icon} alt="weather icon" />
    <h2>{temperature}°C</h2>
    <p>{condition}</p>
    <p>Humidity: {humidity}%</p>
    <p>Wind: {windSpeed} m/s</p>
  </div>
);

export default WeatherCard;