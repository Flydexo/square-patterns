const {POSITIONS, POS} = require('./config');

module.exports.draw = (positions) => {
    const drawing = [];
    for(let i = 0; i < positions.length; i++){
        drawing.push(positions[i]);
        if((i+1) % 3 === 0) drawing.push('\n');
    }
    console.log(drawing.join(""));
}

module.exports.a = () => {
    POS[POSITIONS.MIDDLE.MIDDLE] = 1;
}

module.exports.b = () => {
    POS[POSITIONS.BOTTOM.LEFT] = 1;
    POS[POSITIONS.TOP.RIGHT] = 1;
}

module.exports.c = () => {
    POS[POSITIONS.MIDDLE.LEFT] = 1;
    POS[POSITIONS.MIDDLE.RIGHT] = 1;
}

module.exports.e = () => {
    for(let i = 0; i <= POS.length; i++){
        let changed = false;
        if(POS[i] === 0){
            POS[i] = 1;
            changed = true;
        }else if(changed == false && POS[i] === 1){
            POS[i] = 0;
            changed = true;
        }
    }
}