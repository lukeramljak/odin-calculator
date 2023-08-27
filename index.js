let num1 = 0;
let operator = '';
let num2 = 0;

const clear = document.querySelector('#btn-clear');
const backspace = document.querySelector('#btn-backspace');
const btn7 = document.querySelector('#btn-7');
const btn8 = document.querySelector('#btn-8');
const btn9 = document.querySelector('#btn-9');
const btn4 = document.querySelector('#btn-4');
const btn5 = document.querySelector('#btn-5');
const btn6 = document.querySelector('#btn-6');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn0 = document.querySelector('#btn-0');
const btnDecimal = document.querySelector('#btn-decimal');
const btnDiv = document.querySelector('#btn-divide');
const btnMultiply = document.querySelector('#btn-multiply');
const btnSubtract = document.querySelector('#btn-subtract');
const btnAdd = document.querySelector('#btn-add');
const btnEquals = document.querySelector('#btn-equals');
const display = document.querySelector('#display');
const container = document.querySelector('#container');

let displayValue = container.addEventListener('click', (e) => {
  const button = e.target;
  if (button.id == 'btn-equals'
    || button.id == 'btn-clear'
    || button.id == 'btn-backspace') return;
  display.textContent += button.textContent;
});

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
