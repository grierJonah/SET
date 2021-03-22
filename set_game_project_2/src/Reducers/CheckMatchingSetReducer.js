export default function (state = {
    collected_sets: new Set(),
    matched_set_bool: false,
    num_sets: 0,
    game_board: [],
}, action) {

    const current_deck = action.current_deck;
    const card_one = action.card_one;
    const card_two = action.card_two;
    const card_three = action.card_three;
    const matched = true;

    if (action.type === "CHECK_MATCHING_SET") {
        if (card_one.shape === card_two.shape && card_one.shape === card_three.shape && card_two.shape === card_three.shape) {
            if (card_one.color === card_two.color && card_one.color === card_three.color && card_two.color === card_three.color) {
                if (card_one.pattern === card_two.pattern && card_one.pattern === card_three.pattern && card_two.pattern === card_three.pattern) {
                    console.log("SAME MATCHING SET FOUND!!!");
                    let new_set = { card_one, card_two, card_three }

                    // remove cards from gameboard
                    // let new_game_board = gameboard_card_removal(current_deck, card_one.index, card_two.index, card_three.index);

                    return {
                        ...state,
                        matched_set_bool: matched,
                        collected_sets: state.collected_sets.add(new_set),
                        num_sets: state.num_sets + 1,
                        // game_board: new_game_board,
                    }
                }
                return
            }
        } else if (card_one.shape !== card_two.shape && card_one.shape !== card_three.shape && card_two.shape !== card_three.shape) {
            if (card_one.color !== card_two.color && card_one.color !== card_three.color && card_two.color !== card_three.color) {
                if (card_one.pattern !== card_two.pattern && card_one.pattern !== card_three.pattern && card_two.pattern !== card_three.pattern) {
                    console.log("DIFFERENT MATCHING SET FOUND!!!");
                    let new_set = { card_one, card_two, card_three }

                    // let new_game_board = gameboard_card_removal(current_deck, card_one.index, card_two.index, card_three.index);
                    // console.log("New Gameboard Size:", new_game_board.length);

                    return {
                        ...state,
                        matched_set_bool: matched,
                        collected_sets: state.collected_sets.add(new_set),
                        num_sets: state.num_sets + 1,
                        // game_board: new_game_board,
                    }
                }
                return
            }
        } else {
            // Here we are using a boolean to dynamically set what our Card.jsx 'render' function logic will do. 
            // See line 57 in Card.jsx. It pulls from this reducer to check if the 3-pair cards are a matching set or not. 
            // If they are not a matching set (as we can see 'false') then the reset_selected_cards reducer is utilized
            return {
                ...state,
                matched_set_bool: !matched,
            }
        }
    }
    return state;

}