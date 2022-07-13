import * as React from "react";

import LabeledNumberInput from "./LabeledNumberInput";
import LabeledTextInput from "./LabeledTextInput";

// Used to remove characters not in base-16
const HEX_REGEX = /[^A-Fa-f0-9]/;

const RGB = "RGB";
const HEX = "Hex";
const HSL = "HSL";

function rgbToHex(red, green, blue) {
    if(red < 0 || red > 255)
        return '';

    if(green < 0 || green > 255)
        return '';

    if(blue < 0 || blue > 255)
        return '';
}

class ColorCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            values: [0, 0, 0],
            type: RGB
        };

        this.handleRgbChange.bind(this.handleRgbChange);
        this.handleHexChange.bind(this.handleHexChange);
        this.handleHslChange.bind(this.handleHslChange);
    }

    handleRgbChange(r, g, b) {
        this.setState({
            values: [r, g, b],
            type: RGB
        });
    }

    handleHexChange(h) {
        this.setState({
            values: [h],
            type: HEX
        });
    }

    handleHslChange(h, s, l) {
        this.setState({
            values: [h, s, l],
            type: HSL
        });
    }

    render() {

        let rgbRed = '';
        let rgbGreen = '';
        let rgbBlue = '';

        let hexString = '';

        let hslHue = '';
        let hslSaturation = '';
        let hslLightness = ''

        const inputTypeEdited = this.state.type;

        switch (inputTypeEdited) {
            case RGB:


                break;
        }

        return (
            <div>
                <fieldset>
                    <legend>RGB</legend>
                    <LabeledNumberInput name="Red: " min="0" max="255" />
                    <LabeledNumberInput name="Green: " min="0" max="255" />
                    <LabeledNumberInput name="Blue: " min="0" max="255" />
                </fieldset>
                <fieldset>
                    <legend>Hex</legend>
                    <LabeledTextInput name="Red: #" maxLength="2" regex={HEX_REGEX} />
                    <LabeledTextInput name="Green: #" maxLength="2" regex={HEX_REGEX} />
                    <LabeledTextInput name="Blue: #" maxLength="2" regex={HEX_REGEX} />
                </fieldset>
                <fieldset>
                    <legend>HSL</legend>
                    <LabeledNumberInput name="Hue: " min="0" max="360" />
                    <LabeledNumberInput name="Saturation: " min="0" max="100" />
                    <LabeledNumberInput name="Lightness: " min="0" max="100" />
                </fieldset>
            </div>
        );
    }
}

export default ColorCalculator;