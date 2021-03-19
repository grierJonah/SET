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
                            <button className="links" onClick={() => this.onLinkClick("EXTRA_CARDS")}>Open 3 Cards</button>
                            <button className="links" onClick={() => this.onLinkClick("FIND_SET")}>Find Set</button>
                        </ul>
                    </div>
                    <div className="game-statistics">
                        <ul>
                            <li>Cards in deck:</li>
                            <li>Game Duration:</li>
                            <li>Sets found: </li>
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
                                {this.props.deck_in_state.deck.slice(0, 12).map((card) => {
                                    return (
                                        <Card card_id={card} shape={card}></Card>
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
        deck_in_state: state.starting_deck,
        selected_card_bool: state.selected_card,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Game)