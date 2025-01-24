function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

// Clear the display (reset the input)
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Delete the last character in the display
function deleteLastCharacter() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// Evaluate the expression and display the result
function evaluateExpression() {
  let display = document.getElementById("display");
  try {
    let result = eval(display.value);
    if (result === Infinity || result === -Infinity) {
      throw "Division by zero error";
    }
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
