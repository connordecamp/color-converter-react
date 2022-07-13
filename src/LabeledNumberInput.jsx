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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const minValue = parseInt(this.props.min);
        const maxValue = parseInt(this.props.max);
        let clampedValue = clampInputToRange(parseInt(e.target.value), minValue, maxValue);
        e.target.value = clampedValue;
    }

    render() {

        return (
            <div>
                <label>{this.props.name}</label>
                <input 
                    type="number" 
                    min={this.props.min} 
                    max={this.props.max} 
                    onChange={this.handleChange} />
            </div>
        )
    }
}

export default LabeledNumberInput;