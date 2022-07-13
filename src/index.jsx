import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/* Components
 * - Labels combined with number input, min/max values
 * - Fieldsets with list of labels?
 * - Calculator container to hold state
 */ 

function StaticCalculator(props) {
  return (
    <div>
      <fieldset>
        <legend>RGB</legend>
        <label>Red: </label>
        <input type="number" min="1" max="255" />
        <label>Blue: </label>
        <input type="number" min="1" max="255" />
        <label>Green: </label>
        <input type="number" min="1" max="255" />
      </fieldset>
      <fieldset>
        <legend>Hex</legend>
        <label>#</label>
        <input type="text" />
      </fieldset>
      <fieldset>
        <legend>HSL</legend>
        <label>Hue: </label>
        <input type="number" min="0" max="100" />
        <label>Saturation: </label>
        <input type="number" min="0" max="100" />
        <label>Lightness: </label>
        <input type="number" min="0" max="100" />
      </fieldset>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
