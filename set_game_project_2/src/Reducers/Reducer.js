import { combineReducers } from 'redux';
import NewGameReducer from './NewGameReducer';
import SVGIconReducer from './SVGIconReducer';

export default combineReducers({
    new_game: NewGameReducer,
    svg_icon: SVGIconReducer,
})