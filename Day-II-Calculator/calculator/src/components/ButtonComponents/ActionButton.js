import React from 'react';
import './Button.css';

class ActionButton extends React.Component {
    constructor () {
        super()
        this.state={}
    }

    render(props) {
        return (
            <button 
            className={this.props.buttonStyle}
            onClick={this.props.onClick}
            data-size={this.props.size}
            data-value={this.props.value}
            >
            {this.props.text}
            </button>
        )
    }
}


export default ActionButton;


// const ActionButton = (props) => {
//     return (
//         <button className={props.buttonStyle}>{props.text}</button>
//     )
// };
