import React from "react";

const SpecialButton = props => {
  return (
    <button onClick={()=>props.clearDisplay(props.character)}>{props.character}</button>
  );
}

export default SpecialButton;