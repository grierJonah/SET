import React from 'react';
import { connect } from 'react-redux';
import './Card.css'
import Circle from './Circle/Circle';
import Square from './Square/Square';
import Triangle from './Triangle/Triangle';



class Card extends React.Component {

    // DISPATCH --> NewGameReducer.js
    removeCards(action, deck, cards) {
        console.log("Remove cards dispatch:", this.props)
        this.props.dispatch({ type: action, current_deck: deck, clicked_cards: cards });
    }

    // DISPATCH --> SelectedCardReducer.js
    resetCards(action) {
        this.props.dispatch({ type: action })
    }

    // DISPATCH --> SelectedCardReducer.js
    selectCard(action, id) {
        this.props.dispatch({ type: action, id_number: id })
    }

    // DISPATCH --> CheckMatchingSetReducer.js
    checkMatchingSet(action, cardA, cardB, cardC) {
        this.props.dispatch({
            type: action,
            card_one: cardA,
            card_two: cardB,
            card_three: cardC
        });
    }

    render() {

        const card_index = this.props.card_info.index;
        const card_shape = this.props.card_info.shape;
        const card_color = this.props.card_info.color;
        const card_number = this.props.card_info.number;
        const card_pattern = this.props.card_info.pattern;


        // Pull this logic out into a reducer ---> and build a set (cardA, cardB, cardC) that collects "sets" of cards
        if (this.props.selected_cards_from_state.clicked_cards.length === 3) {
            let cardA = this.props.selected_cards_from_state.clicked_cards[0]
            let cardB = this.props.selected_cards_from_state.clicked_cards[1]
            let cardC = this.props.selected_cards_from_state.clicked_cards[2]


            this.checkMatchingSet("CHECK_MATCHING_SET", cardA, cardB, cardC);

            // Uses CheckMatchingSetReducer boolean logic to reset selected cards
            // See ^ file to understand 'ifMatched' prop logic.
            if (this.props.matched) {
                console.log("Matched 3 cards");

                let curr_deck = this.props.current_deck;
                let clicked_cards = this.props.selected_cards_from_state.clicked_cards;

                this.removeCards("GAMEBOARD_REMOVE", curr_deck, clicked_cards);

                this.resetCards("RESET_SELECTED_CARDS");
            } else {
                console.log("We have not matched 3 cards");
                this.resetCards("RESET_SELECTED_CARDS");
            }
        }

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
        sets: state.collected_sets.collected_sets,
        matched: state.collected_sets.matched_set_bool,
        current_deck: state.deck,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Card)
