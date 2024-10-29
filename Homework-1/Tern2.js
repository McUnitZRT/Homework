function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1; 
  console.log(`a = ${a}`); 

  return (
    a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? 'but a is not 15' : '')+ (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even');
}

manyChecks(); 

// Math.random() - возвращает псевдослучайное число с плавающей запятой из диапазона от 0 включительно до 1 не включительно;
// Math.floor() - округляет число до ближайшего меньшего целого числа;

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с помощью console.log()

//Через if...else:

if(a > 10){
  if(a === 15){
    if(a > 5){
      if(a % 2 !== 0){
        console.log('a is bigger than 10' + 'but a is not 15' + 'and a is greater than 5' + ' and a is odd');
      }
      else{
        console.log('a is bigger than 10' + 'but a is not 15' + 'and a is greater than 5' + ' and a is even');
      }
    }
    else{
      if(a % 2 !== 0){
        console.log('a is bigger than 10' + 'but a is not 15' + 'and a is less than or equal to 5 '+ ' and a is odd');
      }
      else{
        console.log('a is bigger than 10' + 'but a is not 15' + 'and a is less than or equal to 5 ' + ' and a is even');
      }
    }
  }
  else{
    if(a > 5){
      if(a % 2 !== 0){ 
        console.log('a is bigger than 10' + '' + 'and a is greater than 5' + ' and a is odd');
      }
      else{
        console.log('a is bigger than 10' + '' + 'and a is greater than 5' + ' and a is even');
      }
    }
    else{
      if(a % 2 !== 0){
        console.log('a is bigger than 10' + '' + 'and a is less than or equal to 5 '+ ' and a is odd');
      }
      else{
        console.log('a is bigger than 10' + '' + 'and a is less than or equal to 5 ' + ' and a is even');
      }
    }
  }
}
else if(a <= 10){
  if(a === 5){
    if(a === 15){
      if(a > 5){
        if(a % 2 !== 0){
          console.log('a is less than or equal to 10 ' + 'an example of a special case' + 'but a is not 15' + 'and a is greater than 5' + ' and a is odd');
        }
        else{
          console.log('a is less than or equal to 10 ' + 'an example of a special case' + 'but a is not 15' + 'and a is greater than 5' + ' and a is even ');
        }
      }
      else{
        if(a % 2 !== 0){
          console.log('a is less than or equal to 10 ' + 'an example of a special case' + 'but a is not 15' + 'and a is less than or equal to 5 ' + ' and a is odd');
        }
        else{
          console.log('a is less than or equal to 10 ' + 'an example of a special case' + 'but a is not 15' + 'and a is less than or equal to 5 ' + ' and a is even ');
        }
      }
    }
    else{
      if(a > 5){
        if(a % 2 !== 0){
          console.log('a is less than or equal to 10 ' + 'an example of a special case' + '' + 'and a is greater than 5' + ' and a is odd');
        }
        else{
          console.log('a is less than or equal to 10 ' + 'an example of a special case' + '' + 'and a is greater than 5' + ' and a is even ');
        }
      }
      else{
        if(a % 2 !== 0){
          console.log('a is less than or equal to 10 ' + 'an example of a special case' + '' + 'and a is less than or equal to 5 ' + ' and a is odd');
        }
        else{
          console.log('a is less than or equal to 10 ' + 'an example of a special case' + '' + 'and a is less than or equal to 5 ' + ' and a is even ');
        }
      }
    }
  }
  else{
    if(a === 15){
      if(a > 5){
        if(a % 2 !== 0){
          console.log('a is less than or equal to 10 ' + '' + 'but a is not 15' + 'and a is greater than 5' + ' and a is odd');
        }
        else{
          console.log('a is less than or equal to 10 ' + '' + 'but a is not 15' + 'and a is greater than 5' + ' and a is even ');
        }
      }
      else{
        if(a % 2 !== 0){
          console.log('a is less than or equal to 10 ' + '' + 'but a is not 15' + 'and a is less than or equal to 5 ' + ' and a is odd');
        }
        else{
          console.log('a is less than or equal to 10 ' + '' + 'but a is not 15' + 'and a is less than or equal to 5 ' + ' and a is even ');
        }
      }
    }
    else{
      if(a > 5){
        if(a % 2 !== 0){
          console.log('a is less than or equal to 10 ' + '' + '' + 'and a is greater than 5' + ' and a is odd');
        }
        else{
          console.log('a is less than or equal to 10 ' + '' + '' + 'and a is greater than 5' + ' and a is even ');
        }
      }
      else{
        if(a % 2 !== 0){
          console.log('a is less than or equal to 10 ' + '' + '' + 'and a is less than or equal to 5 ' + ' and a is odd');
        }
        else{
          console.log('a is less than or equal to 10 ' + '' + '' + 'and a is less than or equal to 5 ' + ' and a is even ');
        }
      }
    }
  }
}
else{
  console.log('ERROR');
}

// Через switch():

switch(true){
  case a > 10 && a === 15 && a > 5  && a % 2 === 1:
    console.log('a is bigger than 10' + 'but a is not 15' + 'and a is greater than 5' + ' and a is odd'); 
    break;
  case a > 10 && a === 15 && a > 5  && a % 2 === 0:
    console.log('a is bigger than 10' + 'but a is not 15' + 'and a is greater than 5' + ' and a is even'); 
    break;
  case a > 10 && a === 15 && a < 5  && a % 2 === 1:
    console.log('a is bigger than 10' + 'but a is not 15' + 'and a is less than or equal to 5 '+ ' and a is odd'); 
    break;
  case a > 10 && a === 15 && a < 5  && a % 2 === 0:
    console.log('a is bigger than 10' + 'but a is not 15' + 'and a is less than or equal to 5 ' + ' and a is even'); 
    break;
  case a > 10 && a !== 15 && a > 5  && a % 2 === 1:
    console.log('a is bigger than 10' + '' + 'and a is greater than 5' + ' and a is odd'); 
    break;
  case a > 10 && a !== 15 && a > 5  && a % 2 === 0:
    console.log('a is bigger than 10' + '' + 'and a is greater than 5' + ' and a is even'); 
    break;
  case a > 10 && a !== 15 && a < 5  && a % 2 === 1:
    console.log('a is bigger than 10' + '' + 'and a is less than or equal to 5 '+ ' and a is odd'); 
    break;
  case a > 10 && a !== 15 && a < 5  && a % 2 === 0:
    console.log('a is bigger than 10' + '' + 'and a is less than or equal to 5 ' + ' and a is even'); 
    break;
  case a <= 10 && a === 5 && a === 15 && a > 5  && a % 2 === 1:
    console.log('a is less than or equal to 10 ' + 'an example of a special case' + 'but a is not 15' + 'and a is greater than 5' + ' and a is odd'); 
    break;
  case a <= 10 && a === 5 && a === 15 && a > 5  && a % 2 === 0:
    console.log('a is less than or equal to 10 ' + 'an example of a special case' + 'but a is not 15' + 'and a is greater than 5' + ' and a is even '); 
    break;
  case a <= 10 && a === 5 && a === 15 && a < 5  && a % 2 === 1:
    console.log('a is less than or equal to 10 ' + 'an example of a special case' + 'but a is not 15' + 'and a is less than or equal to 5 ' + ' and a is odd'); 
    break;
  case a <= 10 && a === 5 && a === 15 && a < 5  && a % 2 === 0:
    console.log('a is less than or equal to 10 ' + 'an example of a special case' + 'but a is not 15' + 'and a is less than or equal to 5 ' + ' and a is even ');
    break;
  case a <= 10 && a === 5 && a !== 15 && a > 5  && a % 2 === 1:
    console.log('a is less than or equal to 10 ' + 'an example of a special case' + '' + 'and a is greater than 5' + ' and a is odd'); 
    break;
  case a <= 10 && a === 5 && a !== 15 && a > 5  && a % 2 === 0:
    console.log('a is less than or equal to 10 ' + 'an example of a special case' + '' + 'and a is greater than 5' + ' and a is even '); 
    break;
  case a <= 10 && a === 5 && a !== 15 && a < 5  && a % 2 === 1:
    console.log('a is less than or equal to 10 ' + 'an example of a special case' + '' + 'and a is less than or equal to 5 ' + ' and a is odd'); 
    break;
  case a <= 10 && a === 5 && a !== 15 && a < 5  && a % 2 === 0:
    console.log('a is less than or equal to 10 ' + 'an example of a special case' + '' + 'and a is less than or equal to 5 ' + ' and a is even '); 
    break;
  case a <= 10 && a !== 5 && a === 15 && a > 5  && a % 2 === 1:
    console.log('a is less than or equal to 10 ' + '' + 'but a is not 15' + 'and a is greater than 5' + ' and a is odd'); 
    break;
  case a <= 10 && a !== 5 && a === 15 && a > 5  && a % 2 === 0:
    console.log('a is less than or equal to 10 ' + '' + 'but a is not 15' + 'and a is greater than 5' + ' and a is even '); 
    break;
  case a <= 10 && a !== 5 && a === 15 && a < 5  && a % 2 === 1:
    console.log('a is less than or equal to 10 ' + '' + 'but a is not 15' + 'and a is less than or equal to 5 ' + ' and a is odd'); 
    break;
  case a <= 10 && a !== 5 && a === 15 && a < 5  && a % 2 === 0:
    console.log('a is less than or equal to 10 ' + '' + 'but a is not 15' + 'and a is less than or equal to 5 ' + ' and a is even '); 
  break;
  case a <= 10 && a !== 5 && a !== 15 && a > 5  && a % 2 === 1:
    console.log('a is less than or equal to 10 ' + '' + '' + 'and a is greater than 5' + ' and a is odd');
    break;
  case a <= 10 && a !== 5 && a !== 15 && a > 5  && a % 2 === 0:
    console.log('a is less than or equal to 10 ' + '' + '' + 'and a is greater than 5' + ' and a is even ');
    break;
  case a <= 10 && a !== 5 && a !== 15 && a < 5  && a % 2 === 1:
    console.log('a is less than or equal to 10 ' + '' + '' + 'and a is less than or equal to 5 ' + ' and a is odd');
    break;
  case a <= 10 && a !== 5 && a !== 15 && a < 5  && a % 2 === 0:
    console.log('a is less than or equal to 10 ' + '' + '' + 'and a is less than or equal to 5 ' + ' and a is even ');
    break;
  default:
    console.log('ERROR');
    break;
}
