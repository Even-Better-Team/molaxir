import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { openSideBar, closeSideBar } from '../../features/sidebars/sideBarSlice';
import SideBar from './modals/SideBar';
import { HiBars3 } from 'react-icons/hi2';

const NavSideBar = () => {
  const dispatch = useAppDispatch();
  const isSideBarOpen = useAppSelector((state) => state.sidebar.isOpen);

  const handleSideBarClick = () => {
    if (!isSideBarOpen) {
      dispatch(openSideBar());
    } else {
      dispatch(closeSideBar());
    }
  };

  return (
    <div className="absolute top-1 left-1 p-2 rounded-md mb-4 md:hidden">
      <button onClick={handleSideBarClick}>
        <HiBars3 className="text-2xl" />
      </button>
      {isSideBarOpen ? <SideBar handleSideBarClick={handleSideBarClick} /> : null}
    </div>
  );
};

export default NavSideBar;
