import axios from 'axios';

const API_ENDPOINT = 'https://api.escuelajs.co/api/v1';

export const api = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 5000,
  timeoutErrorMessage: 'Request timed out',
});
