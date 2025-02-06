import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import ServicePage from "./Pages/ServicePage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";

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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;