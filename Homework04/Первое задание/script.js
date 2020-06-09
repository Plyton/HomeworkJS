'use strict'
let numberRandom = String(Math.floor(Math.random() * 999))

function getObjectFromNumber(number) {
    let resultingObject = {}
    if ((number < 0 && number > 999) || !Number.isInteger(Number(number)) || isNaN(number)) {
        return resultingObject
    } else {
        resultingObject.hundreds = Number(number[0])
        resultingObject.tens = number[1] === undefined ? 0 : Number(number[1])
        resultingObject.units = number[2] === undefined ? 0 : Number(number[2])
        return resultingObject
    }

}

let result = getObjectFromNumber(numberRandom)