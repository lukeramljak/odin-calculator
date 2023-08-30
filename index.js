const display = document.querySelector('#display');
const container = document.querySelector('#container');
const buttons = Array.from(document.getElementsByClassName('btn'));
let equation = '';
const operators = '+-*/';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    switch (btn.dataset.key) {
      case 'clear':
        display.textContent = '';
        break;
      case 'backspace':
        const newDisplay = display.textContent.slice(0, display.textContent.length - 1);
        display.textContent = newDisplay;
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        equation += btn.dataset.key;
        break;
      case '=':
        const [num1, operator, num2] = splitEquation(equation);
        const sum = operate(num1, operator, num2);
        display.textContent = sum;
        equation = '';
        break;
      default:
        equation += btn.dataset.key;
        display.textContent = btn.textContent;
    }
  });
});

function splitEquation(str) {
  for (let i = 0; i < str.length; i++) {
    if (operators.includes(str[i])) {
      const num1 = str.slice(0, i).trim();
      const operator = str[i];
      const num2 = str.slice(i + 1).trim();

      return [num1, operator, num2];
    }
  }

  return 'Error';
}

function operate(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Error';
  }
}

