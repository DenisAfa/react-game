import addBombs from "./addBombs";
import getNumberForCells from "./getNumberForCells";

const MAX_ROWS = 9;
const MAX_COLUMNS = 9;
const NUMBER_OF_BOMBS = 10;

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
};

const generateCells = (): CellType[][] => {
  let cells: CellType[][] = [];
  let id = 1;
  for (let i = 0; i < MAX_ROWS; i += 1) {
    cells.push([]);
    for (let j = 0; j < MAX_COLUMNS; j += 1) {
      cells[i].push({
        id: id,
        value: CellValue.none,
        state: CellState.open,
      });
      id += 1;
    }
  }
  cells = addBombs(cells, MAX_ROWS, MAX_COLUMNS, NUMBER_OF_BOMBS);
  cells = getNumberForCells(cells, MAX_ROWS, MAX_COLUMNS);

  return cells;
};

export default generateCells;
