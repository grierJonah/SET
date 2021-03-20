import { combineReducers } from 'redux';
import NewGameReducer from './NewGameReducer';
import SelectedCardReducer from './SelectedCardReducer';
import CheckMatchingSetReducer from './CheckMatchingSetReducer';

export default combineReducers({
    deck: NewGameReducer,
    selected_cards: SelectedCardReducer,
    collected_sets: CheckMatchingSetReducer,
})