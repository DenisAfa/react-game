import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  console.log("footer");
  return <footer className="game-footer"></footer>;
};

export default React.memo(Footer);
