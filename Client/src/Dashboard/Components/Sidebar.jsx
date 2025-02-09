import { useState } from "react";
import { NavLink } from "react-router";
import { ChevronDown } from "lucide-react";
import {IoMdAdd} from "react-icons/io";
import {IoReaderOutline} from "react-icons/io5"; // Importing an icon

const Sidebar = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <aside className="dashboard-sidebar h-screen w-40 shadow dark:bg-gray-900">
            <nav className="h-full flex flex-col py-6">

                {/* Blog Section */}
                <button
                    onClick={() => toggleSection("blog")}
                    className="border-b border-gray-300 flex items-center justify-between w-full p-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
                >
                    Blog
                    <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                            openSection === "blog" ? "rotate-180" : ""
                        }`}
                    />
                </button>

                {openSection === "blog" && (
                    <ul className="flex flex-col gap-2 mt-2 ml-4">
                        <NavLink to="/add-blog" className="text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                           <div className="flex items-center justify-around">
                               <IoMdAdd className="inline" /> Add Blog
                           </div>
                        </NavLink>
                        <NavLink to="all-blogs" className="text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                            <div className="flex items-center justify-around">
                                <IoReaderOutline className="inline"/> All Blogs
                            </div>
                        </NavLink>
                    </ul>
                )}

                {/* service Section */}
                <button
                    onClick={() => toggleSection("service")}
                    className="my-3 border-b border-gray-300 flex items-center justify-between w-full p-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
                >
                    Service
                    <ChevronDown
                        className={`w-4 h-4transition-transform duration-300 ${
                            openSection === "service" ? "rotate-180" : ""
                        }`}
                    />
                </button>

                {openSection === "service" && (
                    <ul className="flex flex-col gap-2 mt-2 ml-4">
                        <NavLink to="/blog/add" className="text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                           <div className="flex items-center justify-around">
                               <IoMdAdd className="inline" /> Add Service
                           </div>
                        </NavLink>
                        <NavLink to="/blog/all" className="text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                            <div className="flex items-center justify-around">
                                <IoReaderOutline className="inline" /> All Services
                            </div>
                        </NavLink>
                    </ul>
                )}

                {/* team Section */}
                <button
                    onClick={() => toggleSection("team")}
                    className="border-b border-gray-300 flex items-center justify-between w-full p-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
                >
                    Team
                    <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                            openSection === "team" ? "rotate-180" : ""
                        }`}
                    />
                </button>

                {openSection === "team" && (
                    <ul className="flex flex-col gap-2 mt-2 ml-4">
                        <NavLink to="/blog/add" className="text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                            <div className="flex items-center justify-around">
                                <IoMdAdd className="inline" /> Add Member
                            </div>
                        </NavLink>
                        <NavLink to="/blog/all" className="text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                            <div className="flex items-center justify-around">
                                <IoReaderOutline className="inline" /> All Members
                            </div>
                        </NavLink>
                    </ul>
                )}

            </nav>
        </aside>
    );
};

export default Sidebar;
