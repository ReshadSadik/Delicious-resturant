import { FaCartPlus } from 'react-icons/fa';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';

import './Item.css';
// import useCart from '../../../../hooks/useCart';
import useMeals from '../../../../hooks/useMeals';
const Item = (props) => {
  // const { name, img, id, price, desc_long } = props.items;
  // const { addedItems } = useCart();
  const { itemId } = useParams();
  const [meals] = useMeals();

  let item;
  if (meals.length > 0) {
    //   finding item that matches the id
    item = meals.find((meal) => meal.id === parseInt(itemId));
    var { img, name, price, desc_long } = item;

    // filtering for images to show at the bottom
    const carouselItem = meals.filter(
      (meal) => item.category === meal.category
    );
    var newCarouselItem = carouselItem.slice(1, 3);
    var changeDirectory = `/home/${item.category}`;
  }

  return (
    <div className="mt-20">
      <div className="flex justify-between  container mx-auto  items-center">
        <div className="mt-36">
          <h1 className="text-5xl font-semibold text-black-500 mb-5">{name}</h1>
          <p className="w-96 text-gray-600 font-semibold">{desc_long}</p>
          <div className="flex my-5 justify-center">
            <span className="font-semibold text-3xl mr-5">${price}</span>
            <div className="input-group input-number-group">
              <div className="input-group-button">
                <span className="input-number-decrement hover:text-red-500">
                  -
                </span>
              </div>
              <input
                className="input-number"
                type="number"
                value="1"
                min="0"
                max="1000"
              />
              <div className="input-group-button">
                <span className="input-number-increment hover:text-green-500 text-red-500">
                  +
                </span>
              </div>
            </div>
          </div>
          <button
            // onClick={() => {
            //   addedItems(id);
            // }}
            className="flex px-20 ml-20 py-3 text-lg font-semibold items-center text-white bg-red-500 focus:outline-none rounded-full"
          >
            <FaCartPlus className="text-white mr-5 "></FaCartPlus>
            Add
          </button>

          <Link to={changeDirectory}>
            <div className="flex mt-48 items-center ">
              {meals.length
                ? newCarouselItem.map((item) => (
                    <img
                      className="w-24 mx-5 cursor-pointer"
                      src={item.img}
                      alt=""
                    />
                  ))
                : console.log('cc')}
              <BsFillArrowRightSquareFill className="text-2xl cursor-pointer text-red-500 ml-5"></BsFillArrowRightSquareFill>
            </div>
          </Link>
        </div>
        <div>
          <img className="w-4/6 mx-auto" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Item;
