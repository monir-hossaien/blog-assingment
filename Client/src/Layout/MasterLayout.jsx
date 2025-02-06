import React from 'react';
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

const MasterLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default MasterLayout;