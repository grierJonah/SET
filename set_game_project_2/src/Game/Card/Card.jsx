import React from 'react';
import { connect } from 'react-redux';
import './Card.css'
import Circle from './Circle/Circle';
import Square from './Square/Square';
import Triangle from './Triangle/Triangle';



class Card extends React.Component {


    // DISPATCH --> SelectedCardReducer.js
    selectCard(action, id) {
        this.props.dispatch({ type: action, id_number: id })
    }

    render() {

        const card_index = this.props.card_info.index;
        const card_shape = this.props.card_info.shape;
        const card_color = this.props.card_info.color;
        const card_number = this.props.card_info.number;
        const card_pattern = this.props.card_info.pattern;

        let shape_array = [];

        if (card_shape === "circle") {
            for (let i = 0; i < card_number; i++) {
                shape_array.push(card_pattern)
            }
            return (
                <span onClick={() => this.selectCard("SELECTED_CARD", this.props.card_info)}>
                    <Circle num_shapes={shape_array} color={card_color} card_id={card_index}></Circle>
                </span>
            )
        } else if (card_shape === "square") {
            for (let i = 0; i < card_number; i++) {
                shape_array.push(card_pattern)
            }
            return (
                <span onClick={() => this.selectCard("SELECTED_CARD", this.props.card_info)}>
                    <Square num_shapes={shape_array} color={card_color} card_id={card_index}></Square>
                </span>
            )
        } else {
            for (let i = 0; i < card_number; i++) {
                shape_array.push(card_pattern)
            }
            return (
                <span onClick={() => this.selectCard("SELECTED_CARD", this.props.card_info)}>
                    <Triangle num_shapes={shape_array} color={card_color} card_id={card_index}></Triangle>
                </span>
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
        selected_cards_from_state: state.selected_cards,
        sets: state.collected_sets,
        // sets: state.collected_sets.collected_sets,
        // matched: state.collected_sets.matched_set_bool,
        current_deck: state.deck,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Card)
