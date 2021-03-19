export default function (state = {
    deck: []
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

        // Initialize card objects
        // pushing to deck of 81 cards
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

        return {
            ...state,
            deck: shuffled_deck,
        }
    }
    return state
}