import React from 'react';

const MainImageContainer = () => {
  return (
    <div className="relative">
      <img
        src="https://melixirskincare.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/5e9ec2a95253d8dc92bc2dc32c5110a4.jpg"
        className="hidden  sm:block sm:h-[90vh] sm:object-cover sm:w-full"
      ></img>
      <img
        src="https://kr.melixirskincare.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/73037fed8f21fd7592afe1d3758622db.jpg"
        className="h-[90vh] object-cover w-full sm:hidden navMargin"
      ></img>
      <div className=" absolute bottom-[5%] left-[30%] sm:bottom-[20%] sm:left-[10%] min-w-[250px] sm:align-middle">
        <div className="text-xl sm:text-4xl mb-2">공기처럼 가벼운 </div>
        <div className="text-xl sm:text-4xl mb-3">비건 에어핏 선스크린</div>
        <div>세포라 판매 1위 베스트셀러 </div>
        <div className="mb-5">피부가 숨쉬는 편안한 비건 선크림 </div>
        <button className="bg-black w-32 sm:w-48 text-white p-2">바로가기</button>
      </div>
    </div>
  );
};

export default MainImageContainer;
