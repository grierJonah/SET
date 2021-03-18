import React from 'react';


export default class Circle extends React.Component {

    // return (
    //     <svg className="game-card triangle" width="200" height="165" >
    //         <polygon points="100,25 50,100 150,100" fill={this.state.color} stroke="black" strokeWidth="2" />
    //     </svg>
    // );

    render() {
        const triangles = [];
        const pattern = this.props.num_shapes[0]
        for (let i = 0; i < this.props.num_shapes.length; i++) {
            triangles.push(
                <polygon
                    points={"100, 25 " + "50, 100 " + "150, 100"}
                    fill={this.props.color}
                    stroke={this.props.color} >
                </polygon >);
        }
        if (triangles.length == 1) {
            return (
                <svg className="game-card triangle" width="200" height="200">
                    {triangles}
                </svg>
            );
        } else if (triangles.length == 2) {
            return (
                <svg className="game-card triangle" width="200" height="200">
                    {triangles}
                </svg>
            );
        } else {
            return (
                <svg className="game-card triangle" width="200" height="200">
                    {triangles}
                </svg>
            );
        }
    }
}