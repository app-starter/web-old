import React from "react";
import { NavbarAdmin } from "../../../components";

export const DashboardLayout = (props) => {
  return (
    <div>
      <NavbarAdmin />
      <header className="max-w-7xl mx-auto p-4  lg:flex lg:items-center lg:justify-between ">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            {props.title}
          </h2>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          {props.actions != null
            ? props.actions.map((item) => (
                <button
                  key={item.name}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={item.onClick}
                >
                  {item.name}
                </button>
              ))
            : ""}
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto  ">{props.children}</div>
      </main>
    </div>
  );
};
