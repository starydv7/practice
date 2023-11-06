import React, { useState, useEffect } from 'react';
import countriesData from './Countries.json';
import "./country.css";
function Dropdown() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (selectedCountry) {
      const country = countriesData.find((country) => country.code === selectedCountry);
      setCities(country ? country.cities : []);
    } else {
      setCities([]);
    }
  }, [selectedCountry]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedCity('');
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <label>Country:</label>
      <select onChange={handleCountryChange} value={selectedCountry}>
        <option value="">Select Country</option>
        {countriesData.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <div>
          <label>City:</label>
          <select onChange={handleCityChange} value={selectedCity}>
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedCountry && selectedCity && (
        <div className="selected-info">
          <div className="card">
            <h3>Selected Country</h3>
            <p>{selectedCountry}</p>
          </div>
          <div className="card">
            <h3>Selected City</h3>
            <p>{selectedCity}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
