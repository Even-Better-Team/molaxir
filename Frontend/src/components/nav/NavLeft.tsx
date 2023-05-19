import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import ShopModal from './modals/ShopModal';

const NavLeft: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleMouseOver = () => {
    setShowModal(true);
  };

  const handleMouseLeave = () => {
    setShowModal(false);
  };

  const LEFT_CATEGORIES = [
    {
      name: 'Shop',
      onMouseOver: handleMouseOver,
      onMouseLeave: handleMouseLeave,
      modalComponent: showModal ? (
        <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} className="relative z-10">
          <ShopModal />
        </div>
      ) : null,
      path: '/shop',
    },
    { name: 'Routine', path: '/routine' },
    { name: 'About', path: '/about' },
  ];

  return (
    <ul>
      {LEFT_CATEGORIES.map((category) => (
        <Link
          to={category.path}
          key={category.name}
          onMouseEnter={category.onMouseOver}
          onMouseLeave={category.onMouseLeave}
          className="hidden md:mr-8 md:text-sm md:inline-block md:hover:text-gray-400"
        >
          {category.name}
          {category.modalComponent}
        </Link>
      ))}
    </ul>
  );
};

export default NavLeft;
