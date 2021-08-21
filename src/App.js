import React from "react";
import "./App.css";
import ScrollArrow from './components/ScrollArrow';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from './components/Projects';
import Testimonial from './components/Testimonial';
// import Contact from './components/Contact';
// import Footer from './components/Footer';


function App() {
  
  
  return (
    <div className="App">
      <ScrollArrow />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Testimonial />
      {/* <Contact />
      <Footer />  */}
    </div>
  );
}

export default App;
