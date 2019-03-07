var result = document.getElementById('result');
var sign = document.getElementsByClassName('sign')
var numbers = document.getElementsByClassName('numbers');
var operator = document.getElementById('operator');
var reset = document.getElementsByClassName('reset');
var equal = document.getElementById('equal');

var firstNum = '';
var secondNum = '';
var answer;
var number;
var signs;


reset[0].onclick = function() {
    result.innerHTML = '0'
}

for(let i = 0; i < numbers.length; i++) {

numbers[i].onclick = function() {
        if (result.innerHTML) {
    firstNum += event.target.innerHTML
    result.innerHTML == ''
    console.log(firstNum)
        }
    result.innerHTML = firstNum
}

}



 sign[0].onclick = function() {
    secondNum = firstNum;
    firstNum = '';
    console.log(firstNum)
    signs = 1
} 

sign[2].onclick = function() {
    secondNum = firstNum;
    firstNum = '';
    console.log(firstNum)
    signs = 2
}

sign[1].onclick = function() {
    secondNum = firstNum;
    firstNum = '';
    console.log(firstNum)
    signs = 3
}


sign[3].onclick = function() {
    secondNum = firstNum;
    firstNum = '';
    console.log(firstNum)
    signs = 4
}

  /*equal.onclick = function() {

    firstNum = Number(firstNum)
    secondNum = Number(secondNum)

    if(signs = 1) {
        answer = secondNum + firstNum;
        result.innerHTML = answer;
    } 
    if (signs = 2) {
        answer = secondNum * firstNum;
        result.innerHTML = answer;
    }

  } */
 
 equal.onclick = function() {

    firstNum = Number(firstNum)
    secondNum = Number(secondNum)
  
    switch(signs) {
    case 1:
    answer = firstNum + secondNum
    secondNum = '';
    firstNum = '';
    break;

     case 2:
        answer =  firstNum * secondNum
        secondNum = '';
    firstNum = '';
        break;
    
    case 3:
    answer =  secondNum - firstNum 
    secondNum = '';
    firstNum = '';
        break;

    case 4:     
    answer = secondNum / firstNum
    secondNum = '';
    firstNum = '';
    break;
    }
    console.log(answer)
    result.innerHTML = answer
 } 


