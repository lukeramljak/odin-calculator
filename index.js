let num1 = 0;
let operator = '';
let num2 = 0;

const display = document.querySelector('#display');
const container = document.querySelector('#container');

container.addEventListener('click', (e) => {
  if (e.target.id == 'btn-equals'
    || e.target.id == 'btn-clear'
    || e.target.id == 'btn-backspace') return;
  display.textContent += button.textContent;
});

container.addEventListener('click', (e) => {
  if (e.target.id == 'btn-clear') {
    display.textContent = '';
  }
});

container.addEventListener('click', (e) => {
  if (e.target.id == 'btn-backspace') {
    let newDisplay = display.textContent.slice(0, display.textContent.length - 1);
    display.textContent = newDisplay;
  }
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
