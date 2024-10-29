let z1 = "";
let z2 = "";
let oper = "";

function Fclick(value){
    const inputElement = document.querySelector('#input_pole');
    if(value === 'AC'){ //Если нажата кнопка "AC"
        inputElement.value = "";
        z1 = "";
        z2 = "";
        oper = "";
        const parent = document.querySelector('#main_k2');
        const historyElements = parent.querySelectorAll('#history');

        historyElements.forEach(element => {
        parent.removeChild(element);});
        console.log('Очищено поле истории');
        return;
    }
    else if(value === '='){ //Если нажата кнопка "="
        if(inputElement.value === ""){ //Проверка на ошибку
            alert('Пустое поле ввода');
            console.log('Ошибка');
            return;
        }
        else if(z2 === "" && oper === ""){ //Проверка на ошибку
            alert('Выберите действие');
            console.log('Ошибка');
            return;
        }
        else if(z2 === "" && oper !== ""){  //Проверка на ошибку
            alert('Введите второе число');
            return;
        }
        else{ //вычисления
            console.log('Второе число = '+ z2);
            let v = z1 + oper + z2;
            let result;
            switch(oper){
                case '+':
                    result = parseFloat(z1) + parseFloat(z2);
                    break;
                case '-':
                    result = parseFloat(z1) - parseFloat(z2);
                    break;
                case '*':
                    result = parseFloat(z1) * parseFloat(z2);
                    break;
                case '/':
                    if(z2 === '0'){
                        alert('Нельзя делить на 0');
                        inputElement.value = "";
                        z1 = "";
                        z2 = "";
                        oper = "";
                        return;
                    }
                    result = parseFloat(z1)/parseFloat(z2);
                    break;
                }
            console.log('Результат: ' + result);
            Kclick(result, v); //Вызов функции(добавления)
            //Если надо, чтобы при действии "=" выводился ответ в input, и следующие дейсвтие работало с этим значением(результатом), то надо раскомментировать ниже код, и закомментировать похожий код:
            // inputElement.value = result;
            // z1 = result;
            // При результате стирается input, результат заносится в "Блок истории", и надо вводить новое выражение (код ниже):
            inputElement.value = "";
            z1 = "";
            //
            z2 = "";
            oper = "";
        }
    }
    else //Если нажаты кнопки цифр.действий(кроме "= и AC")
    {
        const operation = ['+','-','*','/'];
        const numbers = ['0','1','2','3','4','5','6','7','8','9'];

        if(numbers.includes(value)){
            if(z2 === "" && oper === ""){
                inputElement.value += value;
                z1 += value;
            }
            else if(z1 !== "" && oper !== ""){
                z2 += value;
                inputElement.value += value;
            }
        }
        else if (value === '-' && z1 === "" && oper === "") {
            z1 = '-';
            inputElement.value = '-';
        }
        else if(value === '-' && z1 !== "" && z2 === "" && oper !== ""){
            z2 = '-';
            inputElement.value += '-';
        }
        else if(operation.includes(value)){
            if(z1 !== "" && z2 !== ""){ //Проверка на ошибку
                alert('Уже введено 2 значения для выполнения операции');
                return;
            }
            if(z1 === "" && z2 === "" && (value === "*" || value === "/" || value === "+")){ //Проверка на ошибку
                alert('Действие не может быть первым');
                return;
            }
            else if(oper === "" && z1 !== "-"){ 
                console.log('Первое число = ' + z1);
                inputElement.value += value;
                oper = value;
                console.log('Оператор: ' + oper);  
            }    
        }
        else{ //Проверка на ошибку
            alert('Ошибка');
            return;
        }
    }
}
function Kclick(result, v){ //Добавление в блок истории
    const parent = document.querySelector('#main_k2');
    const p = document.createElement('p');
    p.textContent =  v + ' = ' + result;
    p.id = "history";
    p.style.textAlign = "center";
    p.style.border = "solid black 1px";
    p.style.marginBottom = '3px';
    parent.append(p);     
}
