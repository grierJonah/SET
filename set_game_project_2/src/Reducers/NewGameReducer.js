export default function (state = {
    full_deck: [],
    game_board: [],
    picked_pile: [],
    counter: 0,
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
                        deck.push({ index, shape, color, pattern, number })
                        index += 1
                    }
                }
            }
        }

        // randomize ordering of the svg objects
        let shuffled_deck = shuffle(deck);
        let starting_board = [];
        let picked_cards = [];

        // Add to our starting board
        for (let i = 0; i < 12; i++) {
            starting_board.push(shuffled_deck[i]);
        }

        // Remove cards from our deck and put into a 'picked deck' 
        //      --> tracks selected deck cards so there aren't any double pulls when adding more cards to the screen
        for (let i = 0; i < 12; i++) {
            picked_cards.push(shuffled_deck.shift());
        }

        console.log("Starting board", starting_board);
        console.log("shuffled deck", shuffled_deck);
        console.log("picked cards", picked_cards);

        // Change of difficulty with if statement? ---> if action.easy { } else if action.medium { } else action.hard

        // in addition to the 81 card deck, lets return a list of indices that are being used for the first 12. That way we know we 
        // won't pull 3 more that are already listed in the first 12 by checking that the next 3 aren't already in the "pulled list"

        return {
            ...state,
            full_deck: shuffled_deck,
            game_board: starting_board,
            picked_pile: picked_cards,
            counter: 12,
        }
    } else if ("GET_THREE_NEW_CARDS") {
        let indices = [];
        for (let i = state.counter; i < state.counter + 3; i++) {

        }

    }
    return state
}