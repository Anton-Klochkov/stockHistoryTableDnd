import { createAsyncThunk } from '@reduxjs/toolkit';
import { entryPoint } from '../axios';
import { OptionsDefault } from '../model.interface';
import { getErrorMessage } from '../utils/utils';
import { ResponseStockApple } from './stockHistory.interface';

export const stock = createAsyncThunk<
  ResponseStockApple[],
  void,
  OptionsDefault
>('stock', async (_, thunkApi) => {
  try {
    const response = await entryPoint.get('');
    return response.data;
  } catch (error) {
    const message = getErrorMessage(error);

    return thunkApi.rejectWithValue(message);
  }
});
