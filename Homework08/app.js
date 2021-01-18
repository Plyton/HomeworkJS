class Settings {
    constructor(param) {
        this.rowCount = 21;
        this.colCount = 21;

        this._init(param);
    }
    _init(param) {
        let defaultParams = { rowCount: 21, colCount: 21, bomb: 5, };
        Object.assign(defaultParams, param);

        this.bomb = defaultParams.bomb;
    }
}

class Status {
    constructor() {
        this.status = 'playing';
    }
    setPlaying() {
        this.status = 'playing';
    }

    }

    isPlaying() {
        return this.status === 'playing';
    }

    }
}

class Board {
    constructor(settings) {

        this.settings = settings;
        this._init();
    }

    _init() {

            for (let col = 0; col < this.settings.colCount; col++) {
                let td = document.createElement('td');
                tr.appendChild(td);
            }
        }

    }

    renderBomb(coordsBomb) {
        let bodyElems = this.getBombsCoords(coordsBomb.bomb);
        bodyElems.forEach(td => {
            td.classList.add('bomb');
        })
    }


    getBombsCoords(bombCoords) {
        if (bombCoords.length > 0) {
            let coordsElems = [];
            for (let elem of bombCoords) {
                let tdEl = this.getCellEl(elem.x, elem.y);
                coordsElems.push(tdEl);
            }
            return coordsElems;
        }
    }


    }

    isCellBomb(event) {
        return event.target.className === 'bomb';

    }

    getCellEl(x, y) {
        return this.boardEl.querySelector(`tr:nth-child(${y}) td:nth-child(${x})`);
    }
}

class Bomb {
    constructor(settings, board) {
        this.bomb = [];
        this.settings = settings;
        this.board = board;

    }

    setNewBomb() {
        const bomb = this.generateRandomCoordinates();
        this.board.renderBomb(bomb);
    }


        while (this.bomb.length !== this.settings.bomb) {
            let bombCcoords = {
                x: Math.floor(Math.random() * this.settings.colCount) + 1,
                y: Math.floor(Math.random() * this.settings.rowCount) + 1,
            }

    }
}

class Game {

        this.settings = settings;
        this.board = board;
        this.status = status;
        this.bomb = bomb;

        this._init();
    }

    _init() {

    }

    cellClickHandler(event) {
        if (!this.isCorrectClick(event)) {
            return;
        }


    isClickByCell(event) {
        return event.target.tagName === 'TD';
    };


            return true;
        }
        return false;
    }

})