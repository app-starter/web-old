import React from "react";

export const AuthLayout = (props, title) => {
  return (
    <section>
      <div className="container px-5 py-10 mx-auto flex flex-col justify-center items-center">
        <div className="mb-5 border-b-2 border-black p-3">
          <h1 className="title-font font-medium text-3xl  ">App Starter</h1>
        </div>
        <div className="lg:w-2/6   p-8 flex flex-col   mt-10 md:mt-0">
          {props.children}
        </div>
      </div>
    </section>
  );
};
