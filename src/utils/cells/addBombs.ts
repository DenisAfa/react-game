import { Cell, CellValue } from "./generateCells";

const addBombs = (
  cells: Cell[][],
  maxRows: number,
  maxColumns: number,
  numberOfBombs: number
): Cell[][] => {
  let bombsPlaced: number = 0;
  while (bombsPlaced < numberOfBombs) {
    const randomRow: number = Math.floor(Math.random() * maxRows);
    const randomColumn: number = Math.floor(Math.random() * maxColumns);
    const currentCell: Cell = cells[randomRow][randomColumn];
    if (currentCell.value !== CellValue.bomb) {
      cells = cells.map((row, rowIndex) =>
        row.map((cell, columnIndex) => {
          if (randomRow === rowIndex && randomColumn === columnIndex) {
            return {
              ...cell,
              value: CellValue.bomb,
            };
          }
          return cell;
        })
      );
      bombsPlaced += 1;
    }
  }
  return cells;
};

export default addBombs;
