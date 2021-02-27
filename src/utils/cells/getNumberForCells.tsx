import { Cell, CellValue } from "./generateCells";

const getNumberForCells = (
  cells: Cell[][],
  maxRows: number,
  maxColumns: number
): Cell[][] => {
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
  cells: Cell[][],
  rowIndex: number,
  columnIndex: number,
  maxColumns: number,
  maxRows: number
): number => {
  const bombsCells: (Cell | null)[] = [];

  rowIndex > 0 && columnIndex > 0
    ? bombsCells.push(cells[rowIndex - 1][columnIndex - 1])
    : bombsCells.push(null);
  rowIndex > 0
    ? bombsCells.push(cells[rowIndex - 1][columnIndex])
    : bombsCells.push(null);

  rowIndex > 0 && columnIndex < maxColumns - 1
    ? bombsCells.push(cells[rowIndex - 1][columnIndex + 1])
    : bombsCells.push(null);
  columnIndex > 0
    ? bombsCells.push(cells[rowIndex][columnIndex - 1])
    : bombsCells.push(null);

  columnIndex < maxColumns - 1
    ? bombsCells.push(cells[rowIndex][columnIndex + 1])
    : bombsCells.push(null);

  rowIndex < maxRows - 1 && columnIndex > 0
    ? bombsCells.push(cells[rowIndex + 1][columnIndex - 1])
    : bombsCells.push(null);

  rowIndex < maxRows - 1
    ? bombsCells.push(cells[rowIndex + 1][columnIndex])
    : bombsCells.push(null);

  rowIndex < maxRows - 1 && columnIndex < maxColumns - 1
    ? bombsCells.push(cells[rowIndex + 1][columnIndex + 1])
    : bombsCells.push(null);

  let numberOfBombs = 0;

  bombsCells.forEach((bombCell) => {
    if (bombCell?.value === CellValue.bomb) {
      numberOfBombs += 1;
    }
  });

  return numberOfBombs;
};

export default getNumberForCells;
