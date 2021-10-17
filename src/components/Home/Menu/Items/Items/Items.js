import React from 'react';
import { NavLink } from 'react-router-dom';

import './Items.css';
const Items = () => {
  return (
    <div>
      <div className="text-xl text-center mt-10 lg:flex-grow">
        <NavLink
          activeClassName="selected"
          className="mx-10 font-bold no-underline   hover:underline"
          to="/home/breakfast"
        >
          Breakfast
        </NavLink>
        <NavLink
          activeClassName="selected"
          className="mx-10 font-bold no-underline   hover:underline"
          to="/home/lunch"
        >
          Lunch
        </NavLink>
        <NavLink
          activeClassName="selected"
          className="mx-10 font-bold no-underline   hover:underline"
          to="/home/dinner"
        >
          Dinner
        </NavLink>
      </div>
    </div>
  );
};

export default Items;
