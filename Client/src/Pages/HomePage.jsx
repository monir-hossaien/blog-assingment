import React from 'react';
import MasterLayout from "../Layout/MasterLayout.jsx";
import Hero from "../Components/Hero.jsx";
import Blog from "../Components/Blog.jsx";

const HomePage = () => {
    return (
        <MasterLayout>
            <Hero/>
            <Blog/>
        </MasterLayout>
    );
};

export default HomePage;