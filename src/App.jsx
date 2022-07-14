import logo from "./logo.svg";
import * as React from "react";
import rgbToHex from "./utils/rgbToHex";
import './App.css';

function App() {
  //console.log(rgbToHex(10, 100, 10));
  return (
    <div className="container">
      <div className="top-input">
        <h1>Enter RGB</h1>
        <input className="rgbInput" placeholder="Example: 100,200,255" />
      </div>
    </div>
  );
}

export default App;
