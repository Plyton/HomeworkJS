/**
 * Логика игры
 * @property {sumUser} массив с суммами выигыша игрока
 * @method  getAnswer получает ответ от игкрока
 * @method  getQuestion проверяет ответ от игрока и задаёт следующий вопрос
 * @method  getSumTotal считает общую сумму выигрыша если игрок победил
 */
let mover = {
    sumUser: [1000, 2000, 5000, 10000, 25000],
    getAnswer() {
        let userAnswer = prompt('Выберите правильный ответ (A, B, C, D) или "Отмена" для выхода')
        return userAnswer
    },
    getQuestion(answerUser) {

        if (answerUser[0] === answer.answer1) {
            
            return question.question2;
        }
        if (answerUser[1] === answer.answer2) {
           
            return question.question3
        }
        if (answerUser[2] === answer.answer3) {
            
            return question.question4
        }
        if (answerUser[3] === answer.answer4) {
            
            return question.question5
        }
        if (answerUser[4] === answer.answer5) {
            return
        } else {
            return null
        }

    },
    getSumTotal() {
        let sumTotal = 0
        for (let sum of this.sumUser) {
            sumTotal += sum
        }
        return sumTotal
    }

}
