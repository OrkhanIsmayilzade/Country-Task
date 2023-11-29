// Mainpage.js

import React, { useState, useEffect } from 'react';


const Mainpage = ({ darkMode, changeDarkMode }) => {
  const [countryData, setCountryData] = useState();
  

  useEffect(() => {

    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountryData(data);
      
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (


    <div className={`cardsContainer ${darkMode ? 'dark-mode' : ''}`}>


      {countryData && countryData.map(country => (
        <div key={country.cca2} className='cards'>

          <img
            src={country.flags.png}
            alt=""
            style={{ width: "100%" }}
          />
          <div className='cardContent'>
            <h2>{country.name.common}</h2>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>

          </div>

        </div>
      ))}
    </div>
  );
};

export default Mainpage;
