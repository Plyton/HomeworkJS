'use strict'

/**
 * функция спрашивает у пользователя сумму денег
 * @returns {string} возвращает ответ пользователя
 */
 let askSumMoney = function() {
    return prompt('Какую сумму вы хотите положить на счёт в банке?');
}

/**
 * функция выдаёт сообщение о зачисление денег
 * @param {string} sum 
 * @returns {void}
 */
function programResponse(sum) {
    let resultLength = sum.length - 1;
    if(sum == "" || isNaN(sum)) {
        alert('Вы ввели некорректные данные, введите данные повторно!');
        programResponse(askSumMoney());
        return;
    }
     

    switch (sum.slice(-2)) {
        case '11':
        case '12':
        case '13':
        case '14':
            alert(`Ваша сумма в ${sum} рублей успешно зачислена`);
            return;
            
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
        default:
            alert(`Ваша сумма в ${sum} рублей успешно зачислена`);
            break;
    }
    
}

programResponse(askSumMoney())
