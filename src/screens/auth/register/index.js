import React from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../shared/layout";

export function RegisterScreen() {
  return (
    <AuthLayout>
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
        Sign Up
      </h2>
      <div className=" mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm ">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Username"
          className="w-full    border  border-gray-300   text-base  py-1 px-3 leading-8 "
        />
      </div>

      <div className=" mb-4">
        <label htmlFor="email" className="leading-7 text-sm">
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          className="w-full   border  border-gray-300  text-base  py-1 px-3 leading-8 "
        />
      </div>

      <div className="relative mb-4">
        <label htmlFor="pasword" className="leading-7 text-sm">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="w-full    border  border-gray-300   text-base  py-1 px-3 leading-8 "
        />
      </div>
      <Link
        className="shadow-lg  bg-green-200 text-center border-0 py-2 px-8   rounded text-lg"
        to="/"
      >
        Register
      </Link>
      <Link
        className="shadow-lg  text-center border-0 py-2 px-8   text-lg mt-5 "
        to="login"
      >
        Login
      </Link>
    </AuthLayout>
  );
}
