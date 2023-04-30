import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Adm from "./components/Projects/Details/Adm";
import O2A from "./components/Projects/Details/O2A";
import Palmeraie from "./components/Projects/Details/Palmeraie";
import D4G from "./components/Projects/Details/D4G";
import Footmania from "./components/Projects/Details/Footmania";

import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills/Skills";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/Adm" element={<Adm />} />
          <Route path="/O2A" element={<O2A />} />
          <Route path="/Palmeraie" element={<Palmeraie />} />
          <Route path="/D4G" element={<D4G />} />
          <Route path="/Footmania" element={<Footmania />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
