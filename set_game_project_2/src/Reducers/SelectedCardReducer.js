export default function (state = {
    is_selected_bool: false,
}, action) {
    if (action.type === 'SELECTED_CARD') {
        console.log("INSIDE SELECT", state);
        return {
            is_selected_bool: !state.is_selected_bool
        }
    }
    return state
}