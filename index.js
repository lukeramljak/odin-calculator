let firstOperand = '';
let secondOperand = '';
let currentOperation = null;

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.getElementById('equalsBtn');
const clearButton = document.getElementById('clearBtn');
const deleteButton = document.getElementById('deleteBtn');
const decimalButton = document.getElementById('decimalBtn');
const lastOperationScreen = document.getElementById('lastOperationScreen');
const currentOperationScreen = document.getElementById('currentOperationScreen');

numberButtons.forEach((button) => {
  button.addEventListener('click', () => appendNumber(button.textContent));
});

function appendNumber(number) {
  currentOperationScreen.textContent += number;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '×':
      return a * b;
    case '÷':
      if (num2 == 0) return null;
      else return a / b;
    default:
      return null;
  }
}

