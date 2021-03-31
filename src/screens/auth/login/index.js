import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../../data";

import AuthStore from "../../../stores/AuthStore";
import { AuthLayout } from "../shared/layout";

export function LoginScreen() {
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginApp = () => {
    login({ email: email, password: password })
      .then((response) => {
        var res = response.data;
        if (res.success) {
          AuthStore.setUser(res.token);
        } else {
          console.log(response.data.errors);
        }
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };

  return (
    <AuthLayout>
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
        Sign Up
      </h2>

      {error !== null && (
        <div className="bg-red-400 text-black p-2 mb-2 rounded font-small">
          {error.message}
          <br />
          {error.errors.map((item) => (
            <div>
              <span>- {item.msg}</span>
            </div>
          ))}
        </div>
      )}

      <div className=" mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm ">
          Username or email
        </label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full   border  border-gray-300   text-base  py-1 px-3 leading-8 "
        />
      </div>
      <Link
        className="shadow-lg  bg-green-200 text-center border-0 py-2 px-8   rounded text-lg"
        onClick={loginApp}
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
