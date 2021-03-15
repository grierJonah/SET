export default function (state = {
    color: 'none',
}, action) {
    let grey_color = 'grey';
    let none_color = 'none'
    if (action.type === "CHANGE_COLOR") {
        if (state.color === 'none') {
            return {
                color: grey_color,
            }
        } else {
            return {
                color: none_color,
            }
        }
    }
    return state;
}