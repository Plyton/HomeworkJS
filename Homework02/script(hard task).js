/**
 * функция спрашивает у пользователя сумму денег
 * @returns {string} 
 */
function askSumMoney() {
    return prompt('Какую сумму вы хотите положить на счёт в банке?');
}

/**
 * функция выдаёт сообщение о зачисление денег
 * @param {string} sum 
 * @returns {void}
 */
function programResponse(sum) {
    let resultLength = sum.length - 1;
    switch (sum) {
        case '11':
        case '12':
        case '13':
        case '14':
        case '15':
        case '16':
        case '17':
        case '18':
        case '19':
            alert(`Ваша сумма в ${sum} рублей успешно зачислена`);
            break;
    }

    switch (sum.charAt(resultLength)) {
        case '1':
            alert(`Ваша сумма в ${sum} рубль успешно зачислена`);
            break;
        case '2':
        case '3':
        case '4':
            alert(`Ваша сумма в ${sum} рубля успешно зачислена`);
            break;
        case '0':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            alert(`Ваша сумма в ${sum} рублей успешно зачислена`);
            break;
    }

}


programResponse(askSumMoney())
