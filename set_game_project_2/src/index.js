import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './Reducers/Reducer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import HomePage from './Home/HomePage';
import Rules from './Rules/Rules.jsx'
import reportWebVitals from './reportWebVitals';
import Game from './Game/Game';

const store = createStore(Reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/Rules/"} component={Rules} />
          <Route exact path={"/Game/"} component={Game} />
          <Route render={() => <h1>Path not found!</h1>} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
