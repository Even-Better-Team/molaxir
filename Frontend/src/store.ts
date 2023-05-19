import { configureStore } from '@reduxjs/toolkit';
import postSlice from './features/posts/postSlice';
import counterSlice from './features/counters/counterSlice';
import filterSlice from './features/filters/filterSlice';
import filterValueSlice from './features/filters/filterValueSlice';
import mainSlice from './features/main/bestSellerSlice';
import sideBarSlice from './features/sidebars/sideBarSlice';

// redux '스토어' 를 생성 한다.   * (하단 링크 공식문서를 참조) *

// 이후에 다른 Slice 추가시 reducer 밑에 추가
// ex) reducer: { posts: postSlice ,
//                items: itemSlice},

const store = configureStore({
  reducer: {
    posts: postSlice,
    counter: counterSlice,
    filter: filterSlice,
    filterValue: filterValueSlice,
    mains: mainSlice,
    sidebar: sideBarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

// 참고 공식문서 https://redux-toolkit.js.org/tutorials/quick-start
