/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import * as fontAwesome from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container-fluid px-0 contact-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1 className="title">Contact me</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 text-center">
              <h1>Get in Touch</h1>
              <div className="contact-content">
                <fontAwesome.FaUser />
                <span>Name:</span>
                <span>Harka Bahadur Tamang</span>
              </div>
              <div className="contact-content">
                <fontAwesome.FaMapMarkerAlt />
                <span>Address:</span>
                <span>Grovedale 3216, Victoria</span>
              </div>
              <div className="contact-content">
                <fontAwesome.FaEnvelope />
                <span>Email:</span>
                <span>hbtamang50@gmail.com</span>
              </div>
              <div className="contact-content">
                <fontAwesome.FaPhoneAlt />
                <span>Mobile:</span>
                <span>+61 466073288</span>
              </div>
              <div className="contact-content mt-4">
                <a
                  target="_blank"
                  className="p-2"
                  href="mailto:hbtamang50@gmail.com"
                  rel="noreferrer"
                >
                  Send Email
                </a>
              </div>
            </div>
            <div className="col-sm-6 text-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.4493465990527!2d144.33908791521998!3d-38.199463179684294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad413595e7c03ed%3A0xc182c3d47eb69fd3!2s3%2F207%20Torquay%20Rd%2C%20Grovedale%20VIC%203216!5e0!3m2!1sen!2sau!4v1627107793274!5m2!1sen!2sau"
                width="500"
                height="370"
                // eslint-disable-next-line react/style-prop-object
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
