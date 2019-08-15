import React from "react";


const OperatorButton = props => {
  return (
      <button onClick={()=>props.addOperator(props.signs.value)}>{props.signs.char}</button>
  );
};

export default OperatorButton;
