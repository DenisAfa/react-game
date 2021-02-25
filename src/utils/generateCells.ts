const MAX_ROWS = 9;
const MAX_COLUMNS = 9;

enum CellValue {
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

enum CellState {
  open,
  visible,
  flagged,
}

type Cell = {
  value: CellValue;
  state: CellState;
};

const generateCells = (): Cell[][] => {
  const cells: Cell[][] = [];

  for (let i = 0; i < MAX_ROWS; i += 1) {
    cells.push([]);
    for (let j = 0; j < MAX_COLUMNS; j += 1) {
      cells[i].push({
        value: CellValue.none,
        state: CellState.open,
      });
    }
  }

  return cells;
};

export default generateCells;
