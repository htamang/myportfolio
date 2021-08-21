import React from "react";
import * as fontAwesome from 'react-icons/fa'

const Projects = () => {
  return (
    <section id="projects">
      <div class="container-fluid px-0 projects-section">
        <div class="container">
          <div class="row">
            <div class="card col-sm-4 mb-5">
              <h1>Quizz</h1>
              <p>
              Site is under construction!!!
              </p>

              {/* <a class="learn-more" href="#">Demo</a>
                  <a class="learn-more" href="#">Code</a> */}

              <div class="mt-4">
                <button class="white-btn">
                  Demo<fontAwesome.FaChevronRight/>
                </button>
              </div>
            </div>
            <div class="card col-sm-4 mb-5">
              <h1>Weather App</h1>
              <p>
                Site is under construction!!!
              </p>

              {/* <!--
                    <a class="learn-more" href="#">Demo</a>
                <a class="learn-more" href="#">Code</a>
                  --> */}
              <div class="mt-4">
                <button class="white-btn">
                  Demo<fontAwesome.FaChevronRight/>
                </button>
              </div>
            </div>
            <div class="card col-sm-4 mb-5">
              <h1>Restaurant</h1>
              <p>
              Site is under construction!!!
              </p>
              {/* <!--
                    <a class="learn-more" href="#">Demo</a>
                <a class="learn-more" href="#">Code</a>
                  --> */}
              <div class="mt-4">
                <button class="white-btn">
                  Demo<fontAwesome.FaChevronRight/>
                </button>
              </div>
            </div>
            <div class="card col-sm-4 mb-5">
              <h1>Face Recognition</h1>
              <p>
              Site is under construction!!!
              </p>
              {/* <!-- <a class="learn-more" href="#">Demo</a> 
                <a class="learn-more" href="#">Code</a> --> */}
              <div class="mt-4">
                <button class="white-btn">
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
