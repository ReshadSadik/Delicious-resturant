import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = (props) => {
  const {id, name, img, description, price } = props.meal;
  const itemId= `/food/${id}`;
  return (
    <div>
      <Link to= {itemId}  >
      <div  className="w-full hover:shadow-lg cursor-pointer rounded-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
        <div className="mb-8">
          <img
            className="object-center object-cover rounded-full h-36 w-36"
            src={img}
            alt=""
          />
        </div>
        <div className="text-center">
          <p className="text-xl text-gray-700 font-bold mb-2">{name}</p>
          <p className="text-base text-gray-400 font-normal">{description}</p>
          <p className="font-bold text-green-700">${price}</p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default ItemCard;
