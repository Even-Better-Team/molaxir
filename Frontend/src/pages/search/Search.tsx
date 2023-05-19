import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../hooks/useTypedSelector';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { setSort, setPageNo, getFilters } from '../../features/filters/filterValueSlice';
import StyledCard from '../../components/shared/StyledCard';

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { keyword, pageNo, sort, data, error, loading } = useAppSelector((state) => state.filterValue);
  const [searchParams] = useSearchParams();
  const currentKeyword = searchParams.get('pageNo');
  const currentPage = searchParams.get('pageNo');
  const currentSort = searchParams.get('sort');
  const MemoizedStyledCard = React.memo(StyledCard);

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

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const keyword = searchParams.get('keyword') || '';
    const pageNo = parseInt(searchParams.get('pageNo') || '1');
    const sort = searchParams.get('sort') || '';
    dispatch(getFilters({ keyword: keyword, pageNo: pageNo, sort: sort }));
  }, [keyword, pageNo, sort, dispatch]);

  console.log(data);

  return (
    <div className="mt-[144px]">
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
      <div className="grid grid-cols-3 gap-10 p-5">
        {data?.products.map((item) => (
          <MemoizedStyledCard item={item} key={item.id} />
        ))}
        {error ? <div className=" text-xl text-red-600">SERVER TIME OUT</div> : null}
      </div>
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
