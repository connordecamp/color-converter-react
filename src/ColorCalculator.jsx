import * as React from "react";


import LabeledNumberInput from "./LabeledNumberInput";
import LabeledTextInput from "./LabeledTextInput";

// Used to remove characters not in base-16
const HEX_REGEX = /[^A-Fa-f0-9]/;

class ColorCalculator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <fieldset>
                    <legend>RGB</legend>
                    <LabeledNumberInput name="Red: " min="0" max="255" />
                    <LabeledNumberInput name="Blue: " min="0" max="255" />
                    <LabeledNumberInput name="Green: " min="0" max="255" />
                </fieldset>
                <fieldset>
                    <legend>Hex</legend>
                    <LabeledTextInput name="Hex String: #" maxLength="6" regex={HEX_REGEX} />
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