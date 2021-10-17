import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const { users, signOutUser } = useAuth();

  return (
    <div className="header">
      {/* tailwind navbar start */}

      <nav className="flex items-center container mx-auto mt-5 justify-center  flex-wrap bg-transparent p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <h2 className="text-4xl uppercase font-bold text-orange-500">
            Delicious
          </h2>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-xl lg:flex-grow">
            {/* <NavLink className="text-white" to="/breakfast">
              Breakfast
            </NavLink>
            <NavLink className="text-white" to="/lunch">
              Lunch
            </NavLink>
            <NavLink className="text-white" to="/dinner">
              Dinner
            </NavLink> */}
          </div>

          {!users.displayName > 0 ? (
            <div>
              <Link to="/login">
                <div className="inline-block text-sm bg-orange-600 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mr-4 mt-4 lg:mt-0">
                  Login
                </div>
              </Link>
              <Link
                to="/register"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="flex">
              <h2 className="text-white font-bold text-xl mr-5 uppercase">
                {users.displayName}
                {console.log(users)}
              </h2>
              <div
                onClick={signOutUser}
                className="inline-block text-sm bg-orange-600 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mr-4 mt-4 lg:mt-0 cursor-pointer"
              >
                Log Out
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* tailwind navbar end */}
    </div>
  );
};

export default Header;
