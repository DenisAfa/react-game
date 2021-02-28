import { CellType, CellValue } from "./generateCells";
import getAdjacentCells from "./getAdjacentCells";

const getNumberForCells = (
  cells: CellType[][],
  maxRows: number,
  maxColumns: number
): CellType[][] => {
  cells.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      let currentCell = cell;
      if (currentCell.value === CellValue.bomb) {
        return;
      }

      let numberOfBombs = calculateNumberOfBombsForCell(
        cells,
        rowIndex,
        columnIndex,
        maxColumns,
        maxRows
      );

      if (numberOfBombs > 0) {
        cells[rowIndex][columnIndex] = {
          ...cell,
          value: numberOfBombs,
        };
      }
    });
  });
  return cells;
};

const calculateNumberOfBombsForCell = (
  cells: CellType[][],
  rowIndex: number,
  columnIndex: number,
  maxColumns: number,
  maxRows: number
): number => {
  const bombsCells: (CellType | null)[] = getAdjacentCells(
    cells,
    rowIndex,
    columnIndex,
    maxColumns,
    maxRows
  );

  let numberOfBombs = 0;

  bombsCells.forEach((bombCell) => {
    if (bombCell?.value === CellValue.bomb) {
      numberOfBombs += 1;
    }
  });

  return numberOfBombs;
};

export default getNumberForCells;
