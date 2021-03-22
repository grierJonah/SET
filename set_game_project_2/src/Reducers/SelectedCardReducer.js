export default function (state = {
    clicked_cards: [],

}, action) {

    let cards = []
    let card_id = action.id_number;

    if (action.type === "SELECTED_CARD") {
        cards.push(card_id)

        // check size is less than or equal to 3
        // check if card is already in list
        if (state.clicked_cards.length < 3 && (state.clicked_cards.indexOf(card_id) === -1)) {
            return {
                ...state,
                clicked_cards: [...state.clicked_cards, card_id]
            }
        }
    }

    if (action.type === "RESET_SELECTED_CARDS") {
        return {
            clicked_cards: [],
        }
    }

    if (action.type === "CLICKED_CARDS") {
        console.log("clicked");
        console.log(action.card);
    }
    return state
}