export default function (state = {
    current_deck: [],
    game_board: [],
    // picked_pile: [],
    counter: 12,
}, action) {

    let colors = ['red', 'blue', 'green'];
    let patterns = ['none', 'solid', 'dashed'];
    let numbers = ['1', '2', '3'];
    let shapes = ['circle', 'square', 'triangle'];
    let deck = [];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


    if (action.type === "NEW_GAME") {
        let index = 0;
        for (const shape of shapes) {
            for (const color of colors) {
                for (const pattern of patterns) {
                    for (const number of numbers) {
                        deck.push({ index, number, color, pattern, shape })
                        index += 1
                    }
                }
            }
        }

        // randomize ordering of the svg objects
        let shuffled_deck = shuffle(deck);
        let starting_board = [];
        // let picked_cards = [];

        // Add to our starting board
        for (let i = 0; i < 12; i++) {
            starting_board.push(shuffled_deck[i]);
        }

        // Remove cards from our deck and put into a 'picked deck' 
        //      --> tracks selected deck cards so there aren't any double pulls when adding more cards to the screen
        for (let i = 0; i < 12; i++) {
            shuffled_deck.shift();
        }
        console.log("Current Deck", state.current_deck);
        return {
            ...state,
            current_deck: shuffled_deck,
            game_board: starting_board,
            // picked_pile: picked_cards,
        }
    } else if ("GET_THREE_NEW_CARDS") {
        let new_cards = [];

        if (state.counter <= 9) {
            for (let i = 0; i < 3; i++) {
                new_cards.push(state.current_deck[i]);
                state.current_deck.shift();
                state.counter += 1
            }

            return {
                ...state,
                current_deck: state.current_deck,
                game_board: [...state.game_board, ...new_cards]
            }
        }
        return state;
    }
    return state;
}