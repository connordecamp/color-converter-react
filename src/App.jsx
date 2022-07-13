import logo from "./logo.svg";
import * as React from "react";
import "./App.css";
import ColorCalculator from "./ColorCalculator";

const HEX_REGEX = /[^A-Fa-f0-9]/;

function App() {
  return (
    <ColorCalculator />
  );
}

export default App;
