import React from "react";
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
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
            <div className="framework col-md-4">
              <div className="card border-0 text-center">
                <h1>Framework</h1>
                <img src={framework} alt="framework" />
                <ul className="list-unstyled py-3">
                  <li>Bootstrap</li>
                  <li>JQuery</li>
                  <li>React</li>
                </ul>
              </div>
            </div>

            <div className="backend col-sm-4">
              <div className="card border-0 text-center">
                <h1>Back End</h1>
                <img src={backend} alt="backend" />
                <ul className="list-unstyled py-3">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Python</li>
                </ul>
              </div>
            </div>
            <div className="database col-sm-4">
              <div className="card border-0 text-center">
                <h1>Database</h1>
                <img src={database} alt="database" />
                <ul className="list-unstyled py-3">
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
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
