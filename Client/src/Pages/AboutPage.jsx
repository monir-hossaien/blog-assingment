import React from 'react';
import About from "../Components/About.jsx";
import MasterLayout from "../Layout/MasterLayout.jsx";
import Team from "../Components/Team.jsx";

const AboutPage = () => {
    return (
        <MasterLayout>
            <About/>
            <Team/>
        </MasterLayout>
    );
};

export default AboutPage;