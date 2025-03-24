import React from "react";

import Home from "./components/Home";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Nav from "./components/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="">
      <ToastContainer />
      <Nav />

      <div className="px-4 scroll-smooth pt-2 sm:pt-16 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-[#0C2340] text-slate-300">
        <Home />
        <About />
        <Education />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
