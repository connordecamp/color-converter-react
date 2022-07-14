import React, {useState} from 'react';
import convertRgb from './utils/convertRgb';
import './App.css';
import OutputField from './components/OutputField';

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
  const hex = tryConvert(rgb, convertRgb.toHex);
  const hsl = tryConvert(rgb, convertRgb.toHsl);
  const hsv = tryConvert(rgb, convertRgb.toHsv);
  const hwb = tryConvert(rgb, convertRgb.toHwb);
  const cmyk = tryConvert(rgb, convertRgb.toCmyk);

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
          <OutputField label="Hex: " value={hex} />
          <OutputField label="HSL: " value={hsl} />
          <OutputField label="HSV: " value={hsv} />
          <OutputField label="HWB: " value={hwb} />
          <OutputField label="CMYK: " value={cmyk} />
        </form>
      </div>
    </div>
  );
}

export default App;
