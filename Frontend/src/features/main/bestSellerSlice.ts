import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import Main from '../../models/mainModels';

const MAINPAGE_API = 'shop/shop.json';

export const getMains = createAsyncThunk('mains/getMains', async (data, thunkApi) => {
  try {
    const response = await axios.get<MainApi>('http://13.124.184.100:3000/products');
    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

interface MainApi {
  data: { bestSellers: Main[]; newArrivals: Main[] };
}

interface MainState {
  loading: boolean;
  error: null | string;
  data: null | MainApi;
}

const initialState = {
  loading: false,
  error: null,
  data: null,
} as MainState;

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMains.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getMains.fulfilled, (state, action: PayloadAction<MainApi>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getMains.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default mainSlice.reducer;
