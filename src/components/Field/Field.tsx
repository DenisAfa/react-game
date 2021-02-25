import React, { useState } from "react";
import generateCells from "../../utils/generateCells";
import Cell from "./Cell/Cell";
import "./Field.scss";

const Field: React.FC = (props) => {
  const [cells, setCells] = useState(generateCells());
  const renderCells = (): React.ReactNode => {
    return cells.map((row, rowIndex) =>
      row.map((cell, columnIndex) => (
        <Cell key={`${rowIndex}+${columnIndex}`} />
      ))
    );
  };
  return <div className="game-field">{renderCells()}</div>;
};

export default Field;
