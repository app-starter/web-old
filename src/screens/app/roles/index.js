import { useObserver } from "mobx-react";
import React, { useEffect } from "react";
import { UserCard } from "../../../components";

import RoleStore from "../../../stores/RoleStore";

import { DashboardLayout } from "../shared/layout";

export function RoleScreen() {
  const getData = () => {
    RoleStore.getRoles();
  };

  useEffect(() => {
    getData();
  }, []);
  return useObserver(() => (
    <div>
      <DashboardLayout title="Roles">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {RoleStore.roles.length ? (
            RoleStore.roles.map((item) => (
              <UserCard email={item.name} role={item.permissions.join(",")} />
            ))
          ) : (
            <div className=" bg-red-300">Not Found Roles</div>
          )}
        </div>
      </DashboardLayout>
    </div>
  ));
}
