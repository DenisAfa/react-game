import React, { BaseSyntheticEvent } from "react";
import "./Settings.scss";
import Switcher from "./Switcher/Switcher";

interface SettingsProps {
  setMaxRowsCallback(maxRows: number): void;
  setMaxColumnsCallback(maxColumns: number): void;
  setNumbersOfBombsCallback(numbersOfBombs: number): void;
  setHasChangeLevelCallback(hasChangeLevel: boolean): void;
}

enum Levels {
  standard,
  expert,
  crazy,
}

const Settings: React.FC<SettingsProps> = ({
  setMaxRowsCallback,
  setMaxColumnsCallback,
  setNumbersOfBombsCallback,
  setHasChangeLevelCallback,
}) => {
  const setLevel = (e: BaseSyntheticEvent): void => {
    const level = Number(e.target.value);

    switch (level) {
      case Levels.standard:
        setMaxRowsCallback(9);
        setMaxColumnsCallback(9);
        setNumbersOfBombsCallback(10);
        break;
      case Levels.expert:
        setMaxRowsCallback(16);
        setMaxColumnsCallback(16);
        setNumbersOfBombsCallback(40);
        break;
      case Levels.crazy:
        setMaxRowsCallback(16);
        setMaxColumnsCallback(30);
        setNumbersOfBombsCallback(99);
        break;
      default:
        return;
    }
    setHasChangeLevelCallback(true);
  };

  console.log("Settings");
  return (
    <header className="game-header">
      <section className="settings">
        <div className="settings__levels levels">
          <select
            className="levels__list"
            name="levels"
            defaultValue={"DEFAULT"}
            onChange={setLevel}
          >
            <option value="DEFAULT" disabled>
              Levels
            </option>
            <option value="0">Standard</option>
            <option value="1">Expert</option>
            <option value="2">Crazy</option>
          </select>
        </div>
        <Switcher />
      </section>
    </header>
  );
};

export default React.memo(Settings);
