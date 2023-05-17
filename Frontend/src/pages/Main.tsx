import React, { FC, useEffect, useState } from 'react';
import { getMains } from '../features/main/bestSellerSlice';
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector';
import StyledCard from '../shared/StyledCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const initialState = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
};

const Main: FC = () => {
  const dispatch = useAppDispatch();
  const [settings, setSettings] = useState(initialState);
  const MemoizedStyledCard = React.memo(StyledCard);

  useEffect(() => {
    dispatch(getMains());
  }, [dispatch]);

  useEffect(() => {
    const changeSpeed = () => {
      setSettings((prevSettings) => ({
        ...prevSettings,
        slidesToScroll: 1,
      }));
    };
    const resetSpeed = () => {
      setSettings(initialState);
    };

    const action = () => {
      changeSpeed();
      setTimeout(resetSpeed, 6000);
    };

    const interval = setInterval(action, 12000); // 12초마다 작업을 반복 (6초 동안 속도 변경 후, 6초 동안 원래 설정으로 되돌림)

    // 첫 실행을 위한 초기 호출
    action();

    return () => clearInterval(interval);
  }, []);
  const { data, error, loading } = useAppSelector((state) => state.mains);

  const bestSellerItems =
    data?.data[0].bestSellers.map((item) => <MemoizedStyledCard item={item} key={item.id} />) || null;
  const newArrivalsItems = data?.data[0].newArrivals.map((item) => <StyledCard item={item} key={item.id} />) || null;

  console.log(data?.data[0].bestSellers);
  return (
    <div className="mt-[100px]">
      <img src="https://melixirskincare.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/5e9ec2a95253d8dc92bc2dc32c5110a4.jpg"></img>
      <div className="text-center mt-24 text-xl font-semibold">Bestsellers</div>
      <div className=" grid grid-cols-3 grid-row-2 p-10">
        {loading ? <div className="bg-red-500"> loading...</div> : bestSellerItems}
      </div>
      <div className="text-center mt-24 text-xl font-semibold">New Arrivals</div>
      <div className="p-10">
        {loading ? <div className="bg-red-500"> loading...</div> : <Slider {...settings}>{newArrivalsItems}</Slider>}
      </div>
    </div>
  );
};

export default Main;
