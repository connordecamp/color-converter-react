import logo from "./logo.svg";
import * as React from "react";
import rgbToHex from "./utils/rgbToHex";

function App() {
  //console.log(rgbToHex(10, 100, 10));
  return (
    <div className="container">
      <h1>Hello, World!</h1>
      <h2>{rgbToHex(100,200,255)}</h2>
    </div>
  );
}

export default App;
