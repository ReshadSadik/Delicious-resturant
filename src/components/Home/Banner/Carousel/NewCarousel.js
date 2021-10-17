import React from 'react';
import Carousel from 'react-elastic-carousel';
import consts from 'react-elastic-carousel';
import { FaAngleLeft } from 'react-icons/fa';

import Card from './Card';
import './Carousel.css';

const NewCarousel = () => {
  function myArrorw({ type, onClick, isEdge }) {
    const pointer =
      type === consts.PREV ? (
        'prev'
      ) : (
        <FaAngleLeft className=" w-10 h-10 pr-1 rounded-full bg-yellow-500 text-white focus:outline-none border-none"></FaAngleLeft>
      );

    return (
      <button className="mt-2/3 " onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  }
  return (
    <div className="carousel">
      <Carousel
        itemsToShow={3}
        renderArrow={myArrorw}
        itemPadding={[0, 10]}
        autoPlaySpeed={2000}
        enableAutoPlay
      >
        <Card
          title="Snacks"
          img="https://www.yummytoddlerfood.com/wp-content/uploads/2021/06/after-school-snacks-on-countertop-500x500.jpg"
        ></Card>
        <Card
          title="Breakfast"
          img="https://images.unsplash.com/photo-1542276867-c7f5032e1835?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        ></Card>
        <Card
          title="Lunch"
          img="https://media.self.com/photos/5ea1ab14db1f1f0008b0f5c2/master/w_800,h_1000,c_limit/seasoned-brown-lentils.jpg"
        ></Card>
        <Card
          title="Dinner"
          img="https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1474395998-ghk-0216-comfortfoodcover-meatballs.jpg?crop=0.856xw:0.571xh;0.0224xw,0.296xh&resize=640:*"
        ></Card>
        <Card
          title="Buffet"
          img="https://orientalgarden.de/images/grande-luxus-buffet.jpg"
        ></Card>
      </Carousel>
    </div>
  );
};

export default NewCarousel;
