import React, { useEffect } from "react";
import { CellType } from "../../utils/cells/generateCells";
import FaceInfo, { Face } from "./FaceInfo/FaceInfo";
import "./Info.scss";
import NumberDisplay from "./NumberDisplay/NumberDisplay";

interface InfoProps {
  face: Face;
  time: number;
  isLive: boolean;
  bombCounter: number;
  setTimeCallback(timeValue: number, increaseValue: number): void;
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

const Info: React.FC<InfoProps> = ({
  face,
  time,
  isLive,
  bombCounter,
  setTimeCallback,
  setCellsCallback,
  setIsLiveCallback,
  setBombCounterCallback,
  setHasLostCallback,
  setHasWonCallback,
}) => {
  useEffect(() => {
    if (isLive && time < 999) {
      let timer = setInterval(() => {
        setTimeCallback(time, 1);
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [isLive, time, setTimeCallback]);
  return (
    <div className="game-info">
      <NumberDisplay value={bombCounter} />
      <FaceInfo
        face={face}
        setTimeCallback={setTimeCallback}
        setCellsCallback={setCellsCallback}
        setIsLiveCallback={setIsLiveCallback}
        setBombCounterCallback={setBombCounterCallback}
        setHasLostCallback={setHasLostCallback}
        setHasWonCallback={setHasWonCallback}
      />
      <NumberDisplay value={time} />
    </div>
  );
};

export default Info;
