import React, { useState } from 'react';
import './SearchBar.css'; // Assuming you have some CSS for styling

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
            onSearch(city);
        };
    return (
        <form className = "search-bar" onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter city name' value={city} onChange={(e) => setCity(e.target.value)} />
            <button type='submit'>Get Weather</button>
        </form>
    );
};
export default SearchBar;