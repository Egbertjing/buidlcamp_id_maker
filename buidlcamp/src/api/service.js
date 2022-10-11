import axios from 'axios';

const service = axios.create({
  // baseURL: 'https://127.0.0.1:6010',
  baseURL: 'https://furion.io:3609',
  timeout: 6000000,
});

export default service;