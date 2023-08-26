import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5555',
});

export * from './products';
export * from './auth';
export * from './payment-types';
export * from './purchase';