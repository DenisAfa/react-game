import React from "react";
import "./NumberDisplay.scss";

interface NumberDisplayProps {
  value: number;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({ value }) => {
  let number: string =
    value < 0
      ? `-${Math.abs(value).toString().padStart(2, "0")}`
      : value.toString().padStart(3, "0");
  return <div className="game-info__display">{number}</div>;
};

export default React.memo(NumberDisplay);
