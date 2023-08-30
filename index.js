const display = document.querySelector('#display');
const container = document.querySelector('#container');
const buttons = Array.from(document.getElementsByClassName('btn'));
let equation = '';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    switch (btn.id) {
      case 'btn-clear':
        display.textContent = '';
        break;
      case 'btn-backspace':
        const newDisplay = display.textContent.slice(0, display.textContent.length - 1);
        display.textContent = newDisplay;
        break;
      case 'btn-equals':
        let sum = splitEquation(equation);
      // display.textContent = sum;;
      default:
        // TODO: undo the space, as it doesn't work for multi digit numbers
        equation += btn.textContent + ' ';
        display.textContent += btn.textContent + ' ';
    }
  });
});

function splitEquation(str) {
  // TODO: this will no longer work when the space is removed
  let [num1, operator, num2] = str.split('');
  let sum = operate(num1, operator, num2);
  return sum;
}

function operate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return Number(num1) + Number(num2);
    case '-':
      return num1 - num2;
    case 'x':
      return num1 * num2;
    case '÷':
      return num1 / num2;
  }
}

