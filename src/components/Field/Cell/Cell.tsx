import React from "react";
import "./Cell.scss";
import { CellState, CellValue } from "../../../utils/cells/generateCells";
import CellImage from "./CellImage/CellImage";
import bomb from "../../../assets/images/bomb.png";
import flag from "../../../assets/images/flag.png";

interface CellProps {
  state: CellState;
  value: CellValue;
  column: number;
  row: number;
}
const Cell: React.FC<CellProps> = ({ value, state, row, column }) => {
  const renderContent = (): React.ReactNode => {
    switch (state) {
      case CellState.visible:
        if (value === CellValue.bomb) {
          return <CellImage image={bomb} />;
        } else if (value === CellValue.none) {
          return null;
        }
        return value;
      case CellState.flagged:
        return <CellImage image={flag} />;
      default:
        return null;
    }
  };
  return (
    <div
      className={`game-field__cell cell ${
        state === CellState.visible ? "game-field__cell_visible" : ""
      } game-field__cell_value-${value}`}
    >
      {renderContent()}
    </div>
  );
};

export default Cell;
