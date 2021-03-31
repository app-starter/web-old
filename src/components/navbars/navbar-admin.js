import { Link, useHistory } from "react-router-dom";
import AuthStore from "../../stores/AuthStore";

export function NavbarAdmin() {
  const history = useHistory();
  const logout = () => {
    // localstorage  must be clear in here
    AuthStore.logout();
    history.push("/");
  };
  return (
    <nav className="border-b-2">
      <div class="max-w-7xl mx-auto  px-4 ">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <Link
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              to="/"
            >
              APP STARTER
            </Link>

            <div class="block">
              <div class="ml-10 flex items-baseline space-x-4">
                <Link class="text-black px-3 py-2  text-sm font-medium" to="/">
                  Dashboard
                </Link>
                <Link
                  class="text-black px-3 py-2  text-sm font-medium"
                  to="/users"
                >
                  Users
                </Link>
              </div>
            </div>
          </div>

          <div class="ml-4 flex items-center md:ml-6">
            <div class="ml-3 ">
              <Link
                class="text-black px-3 py-2 rounded-md text-sm font-medium"
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
  );
}
