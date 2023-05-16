import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setKeyword } from '../features/filters/filterValueSlice';
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector';

interface FilterModalProps {
  handleFilterClick: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ handleFilterClick }) => {
  const keyword = useAppSelector((state) => state.filterValue.keyword);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleInputClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    event.stopPropagation();
  };

  const handleInputSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 엔터 키를 눌렀을 때만 이벤트를 처리합니다.
    if (e.key === 'Enter') {
      // 이동할 경로를 설정하고, 검색어를 쿼리 파라미터로 전달합니다.
      navigate(`/search/?keyword=${encodeURIComponent(keyword || '')}`);
    }
  };

  // useEffect(() => {
  //   console.log(keyword);
  // }, [keyword]);

  return (
    <div
      className="fixed top-[124px] left-0 right-0 bottom-0 z-999 bg-black cursor-default"
      style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
      onClick={handleFilterClick}
    >
      <div className="fixed top-[90px] left-0 right-0 z-999 h-[20px] p-2 opacity-100 bg-white" style={{ opacity: 1 }}>
        <input
          className=" absolute top-0 left-0 bg-white w-full h-full opacity-100 p-10 focus:outline-none"
          placeholder="무엇을 찾아드릴까요?"
          style={{ opacity: 1 }}
          onClick={handleInputClick}
          value={keyword || ''}
          onChange={(e) => dispatch(setKeyword(e.target.value))}
          onKeyPress={handleInputSubmit}
        ></input>
        <div
          className="absolute top-1/2 right-0 mr-10 transform --translate-y-1/2 cursor-pointer"
          onClick={handleFilterClick}
        >
          <AiOutlineClose size={20} />
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
