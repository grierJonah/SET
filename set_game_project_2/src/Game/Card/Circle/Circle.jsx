import React from 'react';


export default class Circle extends React.Component {

    render() {
        // for (let i = 0; i < this.props.num_shapes; i++) {
        //     return (
        //         <svg className="game-card circle" width="200" height="175" onClick={() => this.toggleCardColor("CHANGE_COLOR")}>
        //             <circle cx="100" cy="65" r="40" strokeWidth="2" stroke="black" fill={this.props.color} ></circle>
        //         </svg>
        //     )
        // }
        return (
            this.props.num_shapes.map((item, value) => {
                console.log(item, value);
                return (
                    <svg className="game-card circle" width="200" height="175" key={value}>
                        <circle cx="100" cy="65" r="40" strokeWidth="2" stroke="black" fill={item} ></circle>
                    </svg>
                );
            })
        );
    }
}