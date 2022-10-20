import React from "react";
import About from "./Teaser/About";
import Certification from "./Education/Certification";
import Experience from "./Teaser/Experience";
import Intropage from "./Home/Intropage";
import Project from "./Education/Project";
import Skills from "./Education/Skills";
import Contact from "./Teaser/Contact";

const Home = () => {
  return (
    <>
      <Intropage />
      <About />
      <Skills />
      <Experience />
      <Certification />
      <Project />
      <Contact/>
    </>
  );
};

export default Home;
