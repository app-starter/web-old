import { Link, useHistory } from "react-router-dom";
import AuthStore from "../../stores/AuthStore";

export function NavbarLandingPage() {
  return (
    <nav className="border-b-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <Link
                  to="/about"
                  href="#"
                  className="text-black px-3 py-2  text-sm font-medium"
                >
                  About
                </Link>
              </div>
            </div>
          </div>

          <div className="ml-4 flex items-center md:ml-6">
            <div className="ml-3 ">
              <Link
                to="/login"
                className="text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
