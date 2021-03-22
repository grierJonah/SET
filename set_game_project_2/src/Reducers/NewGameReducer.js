export default function (state = {
    current_deck: [],
    game_board: [],
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

    function checkForSet(array) {
        // return true or false, true will break, false will re-shuffle
        for (let i = 0; i < 12 - 1; i++) {
            for (let j = i + 1; j < 12 - 1; j++) {
                for (let k = j + 1; k < 12 - 2; k++) {
                    let new_arr = [array[i], array[j], array[k]];

                    // Same Shape, Color, Pattern
                    if (new_arr[i % 3].shape === new_arr[j % 3].shape && new_arr[i % 3].shape === new_arr[k % 3].shape && new_arr[j % 3].shape === new_arr[k % 3].shape) {
                        if (new_arr[i % 3].color === new_arr[j % 3].color && new_arr[i % 3].color === new_arr[k % 3].color && new_arr[j % 3].color === new_arr[k % 3].color) {
                            if (new_arr[i % 3].pattern === new_arr[j % 3].pattern && new_arr[i % 3].pattern === new_arr[k % 3].pattern && new_arr[j % 3].pattern === new_arr[k % 3].pattern) {
                                if (new_arr[i % 3].number !== new_arr[j % 3].number && new_arr[i % 3].number !== new_arr[k % 3].number && new_arr[j % 3].number !== new_arr[k % 3].number) {
                                    console.log("Pair:", new_arr);
                                    return true;
                                }
                            }
                        }
                        // Different Shape, Color, Pattern
                    } else if (new_arr[i % 3].shape !== new_arr[j % 3].shape && new_arr[i % 3].shape !== new_arr[k % 3].shape && new_arr[j % 3].shape !== new_arr[k % 3].shape) {
                        if (new_arr[i % 3].color !== new_arr[j % 3].color && new_arr[i % 3].color !== new_arr[k % 3].color && new_arr[j % 3].color !== new_arr[k % 3].color) {
                            if (new_arr[i % 3].pattern !== new_arr[j % 3].pattern && new_arr[i % 3].pattern !== new_arr[k % 3].pattern && new_arr[j % 3].pattern !== new_arr[k % 3].pattern) {
                                if (new_arr[i % 3].number !== new_arr[j % 3].number && new_arr[i % 3].number !== new_arr[k % 3].number && new_arr[j % 3].number !== new_arr[k % 3].number) {
                                    console.log("Pair:", new_arr);
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    function findCard(gameboard, card_index) {
        return gameboard.find((obj) => obj.index === card_index);
    }

    function removeCard(gameboard, card) {
        return gameboard.filter((c) => c.index !== card.index);
    }


    if (action.type === "NEW_GAME") {
        let index = 0;
        for (const number of numbers) {
            for (const color of colors) {
                for (const pattern of patterns) {
                    for (const shape of shapes) {
                        deck.push({ index, number, pattern, color, shape })
                        index += 1
                    }
                }
            }
        }

        // randomize ordering of the svg objects
        let shuffled_deck = shuffle(deck);

        // Continuously Re-shuffle if first 12 cards do not contain a SET
        let flag = true;
        while (flag) {
            if (checkForSet(shuffled_deck)) {
                flag = false;
                break;
            }
            console.log("Reshuffling");
            shuffled_deck = shuffle(shuffled_deck);
        }

        let starting_board = [];

        // Add to our starting board
        for (let i = 0; i < 12; i++) {
            starting_board.push(shuffled_deck[i]);
        }

        // Remove cards from our deck and put into a 'picked deck' 
        //      --> tracks selected deck cards so there aren't any double pulls when adding more cards to the screen
        for (let i = 0; i < 12; i++) {
            shuffled_deck.shift();
        }
        return {
            ...state,
            current_deck: shuffled_deck,
            game_board: starting_board,
        }
    }

    if (action.type === "GET_THREE_NEW_CARDS") {
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

    if (action.type === "GAMEBOARD_REMOVE") {
        let deck = action.current_deck;
        let clicked_cards = action.clicked_cards;

        let card_one = clicked_cards[0];
        let card_two = clicked_cards[1];
        let card_three = clicked_cards[2];

        let game_board = deck.game_board;

        const remove_cards = [card_one.index, card_two.index, card_three.index]

        let new_game_board = deck.game_board;

        for (let i = 0; i < remove_cards.length; i++) {
            let card = findCard(game_board, remove_cards[i]);
            new_game_board = removeCard(new_game_board, card);
        }

        return {
            game_board: new_game_board,
            counter: new_game_board.length,
        }
    }
    return state;
}