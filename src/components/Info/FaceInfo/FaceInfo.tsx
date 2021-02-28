import React from "react";
import generateCells, { CellType } from "../../../utils/cells/generateCells";
import "./FaceInfo.scss";

export enum Face {
  smile = "🤠",
  oops = "🥶",
  lost = "☠️",
  won = "😎",
}

interface FaceInfoProps {
  face: Face;
  setTimeCallback(timeValue: number, increaseValue?: number): void;
  setCellsCallback(newCells: CellType[][]): void;
  setIsLiveCallback(isLiveValue: boolean): void;
  setBombCounterCallback(
    newBombCounter: number,
    increaseValue?: number,
    isAddition?: boolean
  ): void;
  setHasLostCallback(hasLost: boolean): void;
  setHasWonCallback(hasLost: boolean): void;
}

const FaceInfo: React.FC<FaceInfoProps> = ({
  face,
  setHasLostCallback,
  setTimeCallback,
  setCellsCallback,
  setIsLiveCallback,
  setBombCounterCallback,
  setHasWonCallback,
}) => {
  const handleFaceClick = (): void => {
    setIsLiveCallback(false);
    setTimeCallback(0);
    setCellsCallback(generateCells());
    setBombCounterCallback(10);
    setHasLostCallback(false);
    setHasWonCallback(false);
  };
  return (
    <div className="game-info__smile" onClick={handleFaceClick}>
      <span className="game-info__image" role="img" aria-label="face">
        {face}
      </span>
    </div>
  );
};

export default FaceInfo;
