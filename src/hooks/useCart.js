import { useState } from 'react';
import Cart from '../others/Cart/Cart';
import useMeals from './useMeals';
import './useCart.css';

const useCart = () => {
  const [meals] = useMeals();
  const [carts, setCarts] = useState([]);
  const addedItems = (id) => {
    const cartItems = meals.find((item) => item.id === id);
    setCarts(cartItems);
    <div>
      <Cart cort={carts}></Cart>
    </div>;
  };
  //   newCart.push(carts);

  //   console.log(carts);
  carts.length && (
    <div>
      <Cart cort={carts}></Cart>
    </div>
  );

  return {
    addedItems,
    carts,
  };
};

export default useCart;
