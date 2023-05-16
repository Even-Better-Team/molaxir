import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../hooks/useTypedSelector';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { setSort, setPageNo } from '../../features/filters/filterValueSlice';

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { keyword, pageNo, sort } = useAppSelector((state) => state.filterValue);
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('pageNo');
  const currentSort = searchParams.get('sort');

  const handlePageChange = (pageNo: number) => {
    dispatch(setPageNo(pageNo));
    let queryParams = '';
    const sort = currentSort;

    if (keyword) {
      queryParams += `keyword=${keyword}&`;
    }
    if (pageNo) {
      queryParams += `pageNo=${pageNo}&`;
    }
    if (sort) {
      queryParams += `sort=${sort}`;
    }

    navigate(`/search/?${queryParams}`);
  };
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = event.target.value;
    dispatch(setSort(newSort));
    const pageNo = currentPage;
    let queryParams = '';

    if (keyword) {
      queryParams += `keyword=${keyword}&`;
    }
    if (pageNo) {
      queryParams += `pageNo=${pageNo}&`;
    }
    if (newSort) {
      queryParams += `sort=${newSort}`;
    }

    navigate(`/search/?${queryParams}`);
  };

  console.log('Search 컴포넌트 렌더링');
  useEffect(() => {
    console.log('유즈이펙트 발동');
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken');
        console.log('useEffect');
        console.log(response.data);
        // setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-[144px]">
      <p>screen</p>
      <select onChange={handleSortChange}>
        <option>기준선택</option>
        <option key="new" value="new">
          신상품
        </option>
        <option key="alphabet" value="alphabet">
          상품명
        </option>
        <option key="lowPrice" value="lowPrice">
          낮은가격
        </option>
        <option key="highPrice" value="highPrice">
          높은가격
        </option>
      </select>
      <div>
        <button onClick={() => handlePageChange(1)} className="border border-red-300 m-3 p-3" value="1">
          1
        </button>
        <button onClick={() => handlePageChange(2)} className="border border-red-300 m-3 p-3" value="2">
          2
        </button>
        <button onClick={() => handlePageChange(3)} className="border border-red-300 m-3 p-3" value="3">
          3
        </button>
      </div>
    </div>
  );
};

export default Search;
