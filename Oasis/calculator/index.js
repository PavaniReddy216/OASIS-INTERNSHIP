let currentInput = '';
let operator = '';
let firstOperand = null;

function clearDisplay() {
  currentInput = '';
  operator = '';
  firstOperand = null;
  updateDisplay();
}

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function setOperator(op) {
  if (currentInput !== '') {
    if (firstOperand === null) {
      firstOperand = parseFloat(currentInput);
      currentInput = '';
    } else {
      calculateResult();
    }
    operator = op;
  }
}

function calculateResult() {
  if (operator !== '' && currentInput !== '') {
    const secondOperand = parseFloat(currentInput);
    switch (operator) {
      case '+':
        currentInput = (firstOperand + secondOperand).toString();
        break;
      case '-':
        currentInput = (firstOperand - secondOperand).toString();
        break;
      case '*':
        currentInput = (firstOperand * secondOperand).toString();
        break;
      case '/':
        if (secondOperand !== 0) {
          currentInput = (firstOperand / secondOperand).toString();
        } else {
          currentInput = 'Error';
        }
        break;
      default:
        break;
    }
    operator = '';
    firstOperand = parseFloat(currentInput);
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').innerText = currentInput;
}