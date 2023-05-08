import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Shop: FC = () => {
  return (
    <div className="mx-20">
      <div className="mt-20 flex justify-center text-2xl font-medium">Shop</div>
      <div className=" flex justify-center">
        <div className="mt-10 flex justify-evenly w-80 text-gray-400 ">
          <Link to="/all-products">
            <span className="text-gray-400  transition-colors duration-800 hover:text-black cursor-pointer ">
              모든 제품
            </span>
          </Link>
          <Link to="/skincare">
            <span className="text-gray-400  transition-colors duration-800 hover:text-black cursor-pointer">
              스킨케어
            </span>
          </Link>
          <Link to="/bodycare">
            <span className="text-gray-400  transition-colors duration-800 hover:text-black cursor-pointer">
              바디케어
            </span>
          </Link>
        </div>
      </div>
      <div className="mt-20">
        <div className="text-xl">Best Items</div>
      </div>
    </div>
  );
};

export default Shop;
