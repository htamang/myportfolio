import React from 'react'
import * as fontAwesome from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer">
        <div className="footer py-5 footer-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 footer-social pt-4 mb-5 text-center">
                <a data-bs-toggle="tooltip" title="Linkedin Profile" href="https://www.linkedin.com/in/harka-tamang-27b139173/"><fontAwesome.FaLinkedinIn /></a>
                <a data-bs-toggle="tooltip" title="Github Profile" href="https://github.com/htamang"><fontAwesome.FaGithubAlt /></a>
              </div>
              <div className="col-sm-12 text-center">
                <span
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  >Created By <a href="#">Harka Tamang</a> |
                  <fontAwesome.FaCopyright />2020 All rights
                  reserved.</span
                >
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
