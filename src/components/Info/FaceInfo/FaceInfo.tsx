import React from "react";
import "./FaceInfo.scss";

export enum Face {
  smile = "🤠",
  oops = "🥶",
  lost = "☠️",
  won = "😎",
}

interface FaceInfoProps {
  face: Face;
}

const FaceInfo: React.FC<FaceInfoProps> = ({ face }) => {
  return (
    <div className="game-info__smile">
      <span className="game-info__image" role="img" aria-label="face">
        {face}
      </span>
    </div>
  );
};

export default FaceInfo;
