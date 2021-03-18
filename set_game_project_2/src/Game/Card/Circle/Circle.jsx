import React from 'react';


export default class Circle extends React.Component {

    render() {
        const shapes = [];
        const pattern = this.props.num_shapes[0]
        console.log(this.props.num_shapes.length);
        for (let i = 0; i < this.props.num_shapes.length; i++) {
            shapes.push(<circle
                cx={30 * i}
                cy={-30 * i}
                r="20"
                fill={pattern}
                stroke="black">
            </circle>);
        }

        if (shapes.length == 1) {
            return (
                <svg className="game-card circle" width="200" height="200" viewBox="-50 -50 100 100">
                    {shapes}
                </svg>
            );
        } else if (shapes.length == 2) {
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