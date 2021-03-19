import { combineReducers } from 'redux';
import NewGameReducer from './NewGameReducer';
import SelectedCardReducer from './SelectedCardReducer';

export default combineReducers({
    starting_deck: NewGameReducer,
    selected_cards: SelectedCardReducer,
})