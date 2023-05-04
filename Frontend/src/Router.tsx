import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './pages/categories/about/About';
import Routine from './pages/categories/routine/Routine';
import AllProductsList from './pages/categories/shop/AllProductsList';
import BodyCareList from './pages/categories/shop/BodyCareList';
import Shop from './pages/categories/shop/Shop';
import SkinCareList from './pages/categories/shop/SkinCareList';
import Main from './pages/Main';
import Test from './pages/Test';

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
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

//######### test 링크에 tailwind css 와 redux 예제 수록 ################ (line 13)
