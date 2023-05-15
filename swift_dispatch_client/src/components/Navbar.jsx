import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../company_Icon/new/text_element.png";
import {useTranslation} from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [isMainPage, setIsMainPage] = useState(window.location.pathname === "/");
  const { t, i18n } = useTranslation();

  const handleLogoClick = () => {
    window.location.href = "/";
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMainPage(true);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const switchLanguage = () => {
    const lang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg">
      <nav className="bg-gray-200 py-4 flex justify-between shadow-md hover:shadow-lg transition duration-300">
        <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex justify-between h-13">
            <div className="absolute inset-y-0 flex items-left lg:hidden">
              <button
                type="button"
                onClick={toggleNavbar}
                ref={menuRef}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
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
            <div className="flex items-center h-12 sm:items-stretch sm:justify-left">
              <div className="flex items-center item-left sm:h-15 ml-12 -mt-5 ">
                <a href="/" onClick={handleLogoClick}>
                  <motion.img
                    src={logo}
                    alt="swift_Dispatch"
                    className="object-contain max-w-full h-auto -ml-35"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                    style={{ maxWidth: "177.49px", maxHeight: "128px" }}
                  />
                </a>
              </div>
              <div className="hidden lg:block items-center justify-between w-full mt-3">
                <Link
                  to="/about"
                  className="text-green-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-l font-medium"
                >
                  {t('navbar.aboutUs')}
                </Link>
                <Link
                  to="/services"
                  className="text-green-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-l font-medium"
                >
                  {t('navbar.services')}
                </Link>
                <Link
                  to="/contact"
                  className="text-green-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-l font-medium"
                >
                  {t('navbar.contactUs')}
                </Link>
                <button onClick={switchLanguage} className="mt-8 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
                  {i18n.language === 'en' ? 'Switch to Russian' : 'Switch to English'}
                </button>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="flex lg:hidden relative" id="mobile-menu">
              <div className="absolute z-10 px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-2xl mt-0.5">
                <Link
                  to="/about"
                  className="text-green-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {t('navbar.aboutUs')}</Link>
                <Link
                  to="/services"
                  className="text-green-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {t('navbar.services')}
                </Link>
                <Link
                  to="/contact"
                  className="text-green-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {t('navbar.contactUs')}
                </Link>
                {/* <Link to="/signIn">
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
                </Link> */}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
