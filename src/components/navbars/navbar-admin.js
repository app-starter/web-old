import { Link, useHistory } from "react-router-dom";
import { useObserver } from "mobx-react";
import AuthStore from "../../stores/AuthStore";



export function NavbarAdmin() {
  const history = useHistory();

  const adminRoutesMenu = [
    {
      displayName: "Users",
      path: "/users",
      isHavePermission: AuthStore.isHavePermission("Permission_UserRead"),
    },
    {
      displayName: "Roles",
      path: "/roles",
      isHavePermission: AuthStore.isHavePermission("Permission_RoleRead"),
    },
  ];
  const logout = () => {
    // localstorage  must be clear in here
    AuthStore.logout();
    history.push("/");
  };
  return useObserver(() => (
    <nav className="border-b-2">
      <div className="max-w-7xl mx-auto  px-4 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              to="/"
            >
              APP STARTER
            </Link>

            <div className="block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link className="text-black px-3 py-2  text-sm font-medium" to="/">
                  Dashboard
                </Link>
                {adminRoutesMenu.map(
                  (route) =>
                    route.isHavePermission && (
                      <Link
                        className="text-black px-3 py-2  text-sm font-medium"
                        to={route.path}
                        key={route.path}
                      >
                        {route.displayName}
                      </Link>
                    )
                )}
              </div>
            </div>
          </div>

          <div className="ml-4 flex items-center md:ml-6">
            <div className="ml-3 ">
              <Link
                className="text-black px-3 py-2 rounded-md text-sm font-medium"
                onClick={logout}
                to="/"
              >
                Sign out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  ));
}
