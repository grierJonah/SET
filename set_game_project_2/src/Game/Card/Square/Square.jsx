import React from 'react';


export default class Circle extends React.Component {

    render() {
        const squares = [];
        const pattern = this.props.num_shapes[0]
        for (let i = 0; i < this.props.num_shapes.length; i++) {
            if (pattern === "dashed") {
                squares.push(
                    <svg>
                        <defs>
                            <pattern id={"dashed_" + this.props.card_id} patternUnits="userSpaceOnUse" width="12.5" height="12.5" patternTransform="rotate(90)">
                                <line x1="0" y="0" x2="12" y2="14" stroke={this.props.color} strokeWidth="2" />
                            </pattern>
                        </defs>
                        <rect
                            width="30"
                            height="30"
                            x={30 * i}
                            y={-30 * i}
                            fill={"url(#dashed_" + this.props.card_id + ")"}
                            stroke={this.props.color}>
                        </rect>
                    </svg>
                );
            } else if (pattern === "solid") {
                squares.push(
                    <rect
                        width="30"
                        height="30"
                        x={30 * i}
                        y={-30 * i}
                        fill={this.props.color}
                        stroke={this.props.color}>
                    </rect>
                );
            } else {
                squares.push(
                    <rect
                        width="30"
                        height="30"
                        x={30 * i}
                        y={-30 * i}
                        fill='none'
                        stroke={this.props.color}>
                    </rect>
                );
            }

        }
        if (squares[0].type === "svg") {
            if (squares.length === 1) {
                return (
                    <svg className="game-card square" width="200" height="200" viewBox="-35 -35 100 100">
                        {squares[0].props.children}
                    </svg>
                );
            } else if (squares.length === 2) {
                return (
                    <svg className="game-card square" width="200" height="200" viewBox="-20 -50 100 100">
                        {squares[0].props.children}
                        {squares[1].props.children}
                    </svg>
                );
            } else {
                return (
                    <svg className="game-card square" width="200" height="200" viewBox="-5 -65 100 100">
                        {squares[0].props.children}
                        {squares[1].props.children}
                        {squares[2].props.children}
                    </svg>
                );
            }
        } else {
            if (squares.length === 1) {
                return (
                    <svg className="game-card square" width="200" height="200" viewBox="-35 -35 100 100">
                        {squares}
                    </svg>
                );
            } else if (squares.length === 2) {
                return (
                    <svg className="game-card square" width="200" height="200" viewBox="-20 -50 100 100">
                        {squares}
                    </svg>
                );
            } else {
                return (
                    <svg className="game-card square" width="200" height="200" viewBox="-5 -65 100 100">
                        {squares}
                    </svg>
                );
            }
        }
    }
}