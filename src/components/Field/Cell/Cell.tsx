import React from "react";
import "./Cell.scss";
import { CellState, CellValue } from "../../../utils/cells/generateCells";

interface CellProps {
  state: CellState;
  value: CellValue;
  column: number;
  row: number;
  isRed?: boolean;
}
const Cell: React.FC<CellProps> = ({ value, state, row, column, isRed }) => {
  const renderContent = (): React.ReactNode => {
    switch (state) {
      case CellState.visible:
        if (value === CellValue.bomb) {
          return <span>🧨</span>;
        } else if (value === CellValue.none) {
          return null;
        }
        return value;
      case CellState.flagged:
        return (
          <span data-row={`${row}`} data-col={`${column}`}>
            🏴‍☠️
          </span>
        );
      default:
        return null;
    }
  };
  return (
    <div
      data-row={`${row}`}
      data-col={`${column}`}
      className={`game-field__cell cell ${
        state === CellState.visible ? "game-field__cell_visible" : ""
      } game-field__cell_value-${value} ${isRed ? "game-field__cell_red" : ""}`}
    >
      {renderContent()}
    </div>
  );
};

export default React.memo(Cell);
