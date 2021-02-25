import React from "react";
import "./App.scss";
import Field from "./components/Field/Field";
import Info from "./components/Info/Info";

const App: React.FC = () => {
  return (
    <section className="game">
      <div className="wrapper">
        <Info />
        <Field />
      </div>
    </section>
  );
};

export default App;
