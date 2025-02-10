import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import ServicePage from "./Pages/ServicePage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import DashboardPage from "./Dashboard/Pages/DashboardPage.jsx";
import AddBlogPage from "./Dashboard/Pages/AddBlogPage.jsx";
import AllBlogsPage from "./Dashboard/Pages/AllBlogsPage.jsx";
import AddServicePage from "./Dashboard/Pages/AddServicePage.jsx";
import AllServicesPage from "./Dashboard/Pages/AllServicesPage.jsx";
import AddMemberPage from "./Dashboard/Pages/AddMemberPage.jsx";
import AllMembersPage from "./Dashboard/Pages/AllMembersPage.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/service" element={<ServicePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/add-blog" element={<AddBlogPage/>}/>
          <Route path="/all-blogs" element={<AllBlogsPage/>}/>
          <Route path="/add-service" element={<AddServicePage/>}/>
          <Route path="/all-services" element={<AllServicesPage/>}/>
          <Route path="/add-member" element={<AddMemberPage/>}/>
          <Route path="/all-members" element={<AllMembersPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;