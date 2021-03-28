import React from "react";
import { Link } from "react-router-dom";

import AuthStore from "../../../stores/AuthStore";
import { AuthLayout } from "../shared/layout";
export function LoginScreen() {
  const login = () => {
    // Api Login entpoint must be called in here
    AuthStore.login({ email: "a@a.com", password: "12345678" });
  };

  return (
    <AuthLayout>
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
        Sign Up
      </h2>
      <div className=" mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm ">
          Username or email
        </label>
        <input
          type="text"
          placeholder="Username"
          className="w-full   border  border-gray-300   text-base  py-1 px-3 leading-8 "
        />
      </div>

      <div className=" mb-4">
        <label htmlFor="email" className="leading-7 text-sm">
          Email
        </label>
        <input
          type="password"
          placeholder="Password"
          className="w-full   border  border-gray-300   text-base  py-1 px-3 leading-8 "
        />
      </div>
      <Link
        className="shadow-lg  bg-green-200 text-center border-0 py-2 px-8   rounded text-lg"
        onClick={login}
        to="/"
      >
        Login
      </Link>
      <Link
        className="shadow-lg  text-center border-0 py-2 px-8   text-lg mt-5 "
        to="register"
      >
        Register
      </Link>
    </AuthLayout>
  );
}
