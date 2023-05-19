import React, { FC } from 'react';
import StyledCard from '../../components/shared/StyledCard';
import Main from '../../models/mainModels';
import NewArrivalsSlider from '../sliders/NewArrivalsSlider';

interface MainApi {
  data: { bestSellers: Main[]; newArrivals: Main[] };
}

interface MainItemsProps {
  loading: boolean;
  error: null | string;
  data: null | MainApi;
}

const MainNewArrivalsItems: FC<MainItemsProps> = ({ data, loading, error }) => {
  const MemoizedStyledCard = React.memo(StyledCard);

  const newArrivalsItems =
    data?.data.newArrivals.map((item) => <MemoizedStyledCard item={item} key={item.id} />) || null;

  return (
    <div className="p-10">
      {loading ? <div> loading...</div> : <NewArrivalsSlider items={newArrivalsItems} />}
      {error ? <div className=" text-xl">server closed...</div> : null}
    </div>
  );
};

export default MainNewArrivalsItems;
