import React from "react";
import * as fontAwesome from 'react-icons/fa'
import frontend from '../assets/front-end.jpg';
import backend from '../assets/back-end.jpg';
import framework from '../assets/framework.jpg'
import database from '../assets/database.jpg';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container-fluid px-0 skills-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="frontend col-md-4">
              <div className="card border-0 text-center">
                <h1>Front End</h1>
                <img src={frontend} alt="frontend" />
                <ul className="list-unstyled py-3">
                  <li> <fontAwesome.FaCheck />HTML</li>
                  <li> <fontAwesome.FaCheck />CSS</li>
                  <li> <fontAwesome.FaCheck />Javascript</li>
                </ul>
              </div>
            </div>
            <div className="framework col-md-4">
              <div className="card border-0 text-center">
                <h1>Framework</h1>
                <img src={framework} alt="framework" />
                <ul className="list-unstyled py-3">
                  <li><fontAwesome.FaCheck />Bootstrap</li>
                  <li><fontAwesome.FaCheck />JQuery</li>
                  <li><fontAwesome.FaCheck />React</li>
                </ul>
              </div>
            </div>

            <div className="backend col-sm-4">
              <div className="card border-0 text-center">
                <h1>Back End</h1>
                <img src={backend} alt="backend" />
                <ul className="list-unstyled py-3">
                  <li><fontAwesome.FaCheck />Node.js</li>
                  <li><fontAwesome.FaCheck />Express.js</li>
                  <li><fontAwesome.FaCheck />Python</li>
                </ul>
              </div>
            </div>
            <div className="database col-sm-4">
              <div className="card border-0 text-center">
                <h1>Database</h1>
                <img src={database} alt="database" />
                <ul className="list-unstyled py-3">
                  <li><fontAwesome.FaCheck />MySQL</li>
                  <li><fontAwesome.FaCheck />PostgreSQL</li>
                  <li><fontAwesome.FaCheck />MongoDB</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
