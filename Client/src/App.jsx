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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;