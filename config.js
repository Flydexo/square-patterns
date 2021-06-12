module.exports.POSITIONS = {
    TOP: {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2
    },
    MIDDLE: {
        LEFT: 3,
        MIDDLE: 4,
        RIGHT: 5
    },
    BOTTOM: {
        LEFT: 6,
        MIDDLE: 7,
        RIGHT: 8
    }
};

module.exports.POS = [
    0,0,0,
    0,0,0,
    0,0,0
];

// 0 = white
// 1 = black

module.exports.RULE = "ABE";

// A = 000
//     010
//     000

// B = 001
//     000
//     100

// C = 000
//     101
//     000

// E = invert 0 and 1