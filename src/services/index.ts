import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://my-api-manstock.onrender.com',
});

export * from './products';
export * from './auth';