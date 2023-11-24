import React, { useState, useEffect } from "react";
import axios from "axios";
import unsplashService from "../components/Unsplash";
import CountryCard from "../components/CountryCard";
import CountryFilter from "../components/CountryFilter";
import "../assets/styles.css";
import { Card, CardHeader } from "reactstrap";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleFilterChange = (filter) => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  useEffect(() => {
    axios
      .post("https://countries.trevorblades.com/", {
        query: "{ countries { name continent { name } } }",
      })
      .then((response) => {
        const countriesData = response.data.data.countries;
        setCountries(countriesData);
        setFilteredCountries(countriesData);
      })
      .catch((error) => console.error("Error fetching countries:", error));

    unsplashService
      .get("/search/photos?query=nature&per_page=1&orientation=landscape")

      .then((response) => {
        const rateLimitLimit = response.headers["x-ratelimit-limit"];
        const rateLimitRemaining = response.headers["x-ratelimit-remaining"];
        console.log(`Límite de tasa total: ${rateLimitLimit}`);
        console.log(`Solicitudes restantes: ${rateLimitRemaining}`);
        const imageUrl = response.data.results[0].urls.regular;
      })
      .catch((error) => console.error("Error fetching Unsplash image:", error));
  }, []);

  return (
    <>
      <div className="home-container ">
        <div className="contet-filter">
        <CountryFilter onFilterChange={handleFilterChange} />
        </div>
        <div className="card-grid">
          {filteredCountries.slice(0, 50).map((country) => (
            <CountryCard key={country.name} country={country} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
