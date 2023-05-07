import Home from "./pages/Home/Home";
import About from "./pages/About/index";
import Career from "./pages/Career/index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ visibility: "hidden" }}>h</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
