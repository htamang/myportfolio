import React, { useState, useEffect } from "react";
import "../App.css";
import { FaAngleUp } from "react-icons/fa";

const ScrollArrow = () => {
  //state of ScrollArrow
  const [showScroll, setShowScroll] = useState(false);

  //adding and removing scroll event effect
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
      
    };
  });
  

  //checks for scroll and if yes checks height of the page as pageY
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  // window.addEventListener("scroll", checkScrollTop);

  const checkNavScroll = () => {
    if (!showScroll && window.pageYOffset >= 20) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 20) {
      setShowScroll(false);
    }

  };
  window.addEventListener("scroll", checkNavScroll);

  //scroll to Top
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <FaAngleUp
        className="scrollTop"
        onClick={scrollTop}
        style={{ height: 60, display: showScroll ? "flex" : "none" }}
      />
    </div>
  );
};

export default ScrollArrow;
