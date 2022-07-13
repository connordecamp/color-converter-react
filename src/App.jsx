import logo from "./logo.svg";
import * as React from "react";
import "./App.css";
import LabeledNumberInput from "./LabeledNumberInput.jsx";


function App() {
  return (
    <div>
      <fieldset>
        <legend>RGB</legend>
        <LabeledNumberInput name="Red" min="0" max="255" />
        <LabeledNumberInput name="Blue" min="0" max="255" />
        <LabeledNumberInput name="Green" min="0" max="255" />
      </fieldset>
      <fieldset>
        <legend>Hex</legend>
      </fieldset>
      <fieldset>
        <legend>HSL</legend>
        <LabeledNumberInput name="Hue" min="0" max="356" />
        <LabeledNumberInput name="Saturation" min="0" max="100" />
        <LabeledNumberInput name="Lightness" min="0" max="100" />
      </fieldset>
    </div>
  );
}

export default App;
