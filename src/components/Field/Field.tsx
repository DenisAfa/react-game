import React, { useState } from "react";
import generateCells, { CellType } from "../../utils/cells/generateCells";
import Cell from "./Cell/Cell";
import "./Field.scss";

interface FieldProps {
  handleMouseDown(): void;
  handleMouseUp(): void;
  handleCellClick(row: number, col: number): void;
}

const Field: React.FC<FieldProps> = ({
  handleMouseDown,
  handleMouseUp,
  handleCellClick,
}) => {
  const [cells, setCells] = useState<CellType[][]>(generateCells());

  const cellElements = cells.map((row, rowIndex) =>
    row.map((cell, columnIndex) => (
      <Cell
        key={`${cell.id}`}
        value={cell.value}
        state={cell.state}
        row={rowIndex}
        column={columnIndex}
        handleCellClick={handleCellClick}
      />
    ))
  );

  return (
    <div
      className="game-field"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {cellElements}
    </div>
  );
};

export default Field;
