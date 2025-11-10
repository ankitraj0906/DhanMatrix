import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Signup from "./landing_page/signup/Signup.jsx";
import About from "./landing_page/about/About.jsx";
import Pricingpage from "./landing_page/pricing/Pricingpage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import ProductPage from "./landing_page/products/ProductPage.jsx";
import NotFound from "./landing_page/NotFound.jsx";
import HomePage from "./landing_page/home/Homepage";
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

import Login from "./landing_page/login/Login.jsx";

import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricingpage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
