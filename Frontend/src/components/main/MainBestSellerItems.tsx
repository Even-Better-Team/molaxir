import React, { FC } from 'react';
import StyledCard from '../../components/shared/StyledCard';
import Main from '../../models/mainModels';

interface MainApi {
  data: { bestSellers: Main[]; newArrivals: Main[] };
}

interface MainItemsProps {
  loading: boolean;
  error: null | string;
  data: null | MainApi;
}

const MainBestSellerItems: FC<MainItemsProps> = ({ data, loading, error }) => {
  const MemoizedStyledCard = React.memo(StyledCard);

  const bestSellerItems =
    data?.data.bestSellers.map((item) => <MemoizedStyledCard item={item} key={item.id} />) || null;

  return (
    <div className=" grid grid-cols-1 gap-10 sm:grid-cols-3 grid-row-2 p-10">
      {loading ? <div> loading...</div> : bestSellerItems}
      {error ? <div className=" text-xl ">server closed...</div> : null}
    </div>
  );
};

export default MainBestSellerItems;
