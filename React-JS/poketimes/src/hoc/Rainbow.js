import React from "react";
const Rainbow = (WrappedComponent) => {
  const colours = ["red", "pink", "orange", "blue", "green", "yellow"];
  const ramdomColour = colours[Math.floor(Math.random() * 5)];
  const classname = ramdomColour + "-text";

  return (props) => {
    return (
      <div className={classname}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
