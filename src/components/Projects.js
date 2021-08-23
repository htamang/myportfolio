import React from "react";
import * as fontAwesome from 'react-icons/fa'

const Projects = () => {
  return (
    <section id="projects">
      <div className="container-fluid px-0 projects-section">
        <div className="container">
          <div className="row text-centre">
          <div className="card col-sm-4 mb-5">
              <h1>Simple Calculator</h1>
              <p>
              Site is under construction!!!
              </p>
              <div className="mt-4">
                <button className="white-btn">
                  Demo<fontAwesome.FaChevronRight/>
                </button>
              </div>
            </div>
            <div className="card col-sm-4 mb-5">
              <h1>Quizz</h1>
              <p>
              Site is under construction!!!
              </p>
              <div className="mt-4">
                <button className="white-btn">
                  Demo<fontAwesome.FaChevronRight/>
                </button>
              </div>
            </div>
            <div className="card col-sm-4 mb-5">
              <h1>Weather App</h1>
              <p>
                Site is under construction!!!
              </p>
              <div className="mt-4">
                <button className="white-btn">
                  Demo<fontAwesome.FaChevronRight/>
                </button>
              </div>
            </div>
            <div className="card col-sm-4 mb-5">
              <h1>Restaurant</h1>
              <p>
              Site is under construction!!!
              </p>
              <div className="mt-4">
                <button className="white-btn">
                  Demo<fontAwesome.FaChevronRight/>
                </button>
              </div>
            </div>
            <div className="card col-sm-4 mb-5">
              <h1>Face Recognition</h1>
              <p>
              Site is under construction!!!
              </p>
              <div className="mt-4">
                <button className="white-btn">
                  Demo<fontAwesome.FaChevronRight/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
