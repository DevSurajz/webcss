let display = document.getElementById('display');
let currentInput = '';

function appendValue(value) {
  if (currentInput === '0' && value !== '.') currentInput = '';
  currentInput += value;
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.textContent = '0';
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  display.textContent = currentInput || '0';
}

function calculateResult() {
  try {
    let result = eval(currentInput.replace('÷', '/').replace('×', '*'));
    display.textContent = result;
    currentInput = result.toString();
  } catch {
    display.textContent = 'Error';
    currentInput = '';
  }
}
