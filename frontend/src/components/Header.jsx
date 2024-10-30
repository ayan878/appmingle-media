import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../assets/cropped-cropped-AppMingle-Media_Logo1.jpg";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="relative bg-transparent mx-1 md:mx-8 py-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto text-white">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-12" alt="AppMingle Logo" />
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={openMenu}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`w-full md:block md:w-auto ${openMenu ? "" : "hidden"}`}
        >
          <ul className="flex flex-col items-start md:items-center bg-white md:bg-transparent font-medium mt-4 md:space-x-8 md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 border">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-black md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                ABOUT US
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="flex items-center justify-between w-full py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                aria-expanded={openDropdown}
              >
                SERVICES
                <IoMdArrowDropdown
                  className={`hover:transition-all ${
                    openDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown && (
                <div className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <Link
                        to="/services/web-development"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b"
                      >
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/mobile-app-development"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b"
                      >
                        Mobile App Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/digital-marketing"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b"
                      >
                        Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/web-design"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b"
                      >
                        Web Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/mobile-app-development-patna"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b"
                      >
                        Mobile App Development In Patna
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/digital-marketing-patna"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b"
                      >
                        Digital Marketing In Patna
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link
                to="/blog"
                className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                CONTACT US
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hidden md:flex ml-4 py-2 px-2 bg-blue-400 hover:bg-gray-100 md:hover:bg-blue-300 md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                GET A QUOTE
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
