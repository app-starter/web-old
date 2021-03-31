import React from "react";
import { NavbarAdmin } from "../../../components";

export const DashboardLayout = (props) => {
  return (
    <div>
      <NavbarAdmin />
      <header class="bg-white ">
        <div class="max-w-7xl mx-auto py-4  px-4">
          <h1 class="text-xl font-medium text-gray-900">{props.title}</h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto  ">{props.children}</div>
      </main>
    </div>
  );
};
