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

    createShapedCard(action) {
        this.props.dispatch({ type: action })
    }

    render() {

        if (this.props.selected_cards_from_state.clicked_cards.length === 3) {
            let cardA = this.props.selected_cards_from_state.clicked_cards[0]
            let cardB = this.props.selected_cards_from_state.clicked_cards[1]
            let cardC = this.props.selected_cards_from_state.clicked_cards[2]

            if (cardA.shape === cardB.shape && cardA.shape === cardC.shape && cardB.shape === cardC.shape) {
                if (cardA.color === cardB.color && cardA.color === cardC.color && cardB.color === cardC.color) {
                    if (cardA.pattern === cardB.pattern && cardA.pattern === cardC.pattern && cardB.pattern === cardC.pattern) {
                        console.log("MATCHING SET!!!");
                    }
                }
            } else if (cardA.shape !== cardB.shape && cardA.shape !== cardC.shape && cardB.shape !== cardC.shape) {
                if (cardA.color !== cardB.color && cardA.color !== cardC.color && cardB.color !== cardC.color) {
                    if (cardA.pattern !== cardB.pattern && cardA.pattern !== cardC.pattern && cardB.pattern !== cardC.pattern) {
                        console.log("MATCHING SET!!!");
                    }
                }
            } else {
                console.log("YOU SUCK")
                this.resetCards("RESET_SELECTED_CARDS");
                console.log(this.props.selected_cards_from_state);
            }

            // USE THIS TO CHECK properties
            // console.log(this.props.card_info.index);
            // ifs


            // console.log(this.props.selected_cards_from_state.clicked_cards[1]);
            // for (let i = 0; i < 3; i++) {
            //     console.log(this.props.selected_cards_from_state.clicked_cards[i]);
            // }
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
                <soan onClick={() => this.selectCard("SELECTED_CARD", this.props.card_info)}>
                    <Triangle num_shapes={arr} color={this.state.color} card_id={this.props.card_id.index}></Triangle>
                </soan>
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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Card)
