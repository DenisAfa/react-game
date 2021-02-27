import React, { useEffect, useState } from "react";
import "./AppContainer.scss";
import Field from "./Field/Field";
import { Face } from "./Info/FaceInfo/FaceInfo";
import Info from "./Info/Info";

const AppContainer: React.FC = () => {
  const [face, setFace] = useState<Face>(Face.smile);
  const [isLive, setLive] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    if (isLive) {
      let timer = setInterval(() => {
        setTime(time + 1);
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [isLive, time]);

  const handleMouseDown = (): void => {
    setFace(Face.oops);
  };
  const handleMouseUp = (): void => {
    setFace(Face.smile);
  };
  const handleCellClick = (row: number, column: number) => {
    if (!isLive) {
      setLive(true);
    }
  };
  return (
    <div className="wrapper">
      <Info time={time} face={face} />
      <Field
        handleCellClick={handleCellClick}
        handleMouseDown={handleMouseDown}
        handleMouseUp={handleMouseUp}
      />
    </div>
  );
};

export default AppContainer;
