import React, { FC, useCallback, useState, useEffect } from 'react';
import Slider from 'react-slick';

const initialState = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
};

const NewArrivalsSlider: FC<{ items: any[] | null }> = ({ items }) => {
  const [settings, setSettings] = useState(initialState);

  const changeSpeed = useCallback(() => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      slidesToScroll: 1,
    }));
  }, []);

  const resetSpeed = useCallback(() => {
    setSettings(initialState);
  }, []);

  useEffect(() => {
    const action = () => {
      changeSpeed();
      setTimeout(resetSpeed, 6000);
    };

    const interval = setInterval(action, 12000);
    return () => clearInterval(interval);
  }, [changeSpeed, resetSpeed]);

  return <Slider {...settings}>{items}</Slider>;
};

export default NewArrivalsSlider;
