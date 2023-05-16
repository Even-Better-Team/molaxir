import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './pages/categories/about/About';
import Routine from './pages/categories/routine/Routine';
import AllProductsList from './pages/categories/shop/AllProductsList';
import BodyCareList from './pages/categories/shop/BodyCareList';
import Shop from './pages/categories/shop/Shop';
import SkinCareList from './pages/categories/shop/SkinCareList';
import Join from './pages/join/Join';
import Login from './pages/login/Login';
import Main from './pages/Main';
import MyPage from './pages/mypage/MyPage';
import OrderList from './pages/orderlist/OrderList';
import Search from './pages/search/Search';
import Test from './pages/Test';
import WishList from './pages/wishlist/WishList';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/all-products" element={<AllProductsList />} />
        <Route path="/skincare" element={<SkinCareList />} />
        <Route path="/bodycare" element={<BodyCareList />} />
        <Route path="/about" element={<About />} />
        <Route path="/routine" element={<Routine />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="/order-list" element={<OrderList />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

//######### test 링크에 tailwind css 와 redux 예제 수록 ################ (line 13)
