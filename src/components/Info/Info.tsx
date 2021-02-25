import React from "react";
import FaceInfo from "./FaceInfo/FaceInfo";
import "./Info.scss";
import NumberDisplay from "./NumberDisplay/NumberDisplay";

const Info: React.FC = (props) => {
  return (
    <div className="game-info">
      <NumberDisplay value={0} />
      <FaceInfo />
      <NumberDisplay value={23} />
    </div>
  );
};

export default Info;
