import React from 'react';
import FilterModal from './modals/FilterModal';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { openFilter, closeFilter } from '../../features/filters/filterSlice';
import { SlMagnifier } from 'react-icons/sl';
import { BsHeart } from 'react-icons/bs';
import { GrShop } from 'react-icons/gr';

const NavRight = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.filter.isOpen);

  const handleFilterClick = () => {
    if (!isOpen) {
      dispatch(openFilter());
    } else {
      dispatch(closeFilter());
    }
  };

  const RIGHT_CATEGORIES = [
    { name: 'Login /', path: '/login' },
    { name: 'Join', path: '/join' },
    {
      onClick: handleFilterClick,
      component: <SlMagnifier />,
      isModal: true,
      path: '#',
      modalComponent: isOpen ? (
        <div onClick={handleFilterClick}>
          <FilterModal handleFilterClick={handleFilterClick} />
        </div>
      ) : null,
    },
    { name: <BsHeart />, path: '/wish-list' },
    { name: <GrShop />, path: '/order-list' },
  ];

  return (
    <ul className="hidden md:flex md:items-center md:text-sm ">
      {RIGHT_CATEGORIES.map((category, index) =>
        category.isModal ? (
          <button key={index} className="mr-5" onClick={category.onClick}>
            {category.component}
            {category.modalComponent}
          </button>
        ) : (
          <Link to={category.path} key={index} className="mr-5 hover:text-gray-400">
            {category.name}
          </Link>
        )
      )}
    </ul>
  );
};

export default NavRight;
