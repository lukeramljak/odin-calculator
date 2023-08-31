const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.getElementById('equalsBtn');
const clearButton = document.getElementById('clearBtn');
const deleteButton = document.getElementById('deleteBtn');
const decimalButton = document.getElementById('decimalBtn');


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
      if (num2 == 0) return 'Nice try, buddy';
      else return num1 / num2;
    default:
      return 'Error';
  }
}

