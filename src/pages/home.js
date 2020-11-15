import React from "react";
import NavBar from "../components/Navbar/navbar";
import Intro from "../components/Intro/intro";
import About from "../components/About/about";
import Resume from "../components/Resume/resume";
import Services from "../components/Services/services";
import Skills from "../components/Skills/skills";
import Projects from "../components/Projects/projects";
import Contact from "../components/Contact/contact";
import Footer from "../components/Footer/footer";

function Home() {
  return (
    <>
      <NavBar />
      <Intro />
      <About />
      <Resume />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
