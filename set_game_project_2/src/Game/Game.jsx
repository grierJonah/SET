import './Game.css';
import React from 'react';
import { connect } from 'react-redux';
import Card from './Card/Card';

class Game extends React.Component {

    onLinkClick(action) {
        this.props.dispatch({ type: action })
    }

    render() {
        return (
            <div className="main-body-container">
                <div className="header-container">

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
                            <li>Cards in deck: </li>
                            <li>Game Duration: </li>
                            <li>Sets found: </li>
                            <li>Score: </li>
                        </ul>
                    </div>
                    <div className="link-container">
                        <ul>
                            <button className="links"><a href="/">Quit</a></button>
                        </ul>
                    </div>
                </div>
                <div className="body-container">
                    <div className="card-container">
                        {
                            <div className="initial-cards">
                                {this.props.new_game_state.card_array.map((item) => {
                                    return (
                                        <Card key={item} num={item}></Card>
                                    );
                                })}
                            </div>
                        }
                    </div>
                </div>
            </div>
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
        new_game_state: state.new_game,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Game)