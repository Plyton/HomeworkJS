'use strict'
/**
 *@method _renderBoard - отрисовывает поле
 *@method generateBoard - генерирует поле
 *@method setDigitsLetters - установка координат клеток 
 *@method setSymbolChess - установка шахматныx фигур
 *@see https://metanit.com/web/javascript/4.12.php
 *@class Chess 
 */
class Chess {
    constructor() {
        this.letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
        this.digits = ['', 8, 7, 6, 5, 4, 3, 2, 1, ''];
        this.symbolChessWhite = ['', '&#9814', '&#9816', '&#9815', '&#9812', '&#9813', '&#9815', '&#9816', '&#9814', '&#9817'];
        this.symbolChessBlack = ['', '&#9820', '&#9822', '&#9821', '&#9820', '&#9818', '&#9821', '&#9822', '&#9820', '&#9823'];
        this.rowsCount = 10;
        this.colsCount = 10;
        this._renderBoard();
    }

    _renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML('afterbegin', result);
        this.setDigitsLetters();
        this.setSymbolChess();
    }

    generateBoard() {
        let board = '<div class="container">';
        for (let row = 0; row < this.rowsCount; row++) {
            for (let col = 0; col < this.colsCount; col++) {
                if (col % 2 !== 0 && row % 2 !== 0) {
                    board += `<div class='white' data-number="${row}${col}"></div>`;
                } else if (col % 2 !== 0 && row % 2 == 0) {
                    board += `<div class='black' data-number="${row}${col}"></div>`;
                } else if (col % 2 == 0 && row % 2 !== 0) {
                    board += `<div class='black' data-number="${row}${col}"></div>`;
                } else if (col % 2 == 0 && row % 2 == 0) {
                    board += `<div class='white' data-number="${row}${col}"></div>`;
                }
            }
        }
        board += '</div>';
        return board;
    }

    setDigitsLetters() {
        for (let row = 0; row < this.rowsCount; row++) {
            for (let col = 0; col < this.colsCount; col++) {
                if (row == 0) {
                    let div = document.querySelector(`[data-number="${row}${col}"]`);
                    div.classList.remove('black', 'white');
                    div.classList.add('letters-digits', 'letters-digits--rotate');
                    div.innerText = `${this.letters[col]}`;
                } else if (row == 9) {
                    let div = document.querySelector(`[data-number="${row}${col}"]`);
                    div.classList.remove('black', 'white');
                    div.classList.add('letters-digits');
                    div.innerText = `${this.letters[col]}`;
                } else if (col == 0) {
                    let div = document.querySelector(`[data-number="${row}${col}"]`);
                    div.classList.remove('black', 'white');
                    div.classList.add('letters-digits');
                    div.innerText = `${this.digits[row]}`;
                } else if (col == 9) {
                    let div = document.querySelector(`[data-number="${row}${col}"]`);
                    div.classList.remove('black', 'white');
                    div.classList.add('letters-digits', 'letters-digits--rotate');
                    div.innerText = `${this.digits[row]}`;
                }
            }
        }
    }

    setSymbolChess() {
        for (let row = 0; row < this.rowsCount; row++) {
            for (let col = 0; col < this.colsCount; col++) {
                if (row == 1 && col > 0 && col < 9) {
                    let div = document.querySelector(`[data-number="${row}${col}"]`);
                    div.innerHTML = `${this.symbolChessWhite[col]}`;
                } else if (row == 8 && col > 0 && col < 9) {
                    let div = document.querySelector(`[data-number="${row}${col}"]`);
                    div.innerHTML = `${this.symbolChessBlack[col]}`;
                } else if (row == 2 && col > 0 && col < 9) {
                    let div = document.querySelector(`[data-number="${row}${col}"]`);
                    div.innerHTML = `${this.symbolChessWhite.slice(-1)}`;
                } else if (row == 7 && col > 0 && col < 9) {
                    let div = document.querySelector(`[data-number="${row}${col}"]`);
                    div.innerHTML = `${this.symbolChessBlack.slice(-1)}`;
                }
            }
        }
    }
}

let chess = new Chess();

//                //цифры и буквы
//                if (row == 0) {
//                    board += `<div class='letters-digits'>${this.letters[col]}</div>`;
//                } else if (col == 0) {
//                    board += `<div class='letters-digits'>${this.digits[row]}</div>`;
//                //белые фигуры
//                } else if (col % 2 !== 0 && row % 2 !== 0 && row == 1) {
//                    board += `<div class='white'>${this.symbolChessWhite[col]}</div>`;
//                } else if (col % 2 == 0 && row % 2 !== 0 && row == 1) {
//                    board += `<div class='black'>${this.symbolChessWhite[col]}</div>`;
//                } else if (col % 2 !== 0 && row % 2 == 0 && row == 2) {
//                    board += `<div class='black'>${this.symbolChessWhite.slice(-1)}</div>`;
//                } else if (col % 2 == 0 && row % 2 == 0 && row == 2) {
//                    board += `<div class='white'>${this.symbolChessWhite.slice(-1)}</div>`;
//                //чёрные фигуры
//                } else if (col % 2 !== 0 && row % 2 !== 0 && row == 7) {
//                    board += `<div class='white'>${this.symbolChessBlack.slice(-1)}</div>`;
//                } else if (col % 2 == 0 && row % 2 !== 0 && row == 7) {
//                    board += `<div class='black'>${this.symbolChessBlack.slice(-1)}</div>`;
//                } else if (col % 2 !== 0 && row % 2 == 0 && row == 8) {
//                    board += `<div class='black'>${this.symbolChessBlack[col]}</div>`;
//                } else if (col % 2 == 0 && row % 2 == 0 && row == 8) {
//                    board += `<div class='white'>${this.symbolChessBlack[col]}</div>`;