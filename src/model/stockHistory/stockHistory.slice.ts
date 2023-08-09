import { stock } from './stockHistory.actionCreate';
import { createSlice } from '@reduxjs/toolkit';
import { StockSlice } from './stockHistory.interface';

const initialState: StockSlice = {
  stock: [],
  loading: false,
  error: undefined,
};

export const stockList = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    changeListStock: (state, action) => {
      let tempData = Array.from(state.stock);
      let [source_data] = tempData.splice(action.payload.source.index, 1);
      tempData.splice(action.payload.destination.index, 0, source_data);
      state.stock = tempData;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(stock.pending, (state) => {
      state.stock = [];
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(stock.fulfilled, (state, { payload }) => {
      state.stock = payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(stock.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
  },
});

export const { changeListStock } = stockList.actions;
export const stockListReducer = stockList.reducer;
