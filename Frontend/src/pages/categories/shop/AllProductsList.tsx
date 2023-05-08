import React, { FC } from 'react';

const AllProductsList: FC = () => {
  return (
    <div className="mx-20">
      <div className="mt-20 flex justify-center text-2xl font-medium">모든 제품</div>
      <div className=" flex justify-center">
        <div className="mt-10 flex justify-evenly w-80 text-gray-400">
          <span className="text-gray-400  transition-colors duration-800 hover:text-black cursor-pointer">
            모든 제품
          </span>
          <span className="text-gray-400  transition-colors duration-800 hover:text-black cursor-pointer">
            스킨케어
          </span>
          <span className="text-gray-400  transition-colors duration-800 hover:text-black cursor-pointer">
            바디케어
          </span>
        </div>
      </div>
      <div className="mt-20">
        <div className="text-xl">Best Items</div>
      </div>
    </div>
  );
};

export default AllProductsList;
