import addBombs from "./addBombs";
import getNumberForCells from "./getNumberForCells";

export enum CellValue {
  none,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  bomb,
}

export enum CellState {
  open,
  visible,
  flagged,
}

export type CellType = {
  id: number;
  value: CellValue;
  state: CellState;
  isRed?: boolean;
};

const generateCells = (
  maxRows: number,
  maxColumns: number,
  numbersOfBombs: number
): CellType[][] => {
  let cells: CellType[][] = [];
  let id = 1;
  for (let i = 0; i < maxRows; i += 1) {
    cells.push([]);
    for (let j = 0; j < maxColumns; j += 1) {
      cells[i].push({
        id: id,
        value: CellValue.none,
        state: CellState.open,
      });
      id += 1;
    }
  }
  cells = addBombs(cells, maxRows, maxColumns, numbersOfBombs);
  cells = getNumberForCells(cells, maxRows, maxColumns);

  return cells;
};

export default generateCells;
