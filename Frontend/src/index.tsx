import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);

// Provider 라는 redux 제공 프로퍼티를 통하여 전역에서 사용할수있게 최상단에 위치한다 (line 10)
