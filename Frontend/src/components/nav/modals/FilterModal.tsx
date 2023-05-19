import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setKeyword } from '../../../features/filters/filterValueSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';

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
    if (e.key === ' ') {
      e.preventDefault();
    }
    if (e.key === 'Enter') {
      navigate(`/search/?keyword=${encodeURIComponent(keyword || '')}`);
    }
  };

  return (
    <div
      className="fixed top-[124px] left-0 right-0 bottom-0 bg-black cursor-default"
      style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
    >
      <div className="fixed top-[90px] left-0 right-0 h-[20px] p-2 opacity-100 bg-white" style={{ opacity: 1 }}>
        <input
          className=" absolute top-0 left-0  w-full h-full opacity-100 p-10 bg-white focus:outline-none"
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
