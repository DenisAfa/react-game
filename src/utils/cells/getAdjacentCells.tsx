import { CellType } from "./generateCells";

const getAdjacentCells = (
  cells: CellType[][],
  rowIndex: number,
  columnIndex: number,
  maxColumns: number,
  maxRows: number
): (CellType | null)[] => {
  const adjacentCells: (CellType | null)[] = [];

  rowIndex > 0 && columnIndex > 0
    ? adjacentCells.push(cells[rowIndex - 1][columnIndex - 1])
    : adjacentCells.push(null);
  rowIndex > 0
    ? adjacentCells.push(cells[rowIndex - 1][columnIndex])
    : adjacentCells.push(null);

  rowIndex > 0 && columnIndex < maxColumns - 1
    ? adjacentCells.push(cells[rowIndex - 1][columnIndex + 1])
    : adjacentCells.push(null);
  columnIndex > 0
    ? adjacentCells.push(cells[rowIndex][columnIndex - 1])
    : adjacentCells.push(null);

  columnIndex < maxColumns - 1
    ? adjacentCells.push(cells[rowIndex][columnIndex + 1])
    : adjacentCells.push(null);

  rowIndex < maxRows - 1 && columnIndex > 0
    ? adjacentCells.push(cells[rowIndex + 1][columnIndex - 1])
    : adjacentCells.push(null);

  rowIndex < maxRows - 1
    ? adjacentCells.push(cells[rowIndex + 1][columnIndex])
    : adjacentCells.push(null);

  rowIndex < maxRows - 1 && columnIndex < maxColumns - 1
    ? adjacentCells.push(cells[rowIndex + 1][columnIndex + 1])
    : adjacentCells.push(null);

  return adjacentCells;
};

export default getAdjacentCells;
