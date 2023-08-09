import axios from 'axios';

const token = process.env.REACT_APP_TOKEN;

export const entryPoint = axios.create({
  baseURL: `https://cloud.iexapis.com/stable/stock/aapl/chart/20230101?token=${token}`,
  headers: {
    'Content-Type': 'application/json',
  },
});
