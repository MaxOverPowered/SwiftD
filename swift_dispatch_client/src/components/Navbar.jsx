import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../company_Icon/new/text_element.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg">
      <nav className="bg-white py-4 flex  justify-between border-8 border-green-900">
        <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex justify-between h-13">
            <div className="absolute inset-y-0 flex items-left lg:hidden">
              <button
                type="button"
                onClick={toggleNavbar}
                ref={menuRef}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className=" flex items-center h-12  sm:items-stretch sm:justify-left">
              <div className="flex items-center item-left sm:h-15 ml-12 -mt-5 ">
                <Link to="/">
                  <motion.img
                    src={logo}
                    alt="swift_Dispatch"
                    className="object-contain max-w-full h-auto -ml-35"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                    style={{ maxWidth: "177.49px", maxHeight: "128px" }}
                  />
                </Link>
              </div>
              <div className="hidden lg:block flex items-center justify-between w-full ">
                <Link
                  to="/about"
                  className="text-green-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-l font-medium"
                >
                  About Us
                </Link>
                <Link
                  to="/services"
                  className="text-green-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-l font-medium"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="text-green-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-l font-medium"
                >
                  Contact Us
                </Link>
                <Link to="/signIn">
                  <button className="ml-8 text-green-900 hover:text-green-900 border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-green-900 dark:hover:text-white dark:hover:bg-green-900 dark:focus:ring-gray-800">
                    <span className=" px-3 py-2 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0">
                      Sign in
                    </span>
                  </button>
                </Link>
                <Link to="/signUp">
                  <button className=" text-green-900 hover:text-green-900 border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-green-900 dark:hover:text-white dark:hover:bg-green-900 dark:focus:ring-gray-800">
                    <span className=" px-3 py-2 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0">
                      Sign Up
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="flex lg:hidden relative " id="mobile-menu">
              <div className="absolute z-10 px-2 pt-2 pb-3 space-y-1 bg-white border-4 border-green-900 shadow-lg">
                <Link
                  to="/about"
                  className="text-green-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Us
                </Link>
                <Link
                  to="/services"
                  className="text-green-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="text-green-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact Us
                </Link>
                <Link to="/signIn">
                  <button className=" text-green-900 hover:text-green-900 border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-green-900 dark:hover:text-white dark:hover:bg-green-900 dark:focus:ring-gray-800">
                    <span className=" px-3 py-2 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0">
                      Sign In
                    </span>
                  </button>
                </Link>
                <Link to="/signUp">
                  <button className=" text-green-900 hover:text-green-900 border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-green-900 dark:hover:text-white dark:hover:bg-green-900 dark:focus:ring-gray-800">
                    <span className=" px-3 py-2 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0">
                      Sign Up
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
