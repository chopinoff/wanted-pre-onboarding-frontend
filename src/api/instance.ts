import axios from 'axios';

const BASE_API_URL = process.env.REACT_APP_API_BASE_URL;
const accessToken = window.localStorage.getItem('accessToken');

const instance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    'Content-Type': 'application/json',
  },
});

export default instance;
