import axios from 'axios';
import React from 'react';

const graphqlEndpoint = 'https://countries.trevorblades.com/';

const graphqlService = axios.create({
  baseURL: graphqlEndpoint,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getAllCountries = async () => {
  const query = `
    query {
      countries { 
        name
        capital        
        languages {
          name
        }
        currency
        states {
          name
        }
      }
    }
  `;

  try {
    const response = await graphqlService.post('', { query });
    return response.data.data.countries;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
};
export default getAllCountries;
