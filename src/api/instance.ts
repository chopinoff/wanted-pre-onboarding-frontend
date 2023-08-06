import axios from 'axios';

const BASE_API_URL = process.env.REACT_APP_API_BASE_URL;

function defaultInstance() {
  const instance = axios.create({
    baseURL: BASE_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return instance;
}

export default defaultInstance();
