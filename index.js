const {RULE, POSITIONS, POS} = require('./config');
const {draw, a, b, c, e} = require('./functions');

const ruleArray = RULE.split("");

ruleArray.forEach(letter => {
    switch(letter){
        case "A":
            a();
            break;
        case "B":
            b();
            break;
        case "C":
            c();
            break;
        case "E":
            e();
            break;
        default:
            break;
    }
})

draw(POS);