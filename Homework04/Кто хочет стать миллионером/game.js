/**
 * Инициализация и запук игры
 * @method game Процесс игры
 * @method run Инициализация игры
 */
let game = {
    run() {
        console.log(question.question1)
        for (let i = 0; i < 5; i++) {
            let answerUser = []
            answerUser[i] = mover.getAnswer()
            let question = mover.getQuestion(answerUser)
            if (question === null) {
                console.clear()
                console.log('Вы проиграли! Ваш выигрыш 0р')
                return
            }
            
            console.clear()
            console.log(`Ответ верный, вы выиграли ${mover.sumUser[i]}р`)
            console.log(question)
        }

        console.clear()
        console.log(`Вы победили! Ваш выигрыш составил ${mover.getSumTotal()}р`)

    },
    init() {
        console.log('Добро пожаловать в игру "Кто хочет стать миллионером!"')
        console.log('Для начала игры введите game.run()')
    }
}

game.init()