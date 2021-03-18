import React from 'react';


export default class Circle extends React.Component {

    render() {
        const squares = [];
        const pattern = this.props.num_shapes[0]
        for (let i = 0; i < this.props.num_shapes.length; i++) {
            squares.push(
                <rect
                    width="30"
                    height="30"
                    x={30 * i}
                    y={-30 * i}
                    fill='none'
                    stroke={this.props.color}>
                </rect>);
        }
        if (squares.length === 1) {
            return (
                <svg className="game-card circle" width="200" height="200" viewBox="-35 -35 100 100">
                    {squares}
                </svg>
            );
        } else if (squares.length === 2) {
            return (
                <svg className="game-card circle" width="200" height="200" viewBox="-20 -50 100 100">
                    {squares}
                </svg>
            );
        } else {
            return (
                <svg className="game-card circle" width="200" height="200" viewBox="-5 -65 100 100">
                    {squares}
                </svg>
            );
        }
    }
}