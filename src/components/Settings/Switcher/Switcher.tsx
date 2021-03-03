import React from "react";
import "./Switcher.scss";

const Switcher: React.FC = () => {
  return (
    <div className="settings__block block">
      <span className="block__name">Audio</span>
      <input className="block__switcher" type="checkbox" />
    </div>
  );
};

export default Switcher;
