import React from "react";
import "./Footer.scss";
import logo from "../../assets/icons/rs_school_js.svg";

const Footer: React.FC = () => {
  console.log("footer");
  return (
    <footer className="game-footer">
      <div className="info">
        <a
          className="info__creator"
          href="https://github.com/DenisAfa"
          target="_blank"
          rel="noreferrer"
        >
          Denis Afanasev
        </a>
        <a href="https://rs.school/" target="_blank" rel="noreferrer">
          <img src={logo} alt="logo" className="info__logo" />
        </a>

        <span className="info__year">2021</span>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
