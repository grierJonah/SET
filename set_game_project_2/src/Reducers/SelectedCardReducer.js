export default function (state = {
    clicked_cards: [],
}, action) {

    let card_id = action.id_number;

    if (action.type === "SELECTED_CARD") {

        // check size is less than or equal to 3
        // check if card is already not already in list
        if (state.clicked_cards.length < 3 && (state.clicked_cards.indexOf(card_id) === -1)) {
            return {
                ...state,
                clicked_cards: [...state.clicked_cards, card_id],
            }
        }
    }

    if (action.type === "RESET_SELECTED_CARDS") {
        console.log("Resetting selected cards...");
        return {
            clicked_cards: [],
            background_color: '',
        }
    }

    if (action.type === "CLICKED_CARDS") {
        console.log("clicked");
        console.log(action.card);
    }
    return state
}