import React from "react";
import * as fontAwesome from "react-icons/fa";

const Home = () => {
  return (
    <section id="home">
      <div className="container-fluid px-0 home-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Harka Tamang</h1>
              <h2>I'm The Developer You Need!</h2>
              <div className="mt-1 txt">
                <a href="#about">
                  <button className="main-btn">
                    Hire Me<fontAwesome.FaChevronRight />
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
