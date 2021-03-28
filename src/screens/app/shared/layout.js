import React from "react";
import { NavbarAdmin } from "../../../components";

export const DashboardLayout = (props) => {
  return (
    <div>
      <NavbarAdmin />
      <header class="bg-white ">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-1xl font-bold text-gray-900">{props.title}</h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto  ">{props.children}</div>
      </main>
    </div>
  );
};
