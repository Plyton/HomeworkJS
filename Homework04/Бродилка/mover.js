let mover = {
    /**
     * Получает и отдаёт направление от пользователя.
     * @returns {int} Возвращает направление от пользовател
     */
    getDirection() {
        const availableDirection = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            //Запрашиваем от пользователя направление
            let direction = parseInt(prompt('Введите направление в котором вы хотите передвигаться (1, 2, 3, 4, 6, 7, 8, 9) или "Отмена" для выхода'))
            //Проверяем введённые значения
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirection.includes(direction)) {
                alert('Введите направление в котором вы хотите передвигаться (1, 2, 3, 4, 6, 7, 8, 9)');
                continue;
            }
            return direction;
        }
    },
    /**
     * Меняет позицию игрока на поле
     * @param {int} direction Принимает направление выбранное пользователем
     * @returns {{x: int, y: int}} nextPosition Новые координаты игрока на поле
     */
    getPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y

        }
        switch (direction) {
            case 1:
                (nextPosition.y++) + (nextPosition.x--);
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                (nextPosition.y++) + (nextPosition.x++);
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                (nextPosition.y--) + (nextPosition.x--);
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                (nextPosition.y--) + (nextPosition.x);

        }

        return nextPosition;
    }


}
