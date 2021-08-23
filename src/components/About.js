/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
//import Harka from "../assets/harka.jpg";
//import Profile from "../assets/profile.jpg";
import htamang from "../assets/htamang.jpg";
import resume from "../assets/harka-resume.docx";
import * as fontAwesome from 'react-icons/fa';

const About = () => {
  return (
    <section id="about">
      <div className="container-fluid px-0 about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={htamang} alt="profile-pic" />
            </div>
            <div className="col-md-6 txt">
              <h1>Harka Bahadur Tamang</h1>
              <p>
                Junior Front End Developer l looking for an entry-level role of
                developer programmer/software developer in a company with a
                dynamic team that.
              </p>
              <div className="mt-4">
                <a href={resume}>
                  <button className="white-btn">
                    View Resume<fontAwesome.FaChevronRight/>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
