let num1 = 0;
let operator = '';
let num2 = 0;

const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const btn7 = document.querySelector('#7');
const btn8 = document.querySelector('#8');
const btn9 = document.querySelector('#9');
const btn4 = document.querySelector('#4');
const btn5 = document.querySelector('#5');
const btn6 = document.querySelector('#6');
const btn1 = document.querySelector('#1');
const btn2 = document.querySelector('#2');
const btn3 = document.querySelector('#3');
const btn0 = document.querySelector('#0');
const btnDecimal = document.querySelector('#decimal');
const btnDiv = document.querySelector('#divide');
const btnMultiply = document.querySelector('#multiply');
const btnSubtract = document.querySelector('#subtract');
const btnAdd = document.querySelector('#add');
const btnEquals = document.querySelector('#equals');

function operate(num1, operator, num2) {
  switch (operator) {
    case '+':
      add(num1, num2);
      break;
    case '-':
      subtract(num1, num2);
      break;
    case '*':
      multiply(num1, num2);
      break;
    case '/':
      divide(num1, num2);
      break;
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
