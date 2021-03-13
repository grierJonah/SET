export default function (state = {
    num_cards_on_screen: 0,
    card_array: [],
    svg_icons: new Set(),
}, action) {

    let colors = ['red', 'blue', 'green'];
    let patterns = ['none', 'solid', 'dashed'];
    let numbers = ['1', '2', '3'];
    let shapes = ['circle', 'square', 'triangle'];
    let svg_array = [];
    let svg_set = new Set();

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


    if (action.type === "NEW_GAME") {

        // Initialize SVG's in beginning
        // Get random index between 0-81 and add the object into the initial_card_deck
        for (const shape of shapes) {
            for (const color of colors) {
                for (const pattern of patterns) {
                    for (const number of numbers) {
                        svg_array.push({ shape, color, pattern, number })
                    }
                }
            }
        }

        // randomize ordering of the svg objects
        svg_array = shuffle(svg_array);

        let initial_deck = 0
        let initial_card_array = []
        for (let i = 0; i < 12; i++) {
            initial_deck += 1
            initial_card_array.push(svg_array[i])
        }

        // Return Set instead of array
        svg_array.forEach(item => svg_set.add(item));

        return {
            ...state,
            num_cards_on_screen: initial_deck,
            card_array: initial_card_array,
            svg_icons: svg_set,
        }
    }
    return state
}