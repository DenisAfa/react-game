import React, { useState } from "react";
import FaceInfo, { Face } from "./FaceInfo/FaceInfo";
import "./Info.scss";
import NumberDisplay from "./NumberDisplay/NumberDisplay";

interface InfoProps {
  face: Face;
  time: number;
}

const Info: React.FC<InfoProps> = ({ face, time }) => {
  return (
    <div className="game-info">
      <NumberDisplay value={0} />
      <FaceInfo face={face} />
      <NumberDisplay value={time} />
    </div>
  );
};

export default Info;
