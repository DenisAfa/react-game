import React, { useCallback, useEffect, useState } from "react";
import generateCells, { CellType } from "../utils/cells/generateCells";
import "./AppContainer.scss";
import Field from "./Field/Field";
import { Face } from "./Info/FaceInfo/FaceInfo";
import Info from "./Info/Info";

const AppContainer: React.FC = () => {
  const [face, setFace] = useState<Face>(Face.smile);
  const [isLive, setIsLive] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [cells, setCells] = useState<CellType[][]>(generateCells());
  const [bombCounter, setBombCounter] = useState<number>(10);
  const [hasLost, setHasLost] = useState<boolean>(false);
  const [hasWon, setHasWon] = useState<boolean>(false);

  const setFaceCallback = (faceType: Face): void => {
    setFace(faceType);
  };

  const setTimeCallback = (
    timeValue: number = time,
    increaseValue: number = 0
  ): void => {
    setTime(timeValue + increaseValue);
  };

  const setIsLiveCallback = (isLiveValue: boolean): void => {
    setIsLive(isLiveValue);
  };

  const setCellsCallback = (newCells: CellType[][]) => {
    setCells(newCells);
  };

  const setBombCounterCallback = (
    newBombCounter: number = bombCounter,
    increaseValue: number = 0,
    isAddition: boolean = false
  ): void => {
    isAddition
      ? setBombCounter(newBombCounter + increaseValue)
      : setBombCounter(newBombCounter - increaseValue);
  };

  const setHasLostCallback = (hasLost: boolean) => {
    setHasLost(hasLost);
  };

  const setHasWonCallback = (hasWon: boolean) => {
    setHasWon(hasWon);
  };

  useEffect(() => {
    if (hasLost) {
      setIsLive(false);
      setFace(Face.lost);
    } else {
      setFace(Face.smile);
    }
  }, [hasLost]);

  useEffect(() => {
    if (hasWon) {
      setIsLive(false);
      setFace(Face.won);
    }
  }, [hasWon]);

  return (
    <div className="wrapper">
      <Info
        isLive={isLive}
        time={time}
        face={face}
        bombCounter={bombCounter}
        setTimeCallback={setTimeCallback}
        setIsLiveCallback={setIsLiveCallback}
        setCellsCallback={setCellsCallback}
        setBombCounterCallback={setBombCounterCallback}
        setHasLostCallback={setHasLostCallback}
        setHasWonCallback={setHasWonCallback}
      />
      <Field
        cells={cells}
        isLive={isLive}
        bombCounter={bombCounter}
        setFaceCallback={setFaceCallback}
        setIsLiveCallback={setIsLiveCallback}
        setCellsCallback={setCellsCallback}
        setBombCounterCallback={setBombCounterCallback}
        setHasLostCallback={setHasLostCallback}
        setHasWonCallback={setHasWonCallback}
      />
    </div>
  );
};

export default AppContainer;
