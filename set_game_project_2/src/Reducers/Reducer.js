import { combineReducers } from 'redux';
import NewGameReducer from './NewGameReducer';
import toggleCardColorReducer from './toggleCardColorReducer';
import toggle_color from './toggleCardColorReducer';

export default combineReducers({
    starting_deck: NewGameReducer,
    toggle_color: toggleCardColorReducer,
})