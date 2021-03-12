export default function (state = {
    num_cards: 0,
    card_array: [],
}, action) {
    if (action.type === "NEW_GAME") {
        let initial_deck = 0
        let initial_card_array = []
        for (let i = 0; i < 12; i++) {
            initial_deck += 1
            initial_card_array.push(i)
        }
        return {
            ...state, num_cards: initial_deck, card_array: initial_card_array
        }
    }
    return state
}