import { combineReducers } from 'redux';
import NewGameReducer from './NewGameReducer'

export default combineReducers({
    new_game: NewGameReducer,
})