import { combineReducers } from 'redux';
import NewGameReducer from './NewGameReducer';
import SVGIconReducer from './SVGIconReducer';
import toggleCardColorReducer from './toggleCardColorReducer';
import toggle_color from './toggleCardColorReducer';

export default combineReducers({
    new_game: NewGameReducer,
    svg_icon: SVGIconReducer,
    toggle_color: toggleCardColorReducer,
})