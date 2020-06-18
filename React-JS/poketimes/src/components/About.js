import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About Page</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quas
        est ut aliquid impedit. Ad cum dolores nulla ipsa? Esse nam illum
        maiores alias ad dolore rem et in omnis!
      </p>
    </div>
  );
};

export default Rainbow(About);
