import { CellState, CellType, CellValue } from "./generateCells";
import getAdjacentCells from "./getAdjacentCells";

enum sideAdjacentCells {
  topLeftCell,
  topCell,
  topRightCell,
  leftCell,
  rightCell,
  bottomLeftCell,
  bottomCell,
  bottomRightCell,
}

const openMultipleCells = (
  cells: CellType[][],
  row: number,
  column: number,
  maxRows: number,
  maxColumns: number
): CellType[][] => {
  const currentCell = cells[row][column];

  if (
    currentCell.state === CellState.visible ||
    currentCell.state === CellState.flagged
  ) {
    return cells;
  }

  let newCells = cells.slice();
  newCells[row][column].state = CellState.visible;

  const currentAdjacentCells = getAdjacentCells(
    cells,
    row,
    column,
    maxColumns,
    maxRows
  );
  currentAdjacentCells.forEach((adjacentCell, sideAdjacentCell) => {
    if (
      adjacentCell?.state === CellState.open &&
      adjacentCell.value !== CellValue.bomb
    ) {
      switch (sideAdjacentCell) {
        case sideAdjacentCells.topLeftCell:
          if (adjacentCell.value === CellValue.none) {
            newCells = openMultipleCells(
              newCells,
              row - 1,
              column - 1,
              maxRows,
              maxColumns
            );
          } else {
            newCells[row - 1][column - 1].state = CellState.visible;
          }
          break;
        case sideAdjacentCells.topCell:
          if (adjacentCell.value === CellValue.none) {
            newCells = openMultipleCells(
              newCells,
              row - 1,
              column,
              maxRows,
              maxColumns
            );
          } else {
            newCells[row - 1][column].state = CellState.visible;
          }
          break;
        case sideAdjacentCells.topRightCell:
          if (adjacentCell.value === CellValue.none) {
            newCells = openMultipleCells(
              newCells,
              row - 1,
              column + 1,
              maxRows,
              maxColumns
            );
          } else {
            newCells[row - 1][column + 1].state = CellState.visible;
          }
          break;
        case sideAdjacentCells.leftCell:
          if (adjacentCell.value === CellValue.none) {
            newCells = openMultipleCells(
              newCells,
              row,
              column - 1,
              maxRows,
              maxColumns
            );
          } else {
            newCells[row][column - 1].state = CellState.visible;
          }
          break;
        case sideAdjacentCells.rightCell:
          if (adjacentCell.value === CellValue.none) {
            newCells = openMultipleCells(
              newCells,
              row,
              column + 1,
              maxRows,
              maxColumns
            );
          } else {
            newCells[row][column + 1].state = CellState.visible;
          }
          break;
        case sideAdjacentCells.bottomLeftCell:
          if (adjacentCell.value === CellValue.none) {
            newCells = openMultipleCells(
              newCells,
              row + 1,
              column - 1,
              maxRows,
              maxColumns
            );
          } else {
            newCells[row + 1][column - 1].state = CellState.visible;
          }
          break;
        case sideAdjacentCells.bottomCell:
          if (adjacentCell.value === CellValue.none) {
            newCells = openMultipleCells(
              newCells,
              row + 1,
              column,
              maxRows,
              maxColumns
            );
          } else {
            newCells[row + 1][column].state = CellState.visible;
          }
          break;
        case sideAdjacentCells.bottomRightCell:
          if (adjacentCell.value === CellValue.none) {
            newCells = openMultipleCells(
              newCells,
              row + 1,
              column + 1,
              maxRows,
              maxColumns
            );
          } else {
            newCells[row + 1][column + 1].state = CellState.visible;
          }
          break;
      }
    }
    return newCells;
  });

  return newCells;
};

export default openMultipleCells;
