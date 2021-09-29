import React, { useEffect } from "react";
import { DashboardLayout } from "../shared/layout";

export function RoleAddScreen() {
  const pageSettings = {
    title: "Add New Role",
    actions: [
      {
        name: "List",
        color: "blue",
        icon: "add-icon",
        onClick: () => {
          window.location.href = "/roles";
        },
      },
      {
        name: "Save",
        color: "blue",
        icon: "add-icon",
        onClick: () => {
          addRole();
        },
      },
    ],
  };

  const addRole = () => {
    alert("Must Be Save Role");
  };

  return (
    <div>
      <DashboardLayout
        title={pageSettings.title}
        actions={pageSettings.actions}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          <input type="text" value=""></input>
        </div>
      </DashboardLayout>
    </div>
  );
}
