/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Harka from "../assets/harka.jpg";
import resume from '../assets/harka-resume.docx'

const About = () => {
  return(
    <section id="about">
    <div className="container-fluid px-0 about-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img src={Harka} alt="profile-pic" />
          </div>
          <div className="col-sm-6 txt">
            <h1>Harka Bahadur Tamang</h1>
            <p>
              An IT professional looking for an entry-level role of developer
              programmer/software developer in a company with a dynamic team
              that can help me in enhancing my technical skills and
              strengthening my knowledge.
            </p>
            <div className="mt-4">
              <a href={resume}>
                <button className="white-btn">
                  View Resume<i className="fas fa-angle-right ps-2"></i></button
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
