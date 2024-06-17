import React from "react";
import Navbar from "./Componenst/Navbar/Navbar";
import Hero from "./Componenst/Hero/Hero";
import About from "./Componenst/About/About";
import Services from "./Componenst/Services/Services";
import MyWork from "./Componenst/MyWork/MyWork.jsx";
import Contact from "./Componenst/Contact/Contact";
import Footer from "./Componenst/Footer/Footer"
import ProjectGallery from "./Componenst/Project/Project.jsx"
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />

      <MyWork/>
      <ProjectGallery/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
