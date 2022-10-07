import React from "react";

const CountryInfo = ({ country }) => {
  return (
    <>
      <h1>{country.name.common}</h1>

      <p>capital: {country.capital[0]}</p>
      <p>area: {country.area}</p>

      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((fullLang) => (
          <li key={fullLang}>{fullLang}</li>
        ))}
      </ul>
      <hr />
      <img src={country.flags.png} alt={`${country.name.common}'s flag`} />
    </>
  );
};

export default CountryInfo;
