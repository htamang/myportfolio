import React from "react";
import Typical from "react-typical";

const Typing = () => {
  return (
    <div>
      <Typical
        steps={["Hello", 1000, "Hello world!", 500]}
        loop={Infinity}
        wrapper="p"
      />
    </div>
  );
};

export default Typing;
