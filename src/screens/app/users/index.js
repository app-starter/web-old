import { useObserver } from "mobx-react";
import React, { useEffect } from "react";
import { UserCard } from "../../../components";
import UserStore from "../../../stores/UserStore";
import { DashboardLayout } from "../shared/layout";

export function UsersScreen() {
  const login = () => {
    UserStore.getAllUser();
  };

  useEffect(() => {
    login();
  }, []);
  return useObserver(() => (
    <div>
      <DashboardLayout title="Users">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {UserStore.users.length ? (
            UserStore.users.map((item) => (
              <UserCard email={item.email} role={item.role} />
            ))
          ) : (
            <div className=" bg-red-300">Not Found Users</div>
          )}
        </div>
      </DashboardLayout>
    </div>
  ));
}
