import React from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import ApplyNowSection from "./components/ApplyNowSection";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar className="fixed w-full top-0 z-10" />
      <div className="pt-20 flex-grow  lg:w12">
        <Routes className="sm:px-6 md:px-8 lg:px-10 z-10">
          <Route path="/" element={<Home />} />
          {/*<Loading/>*/}
          <Route path="/signUp" element={<Registration />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer className="py-4" />
    </div>
  );
}

export default App;
