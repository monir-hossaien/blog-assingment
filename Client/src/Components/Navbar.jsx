import { useState } from "react";
import {Link, NavLink, useNavigate} from "react-router";
import {userStore} from "../Store/userStore.js";

import { successToast} from "../Helpers/helper.js";

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const {isLogin, logoutRequest} = userStore()

    const handleLogout = async () => {
        await logoutRequest()
        successToast("Logout successful")
        navigate("/")
    }

    return (
        <header className="bg-white shadow dark:bg-gray-800 sticky top-0 z-40 w-full">
            <nav className="py-3 md:flex md:items-center md:justify-between w-[85%] mx-auto">
                <div className="flex items-center justify-between">
                    <NavLink to={"/"}>
                        <img className="w-28" src="images/plainb-logo.svg" alt="Logo"/>
                    </NavLink>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                            aria-label="toggle menu"
                            aria-expanded={isOpen}
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
                <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:relative md:flex md:items-center md:justify-between 
                    ${isOpen ? "block" : "hidden"} md:block`}
                >
                    <div className="flex flex-col  md:flex-row md:space-x-4 xl:ms-16">
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

                    {/* Authentication Buttons */}
                    <div className="mt-4 md:mt-0">
                        {isLogin() ? (
                            <div className="flex space-x-3">
                                <NavLink to="/dashboard"
                                         className="px-3 py-2 text-gray-700 dark:text-gray-200 bg-indigo-50 hover:bg-indigo-100 dark:hover:bg-gray-700 rounded"
                                >
                                    Dashboard
                                </NavLink>
                                <button onClick={handleLogout}
                                        className="px-3 py-2 text-white bg-orange-600 hover:bg-orange-700 rounded"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <NavLink to="/login"
                                     className="px-3 py-2 text-white bg-green-500 hover:bg-green-600 rounded"
                            >
                                Login
                            </NavLink>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
