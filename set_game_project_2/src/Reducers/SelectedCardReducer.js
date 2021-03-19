export default function (state = {
    clicked_cards: [],

}, action) {

    let cards = []

    console.log(state.clicked_cards);

    if (action.type === 'SELECTED_CARD') {
        cards.push(action.id_number)

        // check size is less than or equal to 3
        // check if card is already in list
        if (state.clicked_cards.length < 3 && (state.clicked_cards.indexOf(action.id_number) === -1)) {
            return {
                ...state,
                clicked_cards: [...state.clicked_cards, action.id_number]
            }
        }
    } else if (action.type === "RESET_SELECTED_CARDS") {
        return {
            ...state,
            clicked_cards: []
        }
    }

    // if (state.clicked_cards.length === 3) {
    //     for(let i=0; i < 3; i++) {
    //         console.log(state.clicked_cards[i].);
    //     }
    // }
    return state
}