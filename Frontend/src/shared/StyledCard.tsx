import React, { FC, useState } from 'react';
import Main from '../models/mainModels';
import { BsHeart, BsFillHeartFill } from 'react-icons/bs';
import { GrShop } from 'react-icons/gr';

interface StyledCardProps {
  item: Main;
}
const StyledCard: FC<StyledCardProps> = ({ item }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isIconMouseOver, setIsIconMouseOver] = useState(false);

  const handleImageHover = () => {
    setIsMouseOver(true);
  };
  const handleImageLeave = () => {
    setIsMouseOver(false);
  };
  const handleIconHover = () => {
    setIsIconMouseOver(true);
  };
  const handleIconLeave = () => {
    setIsIconMouseOver(false);
  };

  return (
    <div onMouseOver={handleImageHover} onMouseLeave={handleImageLeave}>
      <div className="relative">
        <img
          src={isMouseOver ? item.imageUrl[1] : item.imageUrl[0]}
          className="cursor-pointer align-middle h-full w-[90%] hover:animate-fade-in"
        ></img>
        {isMouseOver ? (
          <>
            <p className="absolute right-12 bottom-10 bg-white animate-fade-in border rounded-full  p-2 text-xs cursor-pointer">
              <GrShop />
            </p>
            <p
              className="absolute right-12 bottom-1 bg-white animate-fade-in border rounded-full p-2 text-xs cursor-pointer"
              onMouseOver={handleIconHover}
              onMouseLeave={handleIconLeave}
            >
              {isIconMouseOver ? <BsFillHeartFill className="text-red-500" /> : <BsHeart />}
            </p>
          </>
        ) : null}
      </div>
      <div>{item.name}</div>
      <div className="flex ">
        <p className="mr-3 text-gray-300 line-through">{item.price}</p>
        <p>{item.discountPrice}</p>
      </div>
    </div>
  );
};

export default StyledCard;
