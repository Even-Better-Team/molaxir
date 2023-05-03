// 아래 함수는 redux 툴킷의 ''비동기적'' 처리의 예시

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import Post from '../../models/postModels';

const JSON_PLACEHOLDER_API = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

// Action  ( 상태를 변경하기 위한 정보를 담은 객체 )

// axios를 사용하여 위의 JSON_PLACEHOLDER_API (line 5)의 데이터를 불러온다. (line 16)
// createAsyncThunk() 가 기존 redux의 ''미들웨어 (redux-thunk || redux-saga)'' 역할을 하여 contextAPI등과 달리 '''비동기적'''으로 처리되는 데이터도 ''프로젝트전역''에서 관리할수 있게한다. (line 14)
// 전혀 구조상 관계없는 pages/Test.tsx에서 아래 함수를 사용하였음.
// (line 18~19) 는 에러 처리 thunjApi는 내장 메소드 이며 rejectWithValue는 Promise가 실패하였을때 원인 반환
// https://redux-toolkit.js.org/api/createAsyncThunk 하단 payloadCreator에 관련내용 있음

export const getPosts = createAsyncThunk('posts/getPosts', async (data, thunkApi) => {
  try {
    const response = await axios.get<Post[]>(JSON_PLACEHOLDER_API);
    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// 나중에 ''상품 상세정보''를 저장하는 action을 만들고 싶으면 ''fetures폴더'' 하위에  itemSlice.ts 파일을 만들어서 진행할수있음

// ex) export const getItems = createAsyncThunk('items/getItemss', async (data, thunkApi) => {
//  try {
//    const response = await axios.get<Item[]>('http://123.0.0.1:8000/products');
// ....etc
// });

interface PostState {
  loading: boolean;
  error: null | string;
  data: null | Post[];
}

const initialState = {
  loading: false,
  error: null,
  data: null,
} as PostState;

// Slice ( redux에서 ''reducer'' 역할을 하며 액션과 현재상태를 인자로 받아 '''새로운 상태'''로 반환한다. )

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getPosts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// 추후에 상품 상세정보의 action을 추가하게되면 마찬가지로 createSlice를 새로 하여야함
// ex) const productSlice = createSlice({
//  name:'product',
//  productInitialState,
//   .....etc
// })

export default postSlice.reducer;
