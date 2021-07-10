/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about">
      <div class="about-section wrapper">
      <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 col-md-12 md-lg-0 md-b">
              <div class="card border-0">
                <img src={Profile} alt="image" />
              </div>
            </div>
            <div class="col-lg-5 col-md-12 text-sec">
              <h2>From what I eat, you can probably tell what I am</h2>
              <p>
                If you do not eat well, then you won’t be able to think well,
                love well, and sleep well.We are lucky that we don’t have to
                venture into the wild and hunt for food anymore. Like, where do
                tacos even live?!
              </p>
              <div class="mt-4">
                <button class="main-btn mt-4">
                  Learn More <i class="fas fa-angle-right ps-3"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="container education">
          <div class="row align-items-center">
            <div class="col-lg-5 col-md-12 text-sec mb-lg-0 md-5">
              <h2>Education Background</h2>
              <p>
                I complete my High School from Tribhuwan Trishuli Higher Secondary Sechool
                Trishuli, Nuwakot District, Nepal
              </p>
              <ul class="list-unstyled py-3">
                <li>Bachelor of Science in IT from LPU, Punjab, India
                </li>
                <li>Master of IT from UNE, Armidale, Australia</li>
              </ul>
              <button class="main-btn mt-4">
                Learn More <i class="fas fa-angle-right ps-3"></i>
              </button>
            </div>
            <div class="col-lg-7 col-md-12">
              <div class="card border-0">
                <img src={Profile} alt="image" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
