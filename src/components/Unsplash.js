import axios from 'axios';

const unsplashService = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Authorization': 'Client-ID ZUdeDy8OCgBNsI5as8YhQeAps-xif1NFCIaVwg_T9fI', 
  },
});

export default unsplashService;
