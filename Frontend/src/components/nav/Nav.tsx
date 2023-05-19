import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { closeFilter } from '../../features/filters/filterSlice';
import { closeSideBar } from '../../features/sidebars/sideBarSlice';
import NavLeft from './NavLeft';
import NavLogo from './NavLogo';
import NavRight from './NavRight';
import NavSideBar from './NavSideBar';

const Nav: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(closeFilter());
    dispatch(closeSideBar());
  }, [location]);

  return (
    <nav className="p-1 md:p-10 flex justify-center md:justify-between items-center h-[50px] md:h-[124px] bg-white border-b border-grey-100 z-10 fixed top-0 left-0 right-0 ">
      <NavSideBar />
      <NavLeft />
      <NavLogo />
      <NavRight />
    </nav>
  );
};

export default Nav;
