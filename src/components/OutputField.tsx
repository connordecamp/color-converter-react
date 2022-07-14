import * as React from 'react';

interface IProps{
    label: string,
    value: string
}

class OutputField extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.onCopyClick = this.onCopyClick.bind(this);
    }

    onCopyClick(event) {
        navigator.clipboard.writeText(this.props.value);
        event.target
    }

    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input type="text" value={this.props.value} readOnly size={25}/>
                <button type="button" onClick={this.onCopyClick}>Copy</button>
            </div>
        );
    }
}

export default OutputField;