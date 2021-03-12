import React from 'react';
import './Card.css'

export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            shape: props.shape,
            number: props.number,
            pattern: props.pattern,
        }

    }

    render() {
        return (
            <span className="game-card">{this.props.num}</span>
        );
    }


}