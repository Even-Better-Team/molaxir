import React, { FC, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ShopModal from './ShopModal';
import { SlMagnifier } from 'react-icons/sl';
import { BsHeart } from 'react-icons/bs';
import { GrShop } from 'react-icons/gr';
import FilterModal from './FilterModal';
import { openFilter, closeFilter } from '../features/filters/filterSlice';
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector';

const Nav: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.filter.isOpen);
  const location = useLocation();

  const handleMouseOver = () => {
    setShowModal(true);
  };
  const handleMouseLeave = () => {
    setShowModal(false);
  };
  const handleFilterClick = () => {
    if (!isOpen) {
      dispatch(openFilter());
    } else {
      dispatch(closeFilter());
    }
  };

  useEffect(() => {
    dispatch(closeFilter());
  }, [location]);

  console.log(isOpen);
  const LEFT_CATEGORIES = [
    {
      name: 'Shop',
      onMouseOver: handleMouseOver,
      onMouseLeave: handleMouseLeave,
      modalComponent: showModal ? (
        <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} className=" relative z-1001">
          <ShopModal />
        </div>
      ) : null,
      path: '/shop',
    },
    { name: 'Routine', path: '/routine' },
    { name: 'About', path: '/about' },
  ];

  const RIGHT_CATEGORIES = [
    { name: 'Login /', path: '/login' },
    { name: 'Join', path: '/join' },
    {
      onClick: handleFilterClick,
      component: <SlMagnifier />,
      isModal: true,
      path: '#',
      modalComponent: isOpen ? (
        <div onClick={handleFilterClick} className=" relative z-10">
          <FilterModal handleFilterClick={handleFilterClick} />
        </div>
      ) : null,
    },
    { name: <BsHeart />, path: '/wish-list' },
    { name: <GrShop />, path: '/order-list' },
  ];

  return (
    <div className="flex justify-between items-center h-[124px] bg-white border-b border-grey-100 z-10 fixed top-0 left-0 right-0 md:p-10">
      <div>
        {LEFT_CATEGORIES.map((category) => (
          <Link
            to={category.path}
            key={category.name}
            onMouseEnter={category.onMouseOver}
            onMouseLeave={category.onMouseLeave}
            className="mr-3 text-sm relative inline-block hover:text-gray-400"
          >
            {category.name}
            {category.modalComponent}
          </Link>
        ))}
      </div>
      <a className=" text-6xl font-normal font-serif" href="/">
        molaxir
      </a>
      <div className="flex items-center text-sm ">
        {RIGHT_CATEGORIES.map((category, index) =>
          category.isModal ? (
            <button key={index} className="mr-3 relative" onClick={category.onClick}>
              {category.component}
              {category.modalComponent}
            </button>
          ) : (
            <Link to={category.path} key={index} className="mr-3 relative hover:text-gray-400">
              {category.name}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Nav;
