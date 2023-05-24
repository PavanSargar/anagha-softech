import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/index";
import Career from "./pages/Career/index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Contact from "./pages/Contact";

import Aos from "aos";
import "aos/dist/aos.css";
import CareerDetail from "./pages/CareerDetail";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ visibility: "hidden" }}>h</div>
      <Routes>
        <Route path="/" element={<Home animation="fade-down" />} />
        <Route path="/about" element={<About animation="fade-down" />} />
        <Route path="/career" element={<Career animation="fade-down" />} />
        <Route
          path="/our-services"
          element={<Services animation="fade-down" />}
        />
        <Route path="/service/:id" element={<ServiceDetail />} />
        {/* <Route
          path="/portfolio"
          element={<Portfolio animation="fade-down" />}
        />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} /> */}
        <Route path="/career/:id" element={<CareerDetail />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
