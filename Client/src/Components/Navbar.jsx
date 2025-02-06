import { useState } from "react";
import {Link, NavLink} from "react-router";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">
            <nav className="relative bg-white shadow dark:bg-gray-800 md:px-20">
                <div className="container px-6 py-3 mx-auto md:flex md:items-center md:justify-between">
                    <div className="flex items-center justify-between">
                        <a href="#">
                            <img className="w-auto h-6 sm:h-7" src="images/plainb-logo.svg"
                                 alt="Logo"/>
                        </a>

                        {/* Mobile Menu Button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                                aria-label="toggle menu"
                            >
                                {isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16"/>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div
                        className={`absolute inset-x-0 z-20 w-full px-6 py-4 bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:relative md:flex md:items-center md:justify-between ${
                            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full md:opacity-100 md:translate-y-0"
                        }`}
                    >
                        <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 gap-2">
                            <NavLink to="/"
                               className="px-2.5 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2 rounded">
                                Home
                            </NavLink>
                            <NavLink to="/about"
                               className="px-2.5 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2 rounded">
                                About
                            </NavLink>
                            <NavLink to="/blog"
                                     className="px-2.5 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2 rounded">
                                Blog
                            </NavLink>
                            <NavLink to="/service"
                                     className="px-2.5 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2 rounded">
                                Service
                            </NavLink>
                            <NavLink to="/contact"
                               className="px-2.5 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2 rounded">
                                Contact
                            </NavLink>
                        </div>

                        <div>
                            <NavLink to="/dashboard"
                                     className="px-2.5 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2 rounded">
                                Dashboard
                            </NavLink>
                            <NavLink to="/login"
                                     className="px-2.5 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2 rounded">
                                Login
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
