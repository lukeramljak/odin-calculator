const display = document.querySelector('#display');
const container = document.querySelector('#container');
const buttons = Array.from(document.getElementsByClassName('btn'));
let equation = '';

buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    switch (e.target.id) {
      case 'btn-clear':
        display.textContent = '';
        break;
      case 'btn-backspace':
        const newDisplay = display.textContent.slice(0, display.textContent.length - 1);
        display.textContent = newDisplay;
        break;
      default:
        equation += e.target.textContent;
        display.textContent += e.target.textContent;
    }
  });
});

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

