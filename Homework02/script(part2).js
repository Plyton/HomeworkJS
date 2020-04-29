//четвёртое и пятое задание

let sum = (a, b) => a + b;

let sub = (a, b) => a - b;

let mul = (a, b) => a * b;

let div = (a, b) => {
   if (b == 0){
    throw new Error("На ноль делить нельзя")
   } 
    return a / b;
}

/**
 * Функция выполняет одну из арифметические операций, в заисимости от переданного значения аргумента operation
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation строка с названием операции 
 * @throws {Error} если переданы некорректные данные
 * @returns {number} возвращает значение арифметической операции
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "-":
            return sub(arg1, arg2);
            
        case "+":
            return sum(arg1, arg2);
            
        case "*":
            return mul(arg1, arg2);
            
        case "/":
            return div(arg1, arg2);
            
        default:
             throw new Error("Введены некорректные данные");


    }
}

let result = mathOperation(10, 5, '/');
console.log(result);
