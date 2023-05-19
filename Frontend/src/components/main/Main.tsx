import React, { FC, useEffect } from 'react';
import { getMains } from '../../features/main/bestSellerSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import MainImageContainer from './MainImageContainer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainBestSellerItems from './MainBestSellerItems';
import MainNewArrivalsItems from './MainNewArrivalsItems';
// import '../components/sliders/slider.css';

const Main: FC = () => {
  const dispatch = useAppDispatch();
  const { data, error, loading } = useAppSelector((state) => state.mains);

  useEffect(() => {
    dispatch(getMains());
  }, [dispatch]);

  console.log(data?.data);

  return (
    <div className="md:navMargin">
      <MainImageContainer />
      <div className="semiTitle">Bestsellers</div>
      <MainBestSellerItems data={data} loading={loading} error={error} />
      <div className="semiTitle">New Arrivals</div>
      <MainNewArrivalsItems data={data} loading={loading} error={error} />
    </div>
  );
};

export default Main;
