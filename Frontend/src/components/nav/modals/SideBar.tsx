import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillRightCircle } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';
import { openSideBar, closeSideBar } from '../../../features/sidebars/sideBarSlice';

interface SideBarProps {
  handleSideBarClick: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ handleSideBarClick }) => {
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black cursor-default flex"
      style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
      onClick={handleSideBarClick}
    >
      <div className="fixed h-full w-[280px] bg-white flex flex-col" onClick={handleContentClick}>
        <div className="border border-gray-100 p-8 pr-24">
          <div className="mb-2 text-xs text-gray-500">멜릭서 공식몰 회원가입하고 다양한 혜택을 누려보세요.</div>
          <Link className=" text-lg font-bold flex items-center cursor-pointer" to="/login">
            <p className="mr-1">로그인</p>
            <p>
              <AiFillRightCircle className="text-xl" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
