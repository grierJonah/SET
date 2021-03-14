import React from 'react';
import './Card.css'

export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.shape.color,
            shape: props.shape.shape,
            number: props.shape.number,
            pattern: props.shape.pattern,
        }

    }

    // TODO: PASS ID through PROPS
    render() {
        console.log(this.state.shape);
        if (this.state.shape === "circle") {
            return (
                <svg className="circle" width="200" height="175">
                    <circle cx="100" cy="60" r="50" strokeWidth="2" stroke="black" fill={this.state.color}></circle>
                </svg>
            );
        } else if (this.state.shape === "square") {
            return (
                <svg className="square" width="200" height="175" viewBox="0 0 100 100">
                    <rect width="50" height="50" x="25" y="10" fill={this.state.color} stroke="black" strokeWidth="1" />
                </svg>
            );
        } else {
            return (
                <svg className="triangle" width="200" height="165" >
                    <polygon points="100,10 50,100 150,100" fill={this.state.color} stroke="black" strokeWidth="2" />
                </svg>
            );
        }
    }
}