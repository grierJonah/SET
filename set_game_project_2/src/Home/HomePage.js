import './HomePage.css';
import React from 'react';

export default class HomePage extends React.Component {
  render() {
    return (
      <div class="main-container">
        <h1 id="game-title"><a href="/game/">SET</a></h1>
        <h3 id="rules"><a href="/rules/">Rules</a></h3>
      </div>
    );
  }
}
