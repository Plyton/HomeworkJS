'use strict'

class Chess {
    constructor() {
        this.letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        this.digits = ['', 8, 7, 6, 5, 4, 3, 2, 1];
        this.symbolChessWhite = ['', '&#9814', '&#9816', '&#9815', '&#9812', '&#9813', '&#9815', '&#9816', '&#9814', '&#9817'];
        this.symbolChessBlack = ['', '&#9820', '&#9822', '&#9821', '&#9820', '&#9818', '&#9821', '&#9822', '&#9820', '&#9823'];
        this.rowsCount = 9;
        this.colsCount = 9;
        this._renderBoard();

    }

    _renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML('afterbegin', result);
    }

    generateBoard() {
        let board = '';
        for (let row = 0; row < this.rowsCount; row++) {

            for (let col = 0; col < this.colsCount; col++) {
                //цифры и буквы
                if (row == 0) {
                    board += `<div class='letters-digits'>${this.letters[col]}</div>`;
                } else if (col == 0) {
                    board += `<div class='letters-digits'>${this.digits[row]}</div>`;
                //белые фигуры
                } else if (col % 2 !== 0 && row % 2 !== 0 && row == 1) {
                    board += `<div class='white'>${this.symbolChessWhite[col]}</div>`;
                } else if (col % 2 == 0 && row % 2 !== 0 && row == 1) {
                    board += `<div class='black'>${this.symbolChessWhite[col]}</div>`;
                } else if (col % 2 !== 0 && row % 2 == 0 && row == 2) {
                    board += `<div class='black'>${this.symbolChessWhite.slice(-1)}</div>`;
                } else if (col % 2 == 0 && row % 2 == 0 && row == 2) {
                    board += `<div class='white'>${this.symbolChessWhite.slice(-1)}</div>`;
                //чёрные фигуры
                } else if (col % 2 !== 0 && row % 2 !== 0 && row == 7) {
                    board += `<div class='white'>${this.symbolChessBlack.slice(-1)}</div>`;
                } else if (col % 2 == 0 && row % 2 !== 0 && row == 7) {
                    board += `<div class='black'>${this.symbolChessBlack.slice(-1)}</div>`;
                } else if (col % 2 !== 0 && row % 2 == 0 && row == 8) {
                    board += `<div class='black'>${this.symbolChessBlack[col]}</div>`;
                } else if (col % 2 == 0 && row % 2 == 0 && row == 8) {
                    board += `<div class='white'>${this.symbolChessBlack[col]}</div>`;
                //пустые клетки
                } else if (col % 2 !== 0 && row % 2 !== 0) {
                    board += `<div class='white'></div>`;
                } else if (col % 2 !== 0 && row % 2 == 0) {
                    board += `<div class='black'></div>`;
                } else if (col % 2 == 0 && row % 2 !== 0) {
                    board += `<div class='black'></div>`;
                } else if (col % 2 == 0 && row % 2 == 0) {
                    board += `<div class='white'></div>`;
                }
            }

        }
        return board;
    }

}

let chess = new Chess();