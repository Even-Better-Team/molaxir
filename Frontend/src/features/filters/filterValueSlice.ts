import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
  keyword: string | null;
  pageNo: number;
  sort: string | null;
}

const initialState: SearchState = {
  keyword: '',
  pageNo: 1,
  sort: null,
};
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
});

export const { setKeyword, setPageNo, setSort } = filterValueSlice.actions;

export default filterValueSlice.reducer;
