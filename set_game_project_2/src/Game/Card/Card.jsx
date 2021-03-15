import React from 'react';
import { connect } from 'react-redux';
import './Card.css'
import Circle from './Circle/Circle';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.shape.color,
            shape: props.shape.shape,
            number: props.shape.number,
            pattern: props.shape.pattern,
            card_color: props.curr_card_color,
        }
    }

    toggleCardColor(action, bg) {
        this.props.dispatch({ type: action })
    }

    createShapedCard(action) {
        this.props.dispatch({ type: action })
    }

    // TODO: PASS ID through PROPS
    render() {
        if (this.state.shape === "circle") {
            let arr = []
            for (let i = 0; i < this.state.number; i++) {
                arr.push(this.state.pattern)
            }
            // this.createShapedCard("CREATE_CARD_OBJECT", arr);
            return (
                <Circle num_shapes={arr} color={this.state.color}></Circle>
            )
        } else if (this.state.shape === "square") {
            return (
                <svg className="game-card square" width="200" height="175" viewBox="0 0 100 100">
                    <rect width="50" height="50" x="25" y="25" fill={this.state.color} stroke="black" strokeWidth="1" />
                </svg>
            );
        } else {
            return (
                <svg className="game-card triangle" width="200" height="165" >
                    <polygon points="100,25 50,100 150,100" fill={this.state.color} stroke="black" strokeWidth="2" />
                </svg>
            );
        }
    }
}

let mapDispatchToProps = function (dispatch, props) {
    return {
        dispatch: dispatch,
    }
}

let mapStateToProps = function (state, props) {
    return {
        curr_card_color: state.toggle_color,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Card)
