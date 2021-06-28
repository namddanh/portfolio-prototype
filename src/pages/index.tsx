import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import ScrollToTop from "../components/ScrollToTop";
import SkillsChart from "../components/SkillsChart";
import { logoNavND } from "../components/NdLogo.js";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} {...logoNavND} />
      <HeroSection />
      <About />
      <SkillsChart />
      <Portfolio />
      <Projects />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
