import React from 'react';
import { Link } from 'react-router-dom';

const ShopModal = () => {
  return (
    <Link to="/all-products" className="absolute top-0 left-0 p-3 border border-sky-500 hover: text-black">
      <div className="hover:bg-red-300 ">ShopModal</div>
    </Link>
  );
};

export default ShopModal;
