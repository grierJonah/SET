import './Game.css';
import React from 'react';
import { connect } from 'react-redux';
import Card from './Card/Card';

class Game extends React.Component {



    onLinkClick(action) {
        this.props.dispatch({ type: action })
    }

    getRandomSVGType(action) {
        this.props.dispatch({ type: action })
    }

    toggleCardColor(action) {
        this.props.dispatch({ type: action })
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
                            <li>Cards in deck: {this.props.new_game_state.num_cards_on_screen}</li>
                            <li>Game Duration: { }</li>
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
                                {this.props.new_game_state.card_array.map((item) => {
                                    return (
                                        // console.log(index)
                                        <Card key={item} shape={item}></Card>
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
        new_game_state: state.new_game,
        svg_icon_state: state.svg_icon,
        toggle_card_color_state: state.toggleCardColor,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Game)