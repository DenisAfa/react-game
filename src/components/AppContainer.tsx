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

  const setFaceCallback = useCallback(
    (faceType: Face): void => {
      setFace(faceType);
    },
    [setFace]
  );

  const setTimeCallback = useCallback(
    (timeValue: number = time, increaseValue: number = 0): void => {
      setTime(timeValue + increaseValue);
    },
    [time]
  );

  const setIsLiveCallback = useCallback(
    (isLiveValue: boolean): void => {
      setIsLive(isLiveValue);
    },
    [setIsLive]
  );

  const setCellsCallback = useCallback(
    (newCells: CellType[][]) => {
      setCells(newCells);
    },
    [setCells]
  );

  const setBombCounterCallback = useCallback(
    (
      newBombCounter: number = bombCounter,
      increaseValue: number = 0,
      isAddition: boolean = false
    ): void => {
      isAddition
        ? setBombCounter(newBombCounter + increaseValue)
        : setBombCounter(newBombCounter - increaseValue);
    },
    [bombCounter]
  );

  const setHasLostCallback = useCallback(
    (hasLost: boolean) => {
      setHasLost(hasLost);
    },
    [setHasLost]
  );

  const setHasWonCallback = useCallback(
    (hasWon: boolean) => {
      setHasWon(hasWon);
    },
    [setHasWon]
  );

  useEffect(() => {
    if (hasLost) {
      setIsLive(false);
      setFace(Face.lost);
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
        setFaceCallback={setFaceCallback}
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
