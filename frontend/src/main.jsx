import { BrowserRouter, Routes, Route } from "react-router-dom";
import React  from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import NavBar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFoundPage from "./landing_page/NotFoundPage";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Product" element={<ProductsPage />} />
      <Route path="/Pricing" element={<PricingPage />} />
      <Route path="/Support" element={<SupportPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);
