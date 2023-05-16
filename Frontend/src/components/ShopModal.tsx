import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const SHOPMODAL_CATEGORIES = [
  {
    name: '모든 제품',
    path: '/all-products',
  },
  {
    name: '스킨케어',
    path: '/skincare',
  },
  {
    name: '바디케어',
    path: '/bodycare',
  },
];

const ShopModal: FC = () => {
  return (
    <div className="absolute top-0 left-0 p-3 border border-grey-200 text-black whitespace-nowrap bg-white w-36 animate-fade-in z-1001">
      {SHOPMODAL_CATEGORIES.map((category, index) => (
        <Link to={category.path} key={index} className="hover:bg-gray-100 block p-2 text-xs">
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default ShopModal;
