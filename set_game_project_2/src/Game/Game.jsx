import './Game.css';
import React from 'react';
import { connect } from 'react-redux';
import Card from './Card/Card';

class Game extends React.Component {


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

    // DISPATCH --> NewGameReducer.js
    checkMatchingSet(action, game, cardA, cardB, cardC) {
        this.props.dispatch({
            type: action,
            game_map: game,
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

    toggleSeen() {
        this.setState({
            wasNotSeen: !this.state.wasNotSeen,
        })
    }

    render() {
        if (this.props.selected_cards_in_state.clicked_cards.length === 3) {
            let gameboard_obj = this.props.deck_in_state;

            let cardA = this.props.selected_cards_in_state.clicked_cards[0];
            let cardB = this.props.selected_cards_in_state.clicked_cards[1];
            let cardC = this.props.selected_cards_in_state.clicked_cards[2];

            this.checkMatchingSet("CHECK_MATCHING_SET", gameboard_obj, cardA, cardB, cardC);

            this.resetCards("RESET_SELECTED_CARDS");
        }

        // {this.props.deck_in_state.current_deck.length}
        // {this.props.deck_in_state.current_deck.length}       // line 88 in "cards in deck"
        // onClick={() => this.clickedCard("CLICKED_CARD", card)}

        return (
            <div className="main-body-container" >
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
                            <li>Sets found: {this.props.deck_in_state.num_sets} </li>
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
                <div className="side-panel-right-container">
                    <div className="hints-container">
                        {
                            <div className="hints">
                                {this.props.deck_in_state.find_set.map((card, value) => {
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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Game)