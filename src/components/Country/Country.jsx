import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  console.log(country.name.common);
  return (
    <div className="country">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>Continent: {country.continents.continents}</p>
    </div>
  );
};

export default Country;
