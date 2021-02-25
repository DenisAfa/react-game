import React from "react";
import "./FaceInfo.scss";
import smile from "../../../assets/images/smile_1.png";

const FaceInfo: React.FC = (props) => {
  return (
    <div className="game-info__smile">
      <img className="game-info__image" src={smile} alt="smile" />
    </div>
  );
};

export default FaceInfo;
