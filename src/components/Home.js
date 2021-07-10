import React from "react";
//import Profile from "../assets/profile.jpg";
const Home = () => {
  return (
    <section id="home">
      <div className="container-fluid px-0 top-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <h3>Hi My Name is Harka Tamang. I am a Developer</h3>
              <p>
                Owners of dogs will have noticed that, if you provide them with
                food and water and shelter and affection, they will think you
                are god. Whereas owners of cats are compelled to realize that,
                if you provide them with food and water and shelter and
                affection, they draw the conclusion that they are gods
              </p>
              <div className="mt-4">
                <button className="main-btn">
                  Learn More <i className="fas fa-angle-right ps-3"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
