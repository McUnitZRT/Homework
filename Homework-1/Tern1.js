let a = Math.floor(Math.random() * 100);
console.log(`a = ${a}`); 
console.log((a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7));

(a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с помощью console.log()

//Через if...else:
if(a > 10){
    if(a > 5){ 
        console.log((2 * a) + 1);
    }
    else{
        if(a < 3){
            if(1 > 4){ //Никогда не выполнится
                console.log(5);
            }
            else{ 
                if(a % 2 == 0){
                    console.log(6);
                }
                else{
                    console.log(7);
                }
            }
        }
        else{
            if((2 * (a - 2)) > 4){ 
                console.log(5);
            }
            else{ 
                if(a % 2 == 0){
                    console.log(6);
                }
                else{
                    console.log(7);
                }
            }
        }
    }
}
else if(a <= 10){
    if((a * 2) > 5){ 
        console.log((2 * a) + 1);
    }
    else{
        if(a < 3){
            if(1 > 4){ 
                console.log(5);
            }
            else{
                if(a % 2 == 0){
                    console.log(6);
                }
                else{
                    console.log(7);
                }
            }
        }
        else{
            if((2 * (a - 2)) > 4){
                console.log(5);
            }
            else{
                if(a % 2 == 0){
                    console.log(6);
                }
                else{
                    console.log(7);
                }
            }
        }
    }
}
else{
    onsole.log('ERROR!');
}

//Через switch():

switch(true){
    case a > 10 && a > 5:
        console.log((2 * a) + 1);
        break;
    case a > 10 && a <= 5 && a < 3 && 1 > 4: //Никогда не выполнится
        console.log(5);
        break;
    case a > 10 && a <= 5 && a < 3 && 1 < 4 && a % 2 == 0: 
        console.log(6); 
        break;
    case a > 10 && a <= 5 && a < 3 && 1 < 4 && a % 2 !== 0: 
        console.log(7); 
        break;     
    case a > 10 && a <= 5 && a >= 3 && (2 * (a - 2)) > 4:
        console.log(5);
        break;  
    case a > 10 && a <= 5 && a >= 3 && (2 * (a - 2)) <= 4 && a % 2 == 0:
        console.log(6);
        break;  
    case a > 10 && a <= 5 && a >= 3 && (2 * (a - 2)) <= 4 && a % 2 !== 0:
        console.log(6);
        break;
    case a <= 10 && (a * 2) > 5:
        console.log((2 * a) + 1);
        break;
    case a <= 10 && (a * 2) <= 5 && a < 3 && 1 > 4: //Никогда не выполнится
        console.log(5);
        break;
    case a <= 10 && (a * 2) <= 5 && a < 3 && 1 < 4 && a % 2 == 0:
        console.log(6); 
        break;
    case a <= 10 && (a * 2) <= 5 && a < 3 && 1 < 4 && a % 2 !== 0:
        console.log(7); 
        break;
    case a <= 10 && (a * 2) <= 5 && a >= 3 && (2 * (a - 2)) > 4:
        console.log(5);
        break;
    case a <= 10 && (a * 2) <= 5 && a >= 3 && (2 * (a - 2)) <= 4 && a % 2 == 0:
        console.log(6); 
        break;
    case a <= 10 && (a * 2) <= 5 && a >= 3 && (2 * (a - 2)) <= 4 && a % 2 !== 0:
        console.log(7); 
        break;
    default:
        console.log('ERROR');
        break;
}

//Для себя:
// Math.random() - возвращает псевдослучайное число с плавающей запятой из диапазона от 0 включительно до 1 не включительно;
// Math.floor() - округляет число до ближайшего меньшего целого числа;

//let result = условие ? значение 1 : значение 2
//Немного упрощения...
// if((a > 10 ? a : a * 2) > 5){
//     console.log((2 * a) + 1);
// }
// else if((a > 10 ? a : a * 2) < 5){
//     if((a < 3 ? 1 : 2 * (a - 2)) > 4){
//         console.log(5);
//     }
//     else{
//         if(a % 2 == 0){
//             console.log(6);
//         }
//         else{
//             console.log(7);
//         }
//     }
// }
// else{
//     console.log('ERROR');
// }
