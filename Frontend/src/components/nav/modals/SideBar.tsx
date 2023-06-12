import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillRightCircle, AiOutlineDown } from 'react-icons/ai';

interface SideBarProps {
  handleSideBarClick: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ handleSideBarClick }) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const dropdownIconRef = useRef<HTMLSpanElement>(null);
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const handleDropDown = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();
    setIsDropDown(!isDropDown);
  };

  useEffect(() => {
    const dropdownIconElem = dropdownIconRef.current;

    if (dropdownIconElem) {
      // check if dropdownIconElem is not null
      const nativeDropdownClickHandler = (e: MouseEvent) => {
        e.stopPropagation();
        // e.preventDefault();
      };

      dropdownIconElem.addEventListener('click', nativeDropdownClickHandler);

      return () => {
        dropdownIconElem.removeEventListener('click', nativeDropdownClickHandler);
      };
    }
  }, []);

  const SIDE_BAR_CATEGORIES = [
    {
      name: 'Shop',
      path: '/shop',
      icon: (
        <span ref={dropdownIconRef}>
          <AiOutlineDown onClick={handleDropDown} />
        </span>
      ),
      modalComponent: isDropDown ? <div>drop</div> : null,
    },
    { name: 'Routine', path: '/routine' },
    { name: 'About', path: 'about' },
  ];

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

        {SIDE_BAR_CATEGORIES.map((category) =>
          category.icon ? (
            <Link
              key={category.name}
              to={category.path}
              className="flex justify-between items-center p-4 border border-gray-100"
            >
              {category.name}
              {category.icon}
              {category.modalComponent}
            </Link>
          ) : (
            <Link key={category.name} to={category.path} className="p-4 border border-gray-100">
              {category.name}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default SideBar;
