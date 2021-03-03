import React, { useCallback, useEffect, useState } from "react";
import generateCells, { CellType } from "../utils/cells/generateCells";
import "./App.scss";
import Field from "./Field/Field";
import Footer from "./Footer/Footer";
import { Face } from "./Info/FaceInfo/FaceInfo";
import Info from "./Info/Info";
import Settings from "./Settings/Settings";

const App: React.FC = () => {
  const [maxRows, setMaxRows] = useState<number>(9);
  const [maxColumns, setMaxColumns] = useState<number>(9);
  const [numbersOfBombs, setNumbersOfBombs] = useState<number>(10);
  const [face, setFace] = useState<Face>(Face.smile);
  const [isLive, setIsLive] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [cells, setCells] = useState<CellType[][]>(
    generateCells(maxRows, maxColumns, numbersOfBombs)
  );
  const [bombCounter, setBombCounter] = useState<number>(numbersOfBombs);
  const [hasLost, setHasLost] = useState<boolean>(false);
  const [hasWon, setHasWon] = useState<boolean>(false);
  const [hasChangeLevel, setHasChangeLevel] = useState<boolean>(false);

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

  const setMaxRowsCallback = useCallback(
    (maxRows: number) => {
      setMaxRows(maxRows);
    },
    [setMaxRows]
  );

  const setMaxColumnsCallback = useCallback(
    (maxColumns: number) => {
      setMaxColumns(maxColumns);
    },
    [setMaxColumns]
  );

  const setNumbersOfBombsCallback = useCallback(
    (numbersOfBombs: number) => {
      setNumbersOfBombs(numbersOfBombs);
    },
    [setNumbersOfBombs]
  );

  const setHasChangeLevelCallback = useCallback(
    (hasChangeLevel: boolean) => {
      setHasChangeLevel(hasChangeLevel);
    },
    [setHasChangeLevel]
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

  useEffect(() => {
    if (hasChangeLevel) {
      setCells(generateCells(maxRows, maxColumns, numbersOfBombs));
      setBombCounter(numbersOfBombs);
      setTime(0);
      setIsLive(false);
    }
  }, [hasChangeLevel, maxRows, maxColumns, numbersOfBombs]);
  return (
    <div>
      <Settings
        setHasChangeLevelCallback={setHasChangeLevelCallback}
        setMaxRowsCallback={setMaxRowsCallback}
        setMaxColumnsCallback={setMaxColumnsCallback}
        setNumbersOfBombsCallback={setNumbersOfBombsCallback}
      />
      <div className="game-wrapper">
        <main className="game">
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
            maxRows={maxRows}
            maxColumns={maxColumns}
            numbersOfBombs={numbersOfBombs}
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
            maxRows={maxRows}
            maxColumns={maxColumns}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
