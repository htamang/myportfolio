import React from "react";
import rupa from "../assets/rupa.jpg";
import hbt from "../assets/hbt.jpg";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="wrapper testimonial-section">
        <div className="container text-center">
          <div className="text-center pb-4">
            <h2>Testimonial</h2>
          </div>
          <div className="row">
            <div className="col-10 offset-1">
              <div
                id="carouselExampleDark"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="carousel-caption">
                      <img src={hbt} alt="harka pic" />
                      <p>
                        "Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. "
                      </p>
                      <h5>Harka Tamang - Full Stack Developer</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption">
                      <img src={rupa} alt="rupa pic" />
                      <p>
                        "Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. "
                      </p>
                      <h5>Rupa Lama - Accountant(General)</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption">
                      <img src={rupa} alt="rupa pic" />
                      <p>
                        "Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. "
                      </p>
                      <h5>Rupa Lama - Accountant(General)</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
