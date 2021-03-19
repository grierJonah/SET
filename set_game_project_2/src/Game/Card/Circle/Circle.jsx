import React from 'react';


export default class Circle extends React.Component {

    render() {
        const shapes = [];
        const pattern = this.props.num_shapes[0]
        for (let i = 0; i < this.props.num_shapes.length; i++) {
            if (pattern === "dashed") {
                shapes.push(
                    <svg>
                        <defs>
                            <pattern id={"dashed_" + this.props.card_id} patternUnits="userSpaceOnUse" width="12.5" height="12.5" patternTransform="rotate(90)">
                                <line x1="0" y="0" x2="14" y2="15" stroke={this.props.color} strokeWidth="2" />
                            </pattern>
                        </defs>
                        <circle
                            cx={30 * i}
                            cy={-30 * i}
                            r="20"
                            fill={"url(#dashed_" + this.props.card_id + ")"}
                            stroke={this.props.color}>
                        </circle>
                    </svg>
                );
            } else if (pattern === "solid") {
                shapes.push(
                    <circle
                        cx={30 * i}
                        cy={-30 * i}
                        r="20"
                        fill={this.props.color}
                        stroke={this.props.color}>
                    </circle>
                );
            } else {
                shapes.push(
                    <circle
                        cx={30 * i}
                        cy={-30 * i}
                        r="20"
                        fill='none'
                        stroke={this.props.color}>
                    </circle>
                );
            }
        }

        if (shapes[0].type === "svg") {
            if (shapes.length === 1) {
                return (
                    <svg className="game-card circle" width="200" height="200" viewBox="-50 -50 100 100">
                        {shapes[0].props.children}
                    </svg>
                );
            } else if (shapes.length === 2) {
                return (
                    <svg className="game-card circle" width="200" height="200" viewBox="-35 -65 100 100">
                        {shapes[0].props.children}
                        {shapes[1].props.children}
                    </svg>
                );
            } else {
                return (
                    <svg className="game-card circle" width="200" height="200" viewBox="-20 -80 100 100">
                        {shapes[0].props.children}
                        {shapes[1].props.children}
                        {shapes[2].props.children}
                    </svg>
                );
            }
        } else {
            if (shapes.length === 1) {
                return (
                    <svg className="game-card circle" width="200" height="200" viewBox="-50 -50 100 100">
                        {shapes}
                    </svg>
                );
            } else if (shapes.length === 2) {
                return (
                    <svg className="game-card circle" width="200" height="200" viewBox="-35 -65 100 100">
                        {shapes}
                    </svg>
                );
            } else {
                return (
                    <svg className="game-card circle" width="200" height="200" viewBox="-20 -80 100 100">
                        {shapes}
                    </svg>
                );
            }
        }
    }
}