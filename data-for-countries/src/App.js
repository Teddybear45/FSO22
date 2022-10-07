import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import CountriesList from "./components/CountriesList";

import { useEffect, useState } from "react";

function App() {
  const [findCountry, setFindCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const getCountries = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  };

  useEffect(getCountries, []);

  const handleFindCountryChange = (event) => {
    event.preventDefault();

    setFindCountry(event.target.value);

    setFilteredCountries(
      countries.filter((c) =>
        c.name.common.toLowerCase().includes(findCountry.toLowerCase())
      )
    );
    // if (findCountry === "") {
    //   setFilteredCountries(countries);
    // }

    console.log(filteredCountries);
  };

  return (
    <>
      <p>
        find countries:{" "}
        <input onChange={handleFindCountryChange} value={findCountry} />
      </p>
      <CountriesList countries={filteredCountries} />
    </>
  );
}

export default App;
