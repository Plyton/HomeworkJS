// третье задание
var event, ok;
var answer;
var sum = [];

do {
    event = +prompt('Вопрос 1 \n' + question.qa + question.a1 + question.a2 +
        question.a3 + question.a4 + '-1 - Выход из игры');
    answer = correctAnswer(event);
    if (answer == true && event == question.acorrect) {
        alert('Ответ верный\n Ваш выигрыш составил 1000р');

        sum[0] = 1000;
    } else {
        alert('Вы проиграли!');
        answer = false;
        break;
    }

    if (event != -1) {
        alert('Следующий вопрос!');

    } else if (event == -1) {
        break;
    }


} while (answer != true);

if (answer == false) {
    switch (event) {
        case -1:
            break;
    }
} else {
    do {
        event = +prompt('Вопрос 2 \n' + question.qb + question.b1 + question.b2 +
            question.b3 + question.b4 + '-1 - Выход из игры');
        answer = correctAnswer(event);
        if (answer == true && event == question.bcorrect) {
            alert('Ответ верный\n Ваш выигрыш составил 10000р');

            sum[1] = 10000;
        } else {
            alert('Вы проиграли!');
            answer = false;
            break;
        }

        if (event != -1) {
            alert('Следующий вопрос!');

        } else if (event == -1) {
            break;
        }


    } while (answer != true);
}
if (answer == false) {
    switch (event) {
        case -1:
            break;
        default:
            break;
    }
} else {
    do {
        // ok = false;
        event = +prompt('Вопрос 3 \n' + question.qc + question.c1 + question.c2 +
            question.c3 + question.c4 + '-1 - Выход из игры');
        answer = correctAnswer(event);
        if (answer == true && event == question.ccorrect) {
            alert('Ответ верный\n Ваш выигрыш составил 50000р');

            sum[2] = 50000;
        } else {
            alert('Вы проиграли!');
            answer = false;
            break;
        }

        if (event != -1) {
            alert('Следующий вопрос!');

        } else if (event == -1) {
            break;
        }

    } while (answer != true);
}
if (answer == false) {
    switch (event) {
        case -1:
            break;
    }
} else {
    do {
        event = +prompt('Вопрос 4 \n' + question.qd + question.d1 + question.d2 +
            question.d3 + question.d4 + '-1 - Выход из игры');
        answer = correctAnswer(event);
        if (answer == true && event == question.dcorrect) {
            alert('Ответ верный\n Ваш выигрыш составил 100000р');

            sum[3] = 100000;
        } else {
            alert('Вы проиграли!');
            answer = false;
            break;
        }

        if (event != -1) {
            alert('Вы победили!');

        } else if (event == -1) {
            break;
        }


    } while (answer != true);
}


var win = 0;
if (sum.length == 4) {
    for (var i = 0; i < sum.length; i++) {
        win += sum[i];
    }
    alert('Ваш выигрыш сосотавил: ' + win + ' рублей');
}
alert('Спасибо за игру');

//------------------------------------------

function correctAnswer(correct) {
    if (event < 5 && event > 0) {
        return true;
    } else if (event == -1) {
        return false;
    } else {
        alert('Такого ответа нет');
        return false;

    }
}
