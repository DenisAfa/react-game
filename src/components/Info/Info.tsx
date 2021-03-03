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
  setFaceCallback(face: Face): void;
  maxRows: number;
  maxColumns: number;
  numbersOfBombs: number;
}

const Info: React.FC<InfoProps> = ({
  face,
  time,
  isLive,
  bombCounter,
  maxRows,
  maxColumns,
  numbersOfBombs,
  setTimeCallback,
  setCellsCallback,
  setIsLiveCallback,
  setBombCounterCallback,
  setHasLostCallback,
  setHasWonCallback,
  setFaceCallback,
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
    <section className="game-info">
      <NumberDisplay value={bombCounter} />
      <FaceInfo
        face={face}
        setTimeCallback={setTimeCallback}
        setCellsCallback={setCellsCallback}
        setIsLiveCallback={setIsLiveCallback}
        setBombCounterCallback={setBombCounterCallback}
        setHasLostCallback={setHasLostCallback}
        setHasWonCallback={setHasWonCallback}
        setFaceCallback={setFaceCallback}
        maxRows={maxRows}
        maxColumns={maxColumns}
        numbersOfBombs={numbersOfBombs}
      />
      <NumberDisplay value={time} />
    </section>
  );
};

export default Info;
