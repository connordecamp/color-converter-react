import * as React from "react"

function clampInputToRange(value, min, max) {
    if(value > max)
        return max;
    
    if(value < min)
        return min;
    
    return value;
}

class LabeledNumberInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange.bind(this);
    }

    handleOnChange(evnt) {
        let clampedValue = clampInputToRange(evnt.target.value, this.props.min, this.props.max);
        evnt.target.value = clampedValue;
    }

    render() {

        return (
            <div>
                <label>{this.props.name}: </label>
                <input 
                    type="number" 
                    min={this.props.min} 
                    max={this.props.max} 
                    onChange={this.handleOnChange} />
            </div>
        )
    }
}

export default LabeledNumberInput;