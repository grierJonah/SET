import './Game.css';
import React from 'react';
import { connect } from 'react-redux';
import Card from './Card/Card';

class Game extends React.Component {


    // DISPATCH --> NewGameReducer.js
    onLinkClick(action) {
        this.props.dispatch({ type: action })
    }

    // DISPATCH --> SelectedCardReducer.js
    onCardClick(action, array) {
        this.props.dispatch({ type: action, deck: array })
    }

    // DISPATCH --> SelectedCardReducer.js
    clickedCard(action, card) {
        this.props.dispatch({ type: action, card: card });
    }

    render() {
        return (
            <div className="main-body-container">
                <div className="header-container">
                    <h1 id="inner-game-title">SET</h1>
                </div>
                <div className="side-panel-left-container">
                    <div className="link-container">
                        <ul>
                            <button className="links" onClick={() => this.onLinkClick("NEW_GAME")}>New Game</button>
                            <button className="links" onClick={() => this.onLinkClick("GET_THREE_NEW_CARDS")}>Open 3 Cards</button>
                            <button className="links" onClick={() => this.onLinkClick("FIND_SET")}>Find Set</button>
                        </ul>
                    </div>
                    <div className="game-statistics">
                        <ul>
                            <li>Cards in deck: {this.props.deck_in_state.current_deck.length}</li>
                            <li>Game Duration:</li>
                            <li>Sets found: {this.props.sets.num_sets}</li>
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
                                        <Card key={value} onClick={() => this.clickedCard("CLICKED", card)} card_info={card} card_id={card} shape={card}></Card>
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
        sets: state.collected_sets,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Game)