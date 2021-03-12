import React from 'react';
import './Rules.css';

export default class Rules extends React.Component {

    render() {
        return (
            <div className="main-container">
                <h2 id="rules-header">How to play:</h2>
                <p className="rules-explanation">SET is a card game that contains 81 cards. Each card has 4 different features, with 3
                variations on each feature:</p>
                <ul>
                    <li><b>Variation 1:</b> Shape on card (e.g., square, circle, triangle)</li>
                    <li><b>Variation 2:</b> Color of shape (e.g., green, blue, or red)</li>
                    <li><b>Variation 3:</b> Number of shapes (1, 2 or 3)</li>
                    <li><b>Variation 4:</b> Shading of shape (none, striped, solid)</li>
                </ul>
                <p className="rules-explanation second">Select 3 cards that have <u>all</u> or <u>none</u> of the same variations</p>
                <div class="back-button">
                    <form action="../">
                        <button className="rules-game-button" type="submit" id="back">Back</button>
                    </form>
                    <form action="../game/">
                        <button className="rules-game-button" type="submit" id="play">Play</button>
                    </form>
                </div>
            </div>
        );
    }


}