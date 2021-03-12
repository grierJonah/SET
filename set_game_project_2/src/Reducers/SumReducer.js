export default function SumReducer(state = {
    total_sum: 0,
    values: [],
}, action) {
    if (action.type === "ROLL") {
        const vals = [1, 2, 3, 4, 5, 6];
        const dieValue = vals[Math.floor(Math.random() * vals.length)];

        state.values.push(dieValue)

        let sumCount = state.values.reduce((a, b) => (a + b), 0)
        return {
            ...state, total_sum: sumCount,
        }
    } else if (action.type === "CLEAR") {
        return {
            total_sum: 0, values: []
        }
    }
    return state;
}
