import logo from "./logo.svg";
import * as React from "react";
import "./App.css";
import LabeledNumberInput from "./LabeledNumberInput.jsx";


function App() {
  return (
    <div>
      <fieldset>
        <LabeledNumberInput name="Red" min="0" max="255" />
      </fieldset>
    </div>
  );
}

export default App;
