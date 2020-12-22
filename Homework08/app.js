class Settings {
    constructor(param) {
        this.rowCount = 21;
        this.colCount = 21;
        this.bomb = 2;
        this._init(param);
    }
    _init(param) {
        let defaultParams = { rowCount: 21, colCount: 21, bomb: 5, };
        Object.assign(defaultParams, param);
        if (defaultParams.rowCount > 30 || defaultParams.rowCount < 10) {
            throw new Error('Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30].');
        }
        this.rowCount = defaultParams.rowCount;
        if (defaultParams.colCount > 30 || defaultParams.colCount < 10) {
            throw new Error('Неверные настройки, значение colCount должно быть в диапазоне [10, 30].');
        }
        this.colCount = defaultParams.colCount;

        if (defaultParams.bomb > 40 || defaultParams.bomb < 2) {
            throw new Error('Неверные настройки, значение bomb должно быть в диапазоне [2, 32].');
        }
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
    setPaused() {
        this.status = 'paused';
    }

    setGameOver() {
        this.status = 'game over'
    }

    isPlaying() {
        return this.status === 'playing';
    }
    isPaused() {
        return this.status === 'paused';
    }
}

class Board {
    constructor(settings) {
        this.boardEl = document.getElementById('game');
        this.settings = settings;
        this._init();
    }

    _init() {
        this.renderBoard();
    }

    renderNumber(event) {
        event.target.textContent = '1';
        event.target.classList.add('td--background');

    }

    cellFill(tdElems) {
        tdElems.forEach(tdEl => {
            tdEl.classList.add('td--background');
        })
    }


    renderBoard() {
        for (let row = 0; row < this.settings.rowCount; row++) {
            let tr = document.createElement('tr');
            this.boardEl.appendChild(tr);
            for (let col = 0; col < this.settings.colCount; col++) {
                let td = document.createElement('td');
                tr.appendChild(td);
            }
        }
        return this.boardEl;
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

    checkForABomb(tdElems, event) {
        tdElems.forEach(tdEl => {
            if (tdEl.classList.contains('bomb')) {
                this.renderNumber(event);
                return true;
            }
            return false;
        })

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
        this._init();
    }

    _init() {
        this.setNewBomb();

    }

    setNewBomb() {
        const bomb = this.generateRandomCoordinates();
        this.board.renderBomb(bomb);
    }

    // setBomb() {
    //     this.board.renderBomb(this);
    // }

    generateRandomCoordinates() {
        while (this.bomb.length !== this.settings.bomb) {
            let bombCcoords = {
                x: Math.floor(Math.random() * this.settings.colCount) + 1,
                y: Math.floor(Math.random() * this.settings.rowCount) + 1,
            }

            let cell = this.board.getCellEl(bombCcoords.x, bombCcoords.y)
            if (cell.classList.contains('bomb')) {
                continue;
            }

            this.bomb.push(bombCcoords);

        }
        return this;
    }
}

class Game {
    constructor(settings, board, status, bomb) {
        this.settings = settings;
        this.board = board;
        this.status = status;
        this.bomb = bomb;
        this._init();
    }

    _init() {
        this.initEventHandlers();
    }

    initEventHandlers() {

        this.board.boardEl.addEventListener('click', event => this.cellClickHandler(event));
    }

    cellClickHandler(event) {
        if (!this.isCorrectClick(event)) {
            return;
        }

        if (this.isGameWin()) {
            return;
        }

        if (this.isGameLost(event)) {
            return;
        }

        this.checkNearbyCells(event)
    }

    isCorrectClick(event) {
        return this.isStatusPlaying() && this.isClickByCell(event);
    };

    isStatusPlaying() {
        return this.status.isPlaying();
    };

    isClickByCell(event) {
        return event.target.tagName === 'TD';
    };

    checkNearbyCells(event) {
        // this.getCoordsCell(event);
        let x = event.target.cellIndex + 1;
        let y = event.target.parentNode.rowIndex + 1;
        let n = 1;
        let i = 1;
        let p = n;
        let tdElems = [];
        let coordsNearbyCells = [];
        let coordsNextNearbyCells = [];
        while (true) {
            coordsNearbyCells = [
                { x: x + n, y: y },
                { x: x - n, y: y },
                { x: x, y: y + n },
                { x: x + n, y: y + n },
                { x: x - n, y: y + n },
                { x: x, y: y - n },
                { x: x + n, y: y - n },
                { x: x - n, y: y - n },
            ]

            for (let coords of coordsNearbyCells) {
                let tdEl = this.board.getCellEl(coords.x, coords.y);
                tdElems.push(tdEl);
            }

            this.board.cellFill(tdElems);
            tdElems = [];

            i++;

            p = n;

            while (p >= 0) {
                coordsNextNearbyCells = [
                    { x: x + i, y: y - p },
                    { x: x + p, y: y - i },
                    { x: x - i, y: y - p },
                    { x: x - p, y: y - i },
                    { x: x + i, y: y + p },
                    { x: x + p, y: y + i },
                    { x: x - i, y: y + p },
                    { x: x - p, y: y + i },
                ]

                if (!this.board.checkForABomb(tdElems, event)) {


                    for (let coords of coordsNextNearbyCells) {
                        let tdEl = this.board.getCellEl(coords.x, coords.y);
                        tdElems.push(tdEl);
                    }
                    this.board.cellFill(tdElems);
                    tdElems = [];
                    p--;
                    
                }
                else return
            }
            n++;
        }
    }

    isGameWin() {

    }


    isGameLost(event) {
        if (this.board.isCellBomb(event)) {
            this.setMessage('Вы выиграли');
            this.status.setGameOver()
            return true;
        }
        return false;
    }

}

window.addEventListener('load', () => {
    const settings = new Settings({ rowCount: 16, winlength: 15, bomb: 5 });
    const status = new Status;
    const board = new Board(settings);
    const bomb = new Bomb(settings, board);
    const game = new Game(settings, board, status, bomb);
})