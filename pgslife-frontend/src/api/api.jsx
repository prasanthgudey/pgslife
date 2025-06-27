// src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pgslife.onrender.com/api',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // or just token if your backend expects plain token
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
