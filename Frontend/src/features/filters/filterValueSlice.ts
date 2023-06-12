import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import Filter from '../../models/filterModels';

interface SearchState {
  keyword: string | null;
  pageNo: number;
  sort: string | null;
  loading: boolean;
  error: null | string;
  data: null | FilterApi;
}

interface FilterApi {
  products: Filter[];
}

interface GetFiltersPayload {
  keyword: string | null;
  pageNo: number | null;
  sort: string | null;
}

const initialState: SearchState = {
  keyword: '',
  pageNo: 1,
  sort: null,
  loading: false,
  error: null,
  data: null,
};

export const getFilters = createAsyncThunk(
  'filterss/getFilters',
  async ({ keyword, pageNo, sort }: GetFiltersPayload, thunkApi) => {
    try {
      let url = `${process.env.REACT_APP_API_URL}/search/?keyword=${keyword}`;

      if (pageNo) {
        url += `&pageNo=${pageNo}`;
      }

      if (sort) {
        url += `&sort=${sort}`;
      }

      const response = await axios.get<FilterApi>(url);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
const filterValueSlice = createSlice({
  name: 'filterValue',
  initialState,
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    setPageNo: (state, action) => {
      state.pageNo = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getFilters.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getFilters.fulfilled, (state, action: PayloadAction<FilterApi>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getFilters.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setKeyword, setPageNo, setSort } = filterValueSlice.actions;

export default filterValueSlice.reducer;
