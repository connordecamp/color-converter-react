import React, {useState} from 'react';
import rgbToHex from "./utils/rgbToHex";
import rgbToHsl from './utils/rgbToHsl';
import rgbToHsv from './utils/rgbToHsv';
import rgbToHwb from './utils/rgbToHwb';
import rgbToCmyk from './utils/rgbToCmyk';
import './App.css';


function tryConvert(value: string, convertFunc: Function) {
  const splitValues: string[] = value.split(",");

  if(splitValues.length !== 3)
    return '';

  console.log(splitValues);

  for(let val of splitValues) {
    if(val.length === 0)
      return '';
  }

  const rgbArray: number[] = splitValues.map((x) => parseInt(x));
  const hexString: string = convertFunc(rgbArray[0], rgbArray[1], rgbArray[2]);
  
  console.log(hexString);

  return hexString;
}

function setBackgroundColor(hexString) {
  document.documentElement.style.setProperty('--current-bg-color', hexString);
}

const App = () => {
  //console.log(rgbToHex(10, 100, 10));
  const [rgb, setRgb] = useState('65, 105, 225');
  const hex = tryConvert(rgb, rgbToHex);
  const hsl = tryConvert(rgb, rgbToHsl);
  const hsv = tryConvert(rgb, rgbToHsv);
  const hwb = tryConvert(rgb, rgbToHwb);
  const cmyk = tryConvert(rgb, rgbToCmyk);
  if(hex)
    setBackgroundColor(hex);

  return (
    <div className="container">
      <div className="rgb-input-container">
        <h1>Enter RGB</h1>
        <input 
          className="rgbInput" 
          placeholder="Example: 65,105,225" 
          onChange={(event) => {
            setRgb(event.target.value);
          }
          }/>
      </div>
      <div className="results">
        <h3>Converted Colors</h3>
        <form>
          <div>
            <label>Hex: </label>
            <input value={hex} readOnly />
          </div>
          <div>
            <label>HSL: </label>
            <input value={hsl} readOnly />
          </div>
          <div>
            <label>HSV: </label>
            <input value={hsv} readOnly />
          </div>
          <div>
            <label>HWB: </label>
            <input type="text" value={hwb} readOnly />
          </div>
          <div>
            <label htmlFor="">CMYK: </label>
            <input type="text" value={cmyk} readOnly/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
