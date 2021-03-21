import React from 'react';
import { connect } from 'react-redux';
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
        }
    }

    resetCards(action) {
        this.props.dispatch({ type: action })
    }

    selectCard(action, id) {
        this.props.dispatch({ type: action, id_number: id })
    }

    checkMatchingSet(action, cardA, cardB, cardC) {
        this.props.dispatch({
            type: action,
            card_one: cardA,
            card_two: cardB,
            card_three: cardC
        });
    }

    createShapedCard(action) {
        this.props.dispatch({ type: action })
    }

    render() {


        // Pull this logic out into a reducer ---> and build a set (cardA, cardB, cardC) that collects "sets" of cards
        if (this.props.selected_cards_from_state.clicked_cards.length === 3) {
            let cardA = this.props.selected_cards_from_state.clicked_cards[0]
            let cardB = this.props.selected_cards_from_state.clicked_cards[1]
            let cardC = this.props.selected_cards_from_state.clicked_cards[2]


            this.checkMatchingSet("CHECK_MATCHING_SET", cardA, cardB, cardC);
            // console.log("Check Match:", this.props.sets);

            // Uses CheckMatchingSetReducer boolean logic to reset selected cards
            // See ^ file to understand 'ifMatched' prop logic.
            if (!this.props.set_match) {
                this.resetCards("RESET_SELECTED_CARDS");
            }
        }

        if (this.state.shape === "circle") {
            let arr = []
            for (let i = 0; i < this.state.number; i++) {
                arr.push(this.state.pattern)
            }
            return (
                <span onClick={() => this.selectCard("SELECTED_CARD", this.props.card_info)}>
                    <Circle num_shapes={arr} color={this.state.color} card_id={this.props.card_id.index}></Circle>
                </span>
            )
        } else if (this.state.shape === "square") {
            let arr = []
            for (let i = 0; i < this.state.number; i++) {
                arr.push(this.state.pattern)
            }
            return (
                <span onClick={() => this.selectCard("SELECTED_CARD", this.props.card_info)}>
                    <Square num_shapes={arr} color={this.state.color} card_id={this.props.card_id.index}></Square>
                </span>
            )
        } else {
            let arr = []
            for (let i = 0; i < this.state.number; i++) {
                arr.push(this.state.pattern)
            }
            return (
                <span onClick={() => this.selectCard("SELECTED_CARD", this.props.card_info)}>
                    <Triangle num_shapes={arr} color={this.state.color} card_id={this.props.card_id.index}></Triangle>
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
        sets: state.collected_sets.collected_sets,
        set_match: state.collected_sets.matched_set_bool,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Card)
