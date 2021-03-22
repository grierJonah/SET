import './Game.css';
import React from 'react';
import { connect } from 'react-redux';
import Card from './Card/Card';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wasNotSeen: true,
        }
    }


    // DISPATCH --> NewGameReducer.js
    onLinkClick(action) {
        this.props.dispatch({ type: action })
    }

    getCardsLink(action, obj) {
        this.props.dispatch({ type: action, cards: obj });
    }

    // DISPATCH --> SelectedCardReducer.js
    onCardClick(action, array) {
        this.props.dispatch({ type: action, deck: array })
    }

    // DISPATCH --> SelectedCardReducer.js
    clickedCard(action, card) {
        this.props.dispatch({ type: action, card: card });
    }

    // DISPATCH --> CheckMatchingSetReducer.js
    checkMatchingSet(action, curr_deck, cardA, cardB, cardC) {
        this.props.dispatch({
            type: action,
            current_deck: curr_deck,
            card_one: cardA,
            card_two: cardB,
            card_three: cardC
        });
    }

    // DISPATCH --> SelectedCardReducer.js
    resetCards(action) {
        this.props.dispatch({ type: action })
    }

    // DISPATCH --> NewGameReducer.js
    removeCards(action, deck, cards) {
        this.props.dispatch({ type: action, current_deck: deck, clicked_cards: cards });
    }

    render() {
        // console.log(this.props.deck_in_state);
        if (this.props.selected_cards_in_state.clicked_cards.length === 3) {

            let curr_deck = this.props.deck_in_state;

            let cardA = this.props.selected_cards_in_state.clicked_cards[0]
            let cardB = this.props.selected_cards_in_state.clicked_cards[1]
            let cardC = this.props.selected_cards_in_state.clicked_cards[2]

            this.checkMatchingSet("CHECK_MATCHING_SET", curr_deck, cardA, cardB, cardC);

            if (this.props.matches && this.state.wasNotSeen) {
                this.setState({
                    wasNotSeen: false,
                })
                console.log("Matched 3 cards");

                let curr_deck = this.props.deck_in_state;
                let clicked_cards = this.props.selected_cards_in_state.clicked_cards;

                this.removeCards("GAMEBOARD_REMOVE", curr_deck, clicked_cards);

                this.resetCards("RESET_SELECTED_CARDS");
            }
            else {
                this.setState({
                    wasNotSeen: true,
                })
                this.resetCards("RESET_SELECTED_CARDS");
            }
        }

        // {this.props.deck_in_state.current_deck.length}
        // onClick={() => this.clickedCard("CLICKED_CARD", card)}

        return (
            <div className="main-body-container">
                <div className="header-container">
                    <h1 id="inner-game-title">SET</h1>
                </div>
                <div className="side-panel-left-container">
                    <div className="link-container">
                        <ul>
                            <button className="links" onClick={() => this.onLinkClick("NEW_GAME")}>New Game</button>
                            <button className="links" onClick={() => this.getCardsLink("GET_THREE_NEW_CARDS", this.props)}>Open 3 Cards</button>
                            <button className="links" onClick={() => this.onLinkClick("FIND_SET")}>Find Set</button>
                        </ul>
                    </div>
                    <div className="game-statistics">
                        <ul>
                            <li>Cards in deck: </li>
                            <li>Game Duration:</li>
                            <li>Sets found: {this.props.matches.num_sets}</li>
                            <li>Score: </li>
                        </ul>
                    </div>
                    <div className="link-container">
                        <ul>
                            <a href="/"><button className="links">Quit</button></a>
                        </ul>
                    </div>
                </div>
                <div className="body-container">
                    <div className="card-container">
                        {
                            <div className="initial-cards">
                                {this.props.deck_in_state.game_board.map((card, value) => {
                                    return (
                                        <Card key={value} card_info={card} card_id={card} shape={card}></Card>
                                    );
                                })}
                            </div>
                        }
                    </div>
                </div>
            </div >
        );
    }
}

let mapDispatchToProps = function (dispatch, props) {
    return {
        dispatch: dispatch,
    }
}

let mapStateToProps = function (state, props) {
    return {
        deck_in_state: state.deck,
        selected_cards_in_state: state.selected_cards,
        selected_card_bool: state.selected_card,
        matches: state.collected_sets,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Game)