import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://my-api-manstock.onrender.com',
});

export * from './products';
export * from './auth';
export * from './payment-types';
export * from './purchase';