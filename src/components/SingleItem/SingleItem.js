import React from 'react';
import { useParams } from 'react-router-dom';
import useMeals from '../../hooks/useMeals';
// import Cart from '../../others/Cart/Cart';
import Item from '../Home/Menu/Item/Item';
import Items from '../Home/Menu/Items/Items/Items';

const SingleItem = () => {
  const { itemId } = useParams();
  const [meals] = useMeals();
  // const { addedItems } = useCart();

  if (meals.length > 0) {
    //   finding item that matches the id
    // var item = meals.find((meal) => meal.id === parseInt(itemId));
    //   var { img, name, id, price, desc_long } = item;
    // filtering for images to show at the bottom
    //   const carouselItem = meals.filter((meal) => item.category === meal.category);
    //   var newCarouselItem = carouselItem.slice(1, 3);
    //   var changeDirectory = `/home/${item.category}`;
  }

  return (
    <div>
      <Items></Items>
      {/* <Cart></Cart>
      {item.id && <Item items={item}></Item>} */}
      <Item></Item>
    </div>
  );
};

export default SingleItem;
