import React from 'react';
import './Banner.css';
import NewCarousel from './Carousel/NewCarousel';

const Banner = () => {
  return (
    <div className="banner mt-20 ">
      <div className="flex text-white items-center  justify-between">
        <div className="">
          <div className="ml-52 mt-56 banner-text text-left">
            <h2 className="text-5xl  font-semibold">DELICIOUS</h2>
            <h2 className="text-orange-500 resturant text-7xl font-bold">
              RESTURANT
            </h2>
            <span className="text-4xl uppercase">super discount</span>
          </div>

          <button className="banner-order-btn bg-orange-500">ORDER NOW</button>
        </div>
        <div className=" w-2/3 mt-96 overflow-hidden">
          <NewCarousel></NewCarousel>
        </div>
      </div>
    </div>
  );
};

export default Banner;
