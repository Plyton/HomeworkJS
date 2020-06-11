'use strict'
let numberRandom = String(Math.floor(Math.random() * 999))

function getObjectFromNumber(number) {
    let resultingObject = {}
    if (number < 0 || number > 999 || !Number.isInteger(Number(number)) || isNaN(number)) {
        return resultingObject
    } else {
        if (number.length == 3) {
            resultingObject.hundreds = Number(number[0])
            resultingObject.tens = Number(number[1])
            resultingObject.units = Number(number[2])
            return resultingObject
        } else if (number.length == 2) {
            resultingObject.hundreds = 0
            resultingObject.tens = Number(number[0])
            resultingObject.units = Number(number[1])
            return resultingObject
        } else if (number.length == 3) {
            resultingObject.hundreds = 0
            resultingObject.tens = 0
            resultingObject.units = Number(number[0])
            return resultingObject
        }

    }

}

let result = getObjectFromNumber(numberRandom)