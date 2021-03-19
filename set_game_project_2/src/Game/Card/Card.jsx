import React from 'react';
import { connect } from 'react-redux';
import { ShaderChunk } from 'three';
import './Card.css'
import Circle from './Circle/Circle';
import Square from './Square/Square';
import Triangle from './Triangle/Triangle';

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

    checkFunc() {
        console.log("CLICKED");
    }

    // TODO: PASS ID through PROPS
    render() {
        if (this.state.shape === "circle") {
            let arr = []
            for (let i = 0; i < this.state.number; i++) {
                arr.push(this.state.pattern)
            }
            return (
                <span onClick={() => this.checkFunc()}>
                    <Circle num_shapes={arr} color={this.state.color} card_id={this.props.card_id.index}></Circle>
                </span>
            )
        } else if (this.state.shape === "square") {
            let arr = []
            for (let i = 0; i < this.state.number; i++) {
                arr.push(this.state.pattern)
            }
            return (
                <Square num_shapes={arr} color={this.state.color}></Square>
            )
        } else {
            let arr = []
            for (let i = 0; i < this.state.number; i++) {
                arr.push(this.state.pattern)
            }
            return (
                <Triangle num_shapes={arr} color={this.state.color}></Triangle>
            )
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
