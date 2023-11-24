import React, { useState, useEffect } from 'react';
import { getAllCountries } from '../components/Graphql';
import axios from 'axios';

const graphqlEndpoint = 'https://countries.trevorblades.com/';

const CountryDetails = ({ country }) => {
  return (
    <div>
    <h2>{country.name}</h2>
    <p>Capital: {country.capital}</p>
    {country.languages && (
      <p>Idiomas: {country.languages.map(lang => lang.name).join(', ')}</p>
    )}
    <p>Moneda: {country.currency}</p>
    {country.states && (
      <div>
        <p>Estados:</p>
        <ul>
          {country.states.map(state => (
            <li key={state.name}>{state.name}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
  );
};
export default CountryDetails
