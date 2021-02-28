import React from "react";
import "./Cell.scss";
import { CellState, CellValue } from "../../../utils/cells/generateCells";

interface CellProps {
  state: CellState;
  value: CellValue;
  column: number;
  row: number;
  isRed?: boolean;
  handleCellClick(row: number, column: number): void;
  handleCellContext(row: number, column: number): void;
}
const Cell: React.FC<CellProps> = ({
  value,
  state,
  row,
  column,
  isRed,
  handleCellClick,
  handleCellContext,
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
      } game-field__cell_value-${value} ${isRed ? "game-field__cell_red" : ""}`}
      onClick={() => handleCellClick(row, column)}
      onContextMenu={(e) => {
        e.preventDefault();
        handleCellContext(row, column);
      }}
    >
      {renderContent()}
    </div>
  );
};

export default React.memo(Cell);
