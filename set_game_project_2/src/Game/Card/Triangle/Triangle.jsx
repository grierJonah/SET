import React from 'react';


export default class Circle extends React.Component {

    render() {
        const triangles = [];
        const pattern = this.props.num_shapes[0];
        const triangle_placement = [
            "50,80 24,120 74,120",
            "100,45 75,90 125,90",
            "150,5 125,45 175,45"
        ];
        for (let i = 0; i < this.props.num_shapes.length; i++) {
            if (pattern === "dashed") {
                triangles.push(
                    <svg>
                        <defs>
                            <pattern id={"dashed_" + this.props.card_id} patternUnits="userSpaceOnUse" width="12.5" height="12.5" patternTransform="rotate(90)">
                                <line x1="0" y="0" x2="15" y2="14" stroke={this.props.color} strokeWidth="2" />
                            </pattern>
                        </defs>
                        <polygon
                            points={triangle_placement[i]}
                            fill={"url(#dashed_" + this.props.card_id + ")"}
                            stroke={this.props.color} >
                        </polygon >
                    </svg>
                );
            } else if (pattern === "solid") {
                triangles.push(
                    <polygon
                        points={triangle_placement[i]}
                        fill={this.props.color}
                        stroke={this.props.color} >
                    </polygon >
                );
            } else {
                triangles.push(
                    <polygon
                        points={triangle_placement[i]}
                        fill='none'
                        stroke={this.props.color} >
                    </polygon >
                );
            }
        }
        if (triangles[0].type === "svg") {
            if (triangles.length === 1) {
                return (
                    <svg className="game-card triangle" width="200" height="200" viewBox="0 50 100 100">
                        {triangles[0].props.children}
                    </svg>
                );
            } else if (triangles.length === 2) {
                return (
                    <svg className="game-card triangle" width="200" height="200" viewBox="25 35 100 100">
                        {triangles[0].props.children}
                        {triangles[1].props.children}
                    </svg>
                );
            } else {
                return (
                    <svg className="game-card triangle" width="200" height="200" viewBox="40 0 125 125">
                        {triangles[0].props.children}
                        {triangles[1].props.children}
                        {triangles[2].props.children}
                    </svg>
                );
            }
        } else {
            if (triangles.length === 1) {
                return (
                    <svg className="game-card triangle" width="200" height="200" viewBox="0 50 100 100">
                        {triangles}
                    </svg>
                );
            } else if (triangles.length === 2) {
                return (
                    <svg className="game-card triangle" width="200" height="200" viewBox="25 35 100 100">
                        {triangles}
                    </svg>
                );
            } else {
                return (
                    <svg className="game-card triangle" width="200" height="200" viewBox="40 0 125 125">
                        {triangles}
                    </svg>
                );
            }
        }
    }
}