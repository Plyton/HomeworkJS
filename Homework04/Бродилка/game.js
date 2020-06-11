/**
 * @method run Запускает игру
 * @method init Инициализирует игру
 */
let game = {
    run() {
        while (true) {
            const direction = mover.getDirection();
            if (direction === null) {
                console.log('Игра окончена');
                return;
            }
            const nextPoint = mover.getPosition(direction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();

        }

    },

    init() {
        console.log('Ваше положение на поле обозначено буквой o')
        renderer.render();
        console.log('Для начала игра введите game.run() и нажмите кнопку Enter')
    }

}

game.init();