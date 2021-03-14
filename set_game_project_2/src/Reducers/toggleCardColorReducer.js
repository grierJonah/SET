export default function (state = {
    color: 'wheat',
}, action) {
    if (action.type === "CHANGE_COLOR") {
        if (this.state.color === 'wheat') {
            return {
                ...state, color: 'grey',
            }
        } else {
            return {
                ...state, color: 'wheat',
            }
        }
    }
    return state;
}