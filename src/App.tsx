import React, {useState} from 'react';
import rgbToHex from "./utils/rgbToHex";
import './App.css';


function tryConvert(value: string) {
  const splitValues: string[] = value.split(",");

  if(splitValues.length !== 3)
    return '';

  console.log(splitValues);
  

  for(let val of splitValues) {
    if(val.length === 0)
      return '';
  }

  const rgbArray: number[] = splitValues.map((x) => parseInt(x));
  const hexString: string = rgbToHex(rgbArray[0], rgbArray[1], rgbArray[2]);
  
  console.log(hexString);

  return hexString;
}

function setBackgroundColor(hexString) {
  document.documentElement.style.setProperty('--current-bg-color', hexString);
}

const App = () => {
  //console.log(rgbToHex(10, 100, 10));
  const [rgb, setRgb] = useState('0,0,0');
  const hex = tryConvert(rgb);

  return (
    <div className="container">
      <div className="rgb-input-container">
        <h1>Enter RGB</h1>
        <input 
          className="rgbInput" 
          placeholder="Example: 100,200,255" 
          onChange={(event) => {
            setRgb(event.target.value);
            setBackgroundColor(`rgb(${rgb})`);
          }
          }/>
      </div>
      <div className="results">
        <h3>Converted Colors</h3>
        <h6>
          Hex Value: <input value={hex} readOnly/>
        </h6>
      </div>
    </div>
  );
}

export default App;
