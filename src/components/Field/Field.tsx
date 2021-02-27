import React, { useState } from "react";
import generateCells from "../../utils/cells/generateCells";
import Cell from "./Cell/Cell";
import "./Field.scss";

const Field: React.FC = (props) => {
  const [cells, setCells] = useState(generateCells());
  console.log(cells);
  const cellElements = cells.map((row, rowIndex) =>
    row.map((cell, columnIndex) => (
      <Cell
        key={`${cell.id}`}
        value={cell.value}
        state={cell.state}
        row={rowIndex}
        column={columnIndex}
      />
    ))
  );

  return <div className="game-field">{cellElements}</div>;
};

export default Field;
