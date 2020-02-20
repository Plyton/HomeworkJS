// третье задание
var event, ok;
var answer;
var sum = [];

do {
   // ok = false;
    event = +prompt('Вопрос 1 \n' + question.qa + question.a1 + question.a2 +
        question.a3 + question.a4 + '-1 - Выход из игры');
   answer = correctAnswer(event);
    if (answer == true && event == question.acorrect){
          alert('Ответ верный\n Ваш выигрыш составил 1000р');
           
    sum[0] = 1000;
    } else {
        alert('Вы проиграли!');
        answer = false;
        break;
    }
    
    if(event != -1){
        alert('Попробуйте снова!');
        
    }
    
    else if (event == -1) {
        break;
    }   
    
    
} while (answer != true);

if(answer == false){
   switch(event){
        case -1:
            break;
    }
}else{
do {
   // ok = false;
    event = +prompt('Вопрос 2 \n' + question.qb + question.b1 + question.b2 +
        question.b3 + question.b4 + '-1 - Выход из игры');
   answer = correctAnswer(event);
    if (answer == true && event == question.bcorrect){
          alert('Ответ верный\n Ваш выигрыш составил 10000р');
           
    sum[0] = 10000;
    } else {
        alert('Вы проиграли!');
        answer = false;
        break;
    }
    
    if(event != -1){
        alert('Попробуйте снова!');
        
    }
    
    else if (event == -1) {
        break;
    }   
    
    
} while (answer != true);
}
if(answer == false){
    switch(event){
        case -1:
            break;
        default:
            break;
    }
}else{
do {
   // ok = false;
    event = +prompt('Вопрос 3 \n' + question.qc + question.c1 + question.c2 +
        question.c3 + question.c4 + '-1 - Выход из игры');
   answer = correctAnswer(event);
    if (answer == true && event == question.ccorrect){
          alert('Ответ верный\n Ваш выигрыш составил 50000р');
           
    sum[0] = 50000;
    } else {
        alert('Вы проиграли!');
        answer = false;
        break;
    }
    
    if(event != -1){
        alert('Попробуйте снова!');
        
    }
    
    else if (event == -1) {
        break;
    }   
    
} while (answer != true);
}
if(answer == false){
     switch(event){
        case -1:
            break;
    }
}else{
do {
   // ok = false;
    event = +prompt('Вопрос 4 \n' + question.qd + question.d1 + question.d2 +
        question.d3 + question.d4 + '-1 - Выход из игры');
   answer = correctAnswer(event);
    if (answer == true && event == question.dcorrect){
          alert('Ответ верный\n Ваш выигрыш составил 100000р');
           
    sum[0] = 100000;
    } else {
        alert('Вы проиграли!');
        answer = false;
        break;
    }
    
    if(event != -1){
        alert('Попробуйте снова!');
        
    }
    
    else if (event == -1) {
        break;
    }   
    
    
} while (answer != true);
}

/*switch (event) {
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
        break;
}*/



alert('Спасибо за игру');

//------------------------------------------
/*function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}*/



function correctAnswer(correct) {
if (event < 5 && event > 0){
        return true;
    }  else if(event == -1) {
        return false;
    }
    else {
        alert('Такого ответа нет');
                return false;
        
    }
}
