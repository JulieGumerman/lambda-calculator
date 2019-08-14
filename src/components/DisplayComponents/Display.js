import React from "react";
import "../../App.css";

const Display = props => {
  return <div className="display">
    {props.num}
  </div>;
};

export default Display;