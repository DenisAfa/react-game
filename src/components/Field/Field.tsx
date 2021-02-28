import React from "react";
import {
  CellState,
  CellType,
  CellValue,
  MAX_COLUMNS,
  MAX_ROWS,
} from "../../utils/cells/generateCells";
import openMultipleCells from "../../utils/cells/openMultipleCells";
import { Face } from "../Info/FaceInfo/FaceInfo";
import Cell from "./Cell/Cell";
import "./Field.scss";

interface FieldProps {
  cells: CellType[][];
  isLive: boolean;
  bombCounter: number;
  setFaceCallback(faceType: Face): void;
  setCellsCallback(newCells: CellType[][]): void;
  setIsLiveCallback(isLiveValue: boolean): void;
  setBombCounterCallback(
    newBombCounter: number,
    increaseValue?: number,
    isAddition?: boolean
  ): void;
  setHasLostCallback(hasLost: boolean): void;
  setHasWonCallback(hasWon: boolean): void;
}

const Field: React.FC<FieldProps> = ({
  cells,
  isLive,
  bombCounter,
  setFaceCallback,
  setCellsCallback,
  setIsLiveCallback,
  setBombCounterCallback,
  setHasLostCallback,
  setHasWonCallback,
}) => {
  const handleMouseDown = (): void => {
    setFaceCallback(Face.oops);
  };

  const handleMouseUp = (): void => {
    setFaceCallback(Face.smile);
  };

  const handleCellClick = (row: number, column: number): void => {
    if (!isLive) {
      setIsLiveCallback(true);
    }
    const currentCell = cells[row][column];
    let newCells = cells.slice();

    if (
      currentCell.state === CellState.flagged ||
      currentCell.state === CellState.visible
    ) {
      return;
    }

    switch (currentCell.value) {
      case CellValue.bomb:
        setHasLostCallback(true);
        newCells[row][column].isRed = true;
        newCells = showAllBombs();
        setCellsCallback(newCells);
        return;
      case CellValue.none:
        newCells = openMultipleCells(newCells, row, column);

        break;
      default:
        newCells[row][column].state = CellState.visible;
        setCellsCallback(newCells);
    }

    let safeOpenCellsExists: boolean = false;
    for (let i = 0; i < MAX_ROWS; i += 1) {
      for (let j = 0; j < MAX_COLUMNS; j += 1) {
        const currentCell = newCells[i][j];

        if (
          currentCell.value !== CellValue.bomb &&
          currentCell.state === CellState.open
        ) {
          safeOpenCellsExists = true;
          break;
        }
      }
    }

    if (!safeOpenCellsExists) {
      newCells = newCells.map((row) =>
        row.map((cell) => {
          if (cell.value === CellValue.bomb) {
            return {
              ...cell,
              state: CellState.flagged,
            };
          }
          return cell;
        })
      );
      setHasWonCallback(true);
    }

    setCellsCallback(newCells);
  };

  const handleCellContext = (row: number, column: number): void => {
    if (!isLive) {
      setIsLiveCallback(true);
    }

    let currentCell = cells[row][column];
    const currentCells = cells.slice();

    if (currentCell.state === CellState.visible) {
      return;
    } else if (currentCell.state === CellState.open) {
      currentCells[row][column].state = CellState.flagged;
      setCellsCallback(currentCells);
      if (bombCounter > -99) {
        setBombCounterCallback(bombCounter, 1);
      }
    } else if (currentCell.state === CellState.flagged) {
      currentCells[row][column].state = CellState.open;
      setBombCounterCallback(bombCounter, 1, true);
    }
  };
  const showAllBombs = (): CellType[][] => {
    const currentCells = cells.slice();
    return currentCells.map((row) =>
      row.map((cell) => {
        if (cell.value === CellValue.bomb) {
          return {
            ...cell,
            state: CellState.visible,
          };
        }
        return cell;
      })
    );
  };

  const cellElements = cells.map((row, rowIndex) =>
    row.map((cell, columnIndex) => (
      <Cell
        key={`${cell.id}`}
        value={cell.value}
        state={cell.state}
        row={rowIndex}
        column={columnIndex}
        isRed={cell.isRed}
        handleCellClick={handleCellClick}
        handleCellContext={handleCellContext}
      />
    ))
  );

  return (
    <div
      className="game-field"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {cellElements}
    </div>
  );
};

export default Field;
