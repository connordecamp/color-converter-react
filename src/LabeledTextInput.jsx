import * as React from "react"


function validateInput(value, regex) {
    let result = value;
    console.log(regex);
    result = result.replace(regex, "");

    return result;
}

class LabeledTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let val = e.target.value;
        e.target.value = validateInput(val, this.props.regex);
    }

    render() {

        return (
            <div>
                <label>{this.props.name}</label>
                <input 
                    type="text" 
                    onChange={this.handleChange}
                    maxLength={this.props.maxLength} />
            </div>
        )
    }
}

export default LabeledTextInput;