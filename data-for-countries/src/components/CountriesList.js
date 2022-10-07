import React from "react";
import CountryInfo from "./CountryInfo";

const CountriesList = ({ countries }) => {

  if (countries.length > 10) {
    return <p>Too many countries, narrow your query</p>;
  }
  if (countries.length === 1) {
    return <CountryInfo country={countries[0]} />;
  }
  return (
    <>
      {countries.map((c) => (
        <li key={c.name.common}>{c.name.common}</li>
      ))}
    </>
  );
};

export default CountriesList;
