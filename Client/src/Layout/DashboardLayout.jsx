import React from 'react';
import Navbar from "../Components/Navbar.jsx";
import Sidebar from "../Dashboard/Components/Sidebar.jsx";

const DashboardLayout = ({children}) => {
    return (
        <div className="h-screen flex flex-col">
            <Navbar/>
            <div className="flex flex-grow overflow-hidden container">
                <Sidebar/>
                <div className="flex-grow p-10 py-8 px-3 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
