// 아래 함수는 redux 툴킷의 ''동기적'' 처리의 예시

// 자세한 내용은 posts/postSlice.ts 파일에 주석 참고

import { createSlice } from '@reduxjs/toolkit';

// 간단하게 숫자를 올리고 내리는 함수

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      // state.count += 1;
      state.count = Math.min(state.count + 1, 5);
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
