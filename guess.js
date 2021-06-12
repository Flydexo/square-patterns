const {POS, POSITIONS} = require("./config");

let guessed = ["not guessed"];

if(POS.includes(1) && !POS.includes(0)) guessed[0] = "E";
if(POS.includes(0) && !POS.includes(1)) guessed[0] = "";

// for the moment ingnoring e

if(POS[POSITIONS.MIDDLE.MIDDLE] === 1 && guessed[0] == "not guessed"){
    guessed.push("A");
}
if(POS[POSITIONS.TOP.RIGHT] === 1 && guessed[0] == "not guessed"){
    guessed.push("B");
}
if(POS[POSITIONS.MIDDLE.RIGHT] === 1 && guessed[0] == "not guessed"){
    guessed.push("C");
}
if(POS[POSITIONS.TOP.MIDDLE] === 1 && guessed[0] == "not guessed"){

    if(POS[POSITIONS.MIDDLE.MIDDLE] === 0 && guessed[0] == "not guessed"){
        guessed.push("A");
    }

    if(POS[POSITIONS.TOP.RIGHT] === 0 && guessed[0] == "not guessed"){
        guessed.push("B");
    }

    if(POS[POSITIONS.MIDDLE.RIGHT] === 0 && guessed[0] == "not guessed"){
        guessed.push("C");
    }

    guessed.push("E");

}
guessed[0] = "result: "
console.log(guessed);