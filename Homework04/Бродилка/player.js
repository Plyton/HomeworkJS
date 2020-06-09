/**
 * Объект с координатами игрока
 * @property {int} x 
 * @property {int} y 
 */
const player = {
    x: 0,
    y: 0,
    /**
     * Передаёт координаты игрока
     * @param {int} nextPoint Следующие координаты игрока
     */
    move(nextPoint){
        this.x = nextPoint.x < 0 ? nextPoint.x = 0 : nextPoint.x > 9 ? nextPoint.x = 9 : nextPoint.x;
        this.y = nextPoint.y < 0 ? nextPoint.y = 0 : nextPoint.y > 9 ? nextPoint.y = 9 : nextPoint.y;
    }
}