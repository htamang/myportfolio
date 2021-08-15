/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import * as fontAwesome from 'react-icons/fa'
const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navigation-wrap">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <h1>
              Portfo<span style={{ color: "black" }}>lio.</span>
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
           <fontAwesome.FaBars />
          </button>
          <div className="collapse navbar-collapse navbar-text" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link icon" data-bs-toggle="tooltip" title="Linkedin Profile" href="https://www.linkedin.com/in/harka-tamang-27b139173/"><fontAwesome.FaLinkedinIn />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link icon" data-bs-toggle="tooltip" title="Github Profile" href="https://github.com/htamang"><fontAwesome.FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
