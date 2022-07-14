import * as React from 'react';

interface IProps{
    value: string
}

class CopyButton extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <button>this.props.value</button>
        );
    }
}

export default CopyButton;