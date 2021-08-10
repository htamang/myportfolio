import React from "react";

//import Profile from "../assets/profile.jpg";
const Home = () => {
  return (
    <section id="home">
      <div className="container-fluid px-0 home-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3>Hello, my name is</h3>
              <h1>Harka Tamang</h1>
              <h2>And I'm The Developer You Need!</h2>
              <div className="mt-4">
                <a href="#about">
                  <button className="main-btn">
                    Hire Me<i className="fas fa-angle-right ps-2"></i>
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

export default Home;
