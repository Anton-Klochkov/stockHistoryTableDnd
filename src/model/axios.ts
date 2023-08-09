import axios from 'axios';

const token = process.env.REACT_APP_TOKEN;

export const entryPoint = axios.create({
  baseURL: `https://cloud.iexapis.com`,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    token: token,
  },
});
