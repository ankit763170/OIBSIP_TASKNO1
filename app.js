let result = document.getElementById('result');

function appendNumber(number) {
  result.value += number;
}

function appendOperator(operator) {
  result.value += operator;
}

function calculate() {
  let expression = result.value;

  // Validate input for potential errors
  if (!isValidExpression(expression)) {
    result.value = 'Invalid Input';
    return;
  }

  try {
    // Evaluate the expression using eval
    result.value = eval(expression);
  } catch (error) {
    result.value = 'Error';
  }
}

function clearResult() {
  result.value = '';
}

// Function to validate the expression for potential errors
function isValidExpression(expression) {
  // Regular expression to match invalid characters
  const invalidRegex = /[^0-9+\-*/.]/;
  // Regular expression to match multiple operators in a row
  const multipleOperatorsRegex = /[\+\-\*/]{2,}/;

  // Check for invalid characters
  if (invalidRegex.test(expression)) {
    return false;
  }

  // Check for multiple operators in a row
  if (multipleOperatorsRegex.test(expression)) {
    return false;
  }

  return true;
}
