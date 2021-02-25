import React from "react";
import "./NumberDisplay.scss";

interface NumberDisplayProps {
  value: number;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({ value }) => {
  let number: string = value.toString().padStart(3, "0");
  return <div className="game-info__display">{number}</div>;
};

export default NumberDisplay;
