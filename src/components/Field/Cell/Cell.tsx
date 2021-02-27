import React from "react";
import "./Cell.scss";
import { CellState, CellValue } from "../../../utils/cells/generateCells";

interface CellProps {
  state: CellState;
  value: CellValue;
  column: number;
  row: number;
  handleCellClick(row: number, col: number): void;
}
const Cell: React.FC<CellProps> = ({
  value,
  state,
  row,
  column,
  handleCellClick,
}) => {
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
        return <span>🏴‍☠️</span>;
      default:
        return null;
    }
  };
  return (
    <div
      className={`game-field__cell cell ${
        state === CellState.visible ? "game-field__cell_visible" : ""
      } game-field__cell_value-${value}`}
      onClick={() => handleCellClick(row, column)}
    >
      {renderContent()}
    </div>
  );
};

export default Cell;
