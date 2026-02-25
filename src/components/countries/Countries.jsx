import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log("visited", country);
    // [...visitedCountries, country]

    setVisitedCountries([...visitedCountries, country]);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  console.log(visitedCountries);

  return (
    <div>
      <h1>Rest Countries {countries.length}</h1>
      <h2>Total Countries Visited: {visitedCountries.length}</h2>
      <div className="">
        <h3>List of visited countries</h3>
        <ol>
          {visitedCountries.map((country) => {
            return <li key={country.cca3.cca3}>{country.name.common}</li>;
          })}
        </ol>
      </div>
      <div className="countries">
        {countries.map((country) => {
          return (
            <Country
              key={country.cca3.cca3}
              country={country}
              handleVisitedCountries={handleVisitedCountries}
            ></Country>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
