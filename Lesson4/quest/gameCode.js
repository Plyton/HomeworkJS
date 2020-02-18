// второе задание
var event, ok;
var answer = [];

do { 
    ok = false;
    event = +prompt('ОКНО 1 \n' + works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    answer[0] = event;
    if (event == -1) {
        break;
    } else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);
switch (event) {
    case 1:
        do {
            ok = false;
            event = +prompt('ОКНО 2 \n' + works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            answer[1] = event;
            if (event == -1) {
                break;
            } else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: 
                do {
                    ok = false;
                    event = +prompt('ОКНО 4 \n' + works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    answer[3] = event;
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case 2:
                do {
                    ok = false;
                    event = +prompt('ОКНО 4 \n' + works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    answer[3] = event;
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case -1: 
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: 
        do {
            ok = false;
            event = +prompt('ОКНО 3 \n' + works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            answer[2] = event;
            if (event == -1) {
                break;
            } else {
                ok = isAnswer(works.c0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: 
                do {
                    ok = false;
                    event = +prompt('ОКНО 4 \n' + works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    answer[3] = event;
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case 2: 
                do {
                    ok = false;
                    event = +prompt('ОКНО 4 \n' + works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    answer[3] = event;
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case -1: 
                break;
            default:
                alert('Ошибка');
        }


        break;
    case -1: 
        break;
    default:
        alert('Ошибка');
}
do {
    ok = true;
    var answerUser = +prompt('Введите номер окна \n' +
        '1 - Первое окно \n' +
        '2 - Второе окно \n' +
        '3 - Третье окно \n' +
        '4 - Четвёртое окно \n' +
        '-1 - Я хочу выйти \n' );
   

    if (answerUser < -2 || answerUser > 4 || isNaN(answerUser) || !isFinite(answerUser)) {
        alert('Ошибка! Введите корректное значение');
        ok = false;
    } else {
        ok = true;
        switch (answerUser) {
            case 1:
                alert(works.a00 + '\n' + 'Ответ: ' + answer[0]);
                break;
            case 2:
                alert(works.b00 + '\n' + 'Ответ: ' + answer[1]);
                break;
            case 3:
                alert(works.c00 + '\n' + 'Ответ: ' + answer[2]);
                break;
            case 4:
                alert(works.d00 + '\n' + 'Ответ: ' + answer[3]);
                break;
            case -1:
                break;


        }
    }



}
while (!ok, answerUser != -1)

alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}
