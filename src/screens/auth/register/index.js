import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../../data";
import AuthStore from "../../../stores/AuthStore";
import { AuthLayout } from "../shared/layout";

export function RegisterScreen() {
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerToApp = () => {
    register({
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    })
      .then((response) => {
        var res = response.data;
        if (res.success) {
          AuthStore.setUser(res.token)
        } else {
          console.log(response.data.errors);
        }
      })
      .catch((error) => {
        debugger
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
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full    border  border-gray-300   text-base  py-1 px-3 leading-8 "
        />
      </div>

      <div className=" mb-4">
        <label htmlFor="email" className="leading-7 text-sm">
          Password
        </label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full   border  border-gray-300  text-base  py-1 px-3 leading-8 "
        />
      </div>

      <div className="relative mb-4">
        <label htmlFor="pasword" className="leading-7 text-sm">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full    border  border-gray-300   text-base  py-1 px-3 leading-8 "
        />
      </div>
      <Link
        className="shadow-lg  bg-green-200 text-center border-0 py-2 px-8   rounded text-lg"
        onClick={registerToApp}
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
