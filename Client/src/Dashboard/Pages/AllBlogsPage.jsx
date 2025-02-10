import React from 'react';
import DashboardLayout from "../../Layout/DashboardLayout.jsx";
import AllBlogs from "../Components/AllBlogs.jsx";

const AllBlogsPage = () => {
    return (
        <DashboardLayout>
            <AllBlogs/>
        </DashboardLayout>
    );
};

export default AllBlogsPage;