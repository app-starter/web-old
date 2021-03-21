import React from "react";
import { Link } from "react-router-dom";

export function RegisterScreen() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto flex flex-col justify-center items-center">
        <div className=" md:pr-16 lg:pr-0 pr-0 mb-5">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            {" "}
            Welcome to Magma Register Screen
          </h1>
        </div>
        <div className="lg:w-2/6  bg-gray-100 rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div className="relative lg- mb-4">
            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-white   rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <Link
            className="text-white   text-center bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg  "
            to="register"
          >
            Register
          </Link>
          <Link
            className="text-white text-center bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mt-5"
            to="login"
          >
            Login
          </Link>

          <p className="text-xs text-gray-500 mt-3">
            Literally you probably haven't heard of them jean shorts.
          </p>
        </div>
      </div>
    </section>
  );
}
