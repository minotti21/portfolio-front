import axios from 'axios';

const baseURL = process.env.baseUrl;

const api = axios.create({
  baseURL,
});

export default api;