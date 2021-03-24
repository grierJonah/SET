export default function (state = {
    current_deck: [],
    game_board: [],
    counter: 12,
    collected_sets: new Set(),
    num_sets: 0,
    find_set: [],
    score: 0,
}, action) {

    const card_one = action.card_one;
    const card_two = action.card_two;
    const card_three = action.card_three;

    let colors = ['red', 'blue', 'green'];
    let patterns = ['none', 'solid', 'dashed'];
    let numbers = ['1', '2', '3'];
    let shapes = ['circle', 'square', 'triangle'];
    let deck = [];
    let new_arr;


    // Shuffles entire deck of cards
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Finds and returns a matching pair
    function findMeASet(array) {
        for (let i = 0; i < 12 - 1; i++) {
            for (let j = i + 1; j < 12 - 2; j++) {
                for (let k = j + 1; k < 12 - 3; k++) {
                    new_arr = [array[i], array[j], array[k]];

                    // using modulo 3 since there are 3 indices yet 12 board slots (runs into index out of bounds error)
                    // Same Shape, Color, Pattern
                    if (new_arr[i % 3].shape === new_arr[j % 3].shape && new_arr[i % 3].shape === new_arr[k % 3].shape && new_arr[j % 3].shape === new_arr[k % 3].shape) {
                        if (new_arr[i % 3].color === new_arr[j % 3].color && new_arr[i % 3].color === new_arr[k % 3].color && new_arr[j % 3].color === new_arr[k % 3].color) {
                            if (new_arr[i % 3].pattern === new_arr[j % 3].pattern && new_arr[i % 3].pattern === new_arr[k % 3].pattern && new_arr[j % 3].pattern === new_arr[k % 3].pattern) {
                                if (new_arr[i % 3].number !== new_arr[j % 3].number && new_arr[i % 3].number !== new_arr[k % 3].number && new_arr[j % 3].number !== new_arr[k % 3].number) {
                                    return new_arr;
                                }
                            }
                        }
                        // Different Shape, Color, Pattern
                    } else if (new_arr[i % 3].shape !== new_arr[j % 3].shape && new_arr[i % 3].shape !== new_arr[k % 3].shape && new_arr[j % 3].shape !== new_arr[k % 3].shape) {
                        if (new_arr[i % 3].color !== new_arr[j % 3].color && new_arr[i % 3].color !== new_arr[k % 3].color && new_arr[j % 3].color !== new_arr[k % 3].color) {
                            if (new_arr[i % 3].pattern !== new_arr[j % 3].pattern && new_arr[i % 3].pattern !== new_arr[k % 3].pattern && new_arr[j % 3].pattern !== new_arr[k % 3].pattern) {
                                if (new_arr[i % 3].number !== new_arr[j % 3].number && new_arr[i % 3].number !== new_arr[k % 3].number && new_arr[j % 3].number !== new_arr[k % 3].number) {
                                    return new_arr;
                                }
                            }
                        }
                    }
                }
            }
        }
        return false;
    }

    function resetDeckHelper(deck_) {
        let re_shuffle_deck = shuffle(deck_);

        let flag = true;
        while (flag) {
            if (checkForSet(re_shuffle_deck)) {
                flag = false;
                break;
            }
            console.log("Reshuffling");
            re_shuffle_deck = shuffle(re_shuffle_deck);
        }

        let new_set = findMeASet(re_shuffle_deck);

        let new_game_board = [];

        // Add to our starting board
        for (let i = 0; i < 12; i++) {
            new_game_board.push(re_shuffle_deck[i]);
        }

        // Remove cards from our deck since they are present on the gameboard
        for (let i = 0; i < 12; i++) {
            re_shuffle_deck.shift();
        }

        let new_deck = re_shuffle_deck;

        return { new_deck, new_game_board, new_set }
    }

    function refreshGameboard(deck_) {
        let re_shuffle_deck = shuffle(deck_);

        let flag = true;
        while (flag) {
            if (checkForSet(re_shuffle_deck)) {
                flag = false;
                break;
            }
            console.log("Reshuffling");
            re_shuffle_deck = shuffle(re_shuffle_deck);
        }

        let new_set = findMeASet(re_shuffle_deck);

        let new_game_board = [];

        // Add to our starting board
        for (let i = 0; i < 12; i++) {
            new_game_board.push(re_shuffle_deck[i]);
        }

        return { new_game_board, new_set }

    }

    // Checks only for first 12 cards to contain a matching pair
    function checkForSet(array) {
        // return true or false, true will break, false will re-shuffle
        for (let i = 0; i < 12 - 1; i++) {
            for (let j = i + 1; j < 12 - 2; j++) {
                for (let k = j + 1; k < 12 - 3; k++) {
                    new_arr = [array[i], array[j], array[k]];

                    // using modulo 3 since there are 3 indices yet 12 board slots (runs into index out of bounds error)
                    // Same Shape, Color, Pattern
                    if (new_arr[i % 3].shape === new_arr[j % 3].shape && new_arr[i % 3].shape === new_arr[k % 3].shape && new_arr[j % 3].shape === new_arr[k % 3].shape) {
                        if (new_arr[i % 3].color === new_arr[j % 3].color && new_arr[i % 3].color === new_arr[k % 3].color && new_arr[j % 3].color === new_arr[k % 3].color) {
                            if (new_arr[i % 3].pattern === new_arr[j % 3].pattern && new_arr[i % 3].pattern === new_arr[k % 3].pattern && new_arr[j % 3].pattern === new_arr[k % 3].pattern) {
                                if (new_arr[i % 3].number !== new_arr[j % 3].number && new_arr[i % 3].number !== new_arr[k % 3].number && new_arr[j % 3].number !== new_arr[k % 3].number) {
                                    return true;
                                }
                            }
                        }
                        // Different Shape, Color, Pattern
                    } else if (new_arr[i % 3].shape !== new_arr[j % 3].shape && new_arr[i % 3].shape !== new_arr[k % 3].shape && new_arr[j % 3].shape !== new_arr[k % 3].shape) {
                        if (new_arr[i % 3].color !== new_arr[j % 3].color && new_arr[i % 3].color !== new_arr[k % 3].color && new_arr[j % 3].color !== new_arr[k % 3].color) {
                            if (new_arr[i % 3].pattern !== new_arr[j % 3].pattern && new_arr[i % 3].pattern !== new_arr[k % 3].pattern && new_arr[j % 3].pattern !== new_arr[k % 3].pattern) {
                                if (new_arr[i % 3].number !== new_arr[j % 3].number && new_arr[i % 3].number !== new_arr[k % 3].number && new_arr[j % 3].number !== new_arr[k % 3].number) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // Finds card in the gameboard
    function findCard(gameboard, card_index) {
        return gameboard.find((obj) => obj.index === card_index);
    }

    // Removes card from the gameboard
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

        // Remove cards from our deck since they are present on the gameboard
        for (let i = 0; i < 12; i++) {
            shuffled_deck.shift();
        }
        return {
            ...state,
            current_deck: shuffled_deck,
            game_board: starting_board,
            num_sets: 0,
        }
    }

    if (action.type === "GET_THREE_NEW_CARDS") {
        let new_cards = [];

        let current_deck = action.cards.deck_in_state.current_deck;

        if (state.counter <= 9) {
            for (let i = 0; i < 3; i++) {
                new_cards.push(current_deck[i]);
                current_deck.shift();
                state.counter += 1
            }
            console.log(new_cards);

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
            ...state,
            game_board: new_game_board,
            counter: new_game_board.length,
        }
    }

    if (action.type === "CHECK_MATCHING_SET") {
        if (card_one.shape === card_two.shape && card_one.shape === card_three.shape && card_two.shape === card_three.shape) {
            if (card_one.color === card_two.color && card_one.color === card_three.color && card_two.color === card_three.color) {
                if (card_one.pattern === card_two.pattern && card_one.pattern === card_three.pattern && card_two.pattern === card_three.pattern) {

                    console.log("MATCHING SET FOUND!!!");

                    let add_new_set = { card_one, card_two, card_three }

                    let old_game_board = action.game_map.game_board;
                    let new_game_board = action.game_map.game_board;

                    let remove_cards = [card_one.index, card_two.index, card_three.index]

                    for (let i = 0; i < remove_cards.length; i++) {
                        let card = findCard(old_game_board, remove_cards[i]);
                        new_game_board = removeCard(new_game_board, card);
                    }

                    return {
                        ...state,
                        collected_sets: state.collected_sets.add(add_new_set),
                        num_sets: state.num_sets + 1,
                        game_board: new_game_board,
                        counter: new_game_board.length,
                        find_set: [],
                        score: state.score + 100,
                    }
                }
            }
        } else if (card_one.shape !== card_two.shape && card_one.shape !== card_three.shape && card_two.shape !== card_three.shape) {
            if (card_one.color !== card_two.color && card_one.color !== card_three.color && card_two.color !== card_three.color) {
                if (card_one.pattern !== card_two.pattern && card_one.pattern !== card_three.pattern && card_two.pattern !== card_three.pattern) {

                    console.log("MATCHING SET FOUND!!!");

                    let add_new_set = { card_one, card_two, card_three }

                    let old_game_board = action.game_map.game_board;
                    let new_game_board = action.game_map.game_board;

                    let remove_cards = [card_one.index, card_two.index, card_three.index]

                    for (let i = 0; i < remove_cards.length; i++) {
                        let card = findCard(old_game_board, remove_cards[i]);
                        new_game_board = removeCard(new_game_board, card);
                    }

                    return {
                        ...state,
                        collected_sets: state.collected_sets.add(add_new_set),
                        num_sets: state.num_sets + 1,
                        game_board: new_game_board,
                        counter: new_game_board.length,
                        find_set: [],
                        score: state.score + 100,
                    }
                }
            }
        } else {
            console.log("No matches found");
        }
    }

    if (action.type === "FIND_SET") {
        let setPair = findMeASet(state.game_board);
        if (!setPair) {
            if (state.current_deck.length < 12) {
                console.log("Error: Cannot find new set with given deck size");
                return {
                    ...state,
                }
            }
            console.log("Cant find set...\nReshuffling Gameboard...");
            setPair = resetDeckHelper(state.current_deck);

            return {
                ...state,
                find_set: setPair.new_set,
                current_deck: setPair.new_deck,
                game_board: setPair.new_game_board,
                score: state.score - 50,
            }
        }

        return {
            ...state,
            find_set: setPair,
            score: state.score - 50,
        }
    }

    if (action.type === "REFRESH_GAMEBOARD") {
        let refresh_board = refreshGameboard(state.current_deck);

        return {
            ...state,
            current_deck: state.current_deck,
            find_set: [],
            game_board: refresh_board.new_game_board,
        }
    }
    return state;
}