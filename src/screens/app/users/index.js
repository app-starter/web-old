import React, { useEffect } from "react";
import AuthStore from "../../../stores/AuthStore";
import UserStore from "../../../stores/UserStore";
import { DashboardLayout } from "../shared/layout";

export function UsersScreen() {
  const login = () => {
    // Api Login entpoint must be called in here
    UserStore.getAllUser();
  };

  useEffect(() => {
    login();
  });
  return (
    <div>
      <DashboardLayout title="Users">
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200"></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {UserStore.users.length ? (
          UserStore.users.map((item) => (
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm text-gray-500">{item.email}</div>
                  </div>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <div className=" bg-red-300">Not Found Users</div>
        )}
      </DashboardLayout>
    </div>
  );
}
