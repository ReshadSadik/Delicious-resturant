import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const { googleSignIn } = useAuth();
  return (
    <div>
      <Link to="/login">
        <div className="h-screen flex items-center">
          <div className="shadow-md w-1/2  mx-auto max-w-md">
            <Link to="/home">
              <div className="text-black font-bold border-2 w-10 ml-auto">
                X
              </div>
            </Link>
            <div className="p-12">
              <p className="text-5xl pt-10 text-yellow-500 font-bold">
                Welcome Back
              </p>
              <p className="text-xl py-3 text-gray-400 font-semibold">
                Sign in to continue
              </p>
            </div>
            <div className="mx-12 p-3 pb-10 rounded-xl shadow-sm bg-gray-100">
              <div className="p-3 mx-6 border-b border-gray-500">
                <input
                  placeholder="Email"
                  className="bg-transparent text-yellow-500 w-full focus:outline-none focus:rang"
                  type="tel"
                />
              </div>

              <div className="p-3 mx-6 flex border-b border-gray-500">
                <input
                  placeholder="Password"
                  className="bg-transparent text-yellow-500 focus:outline-none focus:rang w-full"
                  type="password"
                />
                <div className="w-auto text-yellow-500">eyes</div>
              </div>
            </div>
            <div className="mx-12 p-3 justify-between flex">
              <div className="flex">
                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-gray-800 border-4 appearance-none cursor-pointer"
                  />
                  <label
                    htmlFor="toggle"
                    className="toggle-label block overflow-hidden h-6 rounded-full bg-yellow-500 cursor-pointer"
                  ></label>
                </div>
                <label
                  htmlFor="toggle"
                  className="text-xs text-gray-500 font-bold mt-1"
                >
                  remeber me
                </label>
              </div>
              <div className="bg mt-1 text-xs text-gray-500 font-bold">
                <a href="/">forget password?</a>
              </div>
            </div>
            <div className="w-full p-12">
              <button className=" bg-yellow-500 p-3 rounded-3xl w-full h-full hover:bg-yellow-600">
                {' '}
                Login
              </button>
              <p className="mx-auto text-center mt-3 text-gray-400">
                don't have an account?{' '}
                <Link
                  to="/register"
                  className="text-md text-black font-semibold"
                >
                  Sign up
                </Link>{' '}
              </p>
              <div className="flex mt-5">
                <button
                  onClick={googleSignIn}
                  className="bg-yellow-500   px-10 rounded-3xl  h-12 text-sm hover:bg-yellow-600 mb-5"
                >
                  google sign in
                </button>
                <button className="bg-yellow-500 text-sm  rounded-3xl px-10 h-12 hover:bg-yellow-600">
                  facebook sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Login;
