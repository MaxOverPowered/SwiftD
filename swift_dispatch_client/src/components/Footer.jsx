import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {FaFacebook, FaInstagram} from "react-icons/fa";

const Footer = () => {
    const [isHoverFacebook, setHoverFacebook] = useState(false);
    const [isHoverInstagram, setHoverInstagram] = useState(false);

    return (
        <footer className="bg-gray-900 w-full">
            <div
                className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
                <div className="text-gray-300 mb-3 sm:mb-0">© Swift Dispatch 2023</div>
                <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-around w-full">
                    <a
                        href="https://www.facebook.com/swift.dispatch.company/"
                        className="text-gray-300 hover:text-gray-400 px-3 py-2"
                    >
                        <div className="relative inline-block align-middle">
                            <a
                                href="https://www.facebook.com/swift.dispatch.company/"
                                className={`inline-flex items-center px-6 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs uppercase tracking-widest text-gray-600 hover:text-white hover:bg-blue-600 focus:outline-none focus:border-blue-300 active:bg-blue-400 transition ease-in-out duration-150 ${
                                    isHoverFacebook ? "bg-blue-600 text-white" : ""
                                }`}
                                onMouseEnter={() => setHoverFacebook(true)}
                                onMouseLeave={() => setHoverFacebook(false)}
                            >
                                <FaFacebook className="text-xl"/>
                                <span className="ml-2">Facebook</span>
                            </a>
                        </div>
                    </a>
                    <a
                        href="https://www.instagram.com/swift.dispatch.company/"
                        className="text-gray-300 hover:text-gray-400 px-3 py-2"
                    >
                        <div className="relative inline-block align-middle">
                            <a
                                href="https://www.instagram.com/swift.dispatch.company/"
                                className={`inline-flex items-center px-6 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs uppercase tracking-widest text-gray-600 hover:text-white hover:bg-purple-600 focus:outline-none focus:border-purple-300 active:bg-purple-400 transition ease-in-out duration-150 ${
                                    isHoverInstagram ? "bg-purple-600 text-white" : ""
                                }`}
                                onMouseEnter={() => setHoverInstagram(true)}
                                onMouseLeave={() => setHoverInstagram(false)}
                            >
                                <FaInstagram className="text-xl"/>
                                <span className="ml-2">Instagram</span>
                            </a>
                        </div>
                    </a>
                    <a
                        className="text-gray-300 hover:text-gray-400 px-3 py-2"
                    >
                        swift.dispatch.info@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
