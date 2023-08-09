import { stockListReducer } from './../model/stockHistory/stockHistory.slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    stockData: stockListReducer,
  },
});
