export default function SVGIconReducer(state = {
    svg_icons: [],
}, action) {

    let colors = ['red', 'blue', 'green'];
    let patterns = ['none', 'solid', 'dashed'];
    let numbers = ['1', '2', '3'];
    let shapes = ['circle', 'square', 'triangle'];

    let svg_array = new Set();

    if (action.type === "INITIALIZE_SVG_LIST") {
        for (const shape of shapes) {
            for (const color of colors) {
                for (const pattern of patterns) {
                    for (const number of numbers) {
                        // svg_array.add({ shape, color, pattern, number });
                        svg_array.add({ shape, color, pattern, number })
                    }
                }
            }
        }
        return {
            svg_icons: svg_array
        }
    }
    return state
}