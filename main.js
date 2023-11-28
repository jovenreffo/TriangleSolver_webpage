// Define a max number to prevent overflow
let MAX_NUM = 9007199254740991;

function validateInput(event) {
  let char = String.fromCharCode(event.which);
  let val = Number(char);

  // If the current character is a decimal place, let it be typed
  if (char == '.'){
    return;
  }

  if (val <= 0 || val > MAX_NUM) {
    document.getElementById("invalid-input-prompt").style.display = 'block';
  }
  else {
    document.getElementById("invalid-input-prompt").style.display = 'none';
  }

  // If the input is anything except a number or decimal, do not allow it to be typed
  if (!(/[0-9]/.test(char))) {
    event.preventDefault()
  }
}

function validateNumInput(inputValue) {
  console.log(inputValue);
  let val = Number(inputValue);

  if (val > 0 || inputValue == '') {
    console.log("Valid")
    document.getElementById("invalid-input-prompt").style.display = 'none';
  }
}

function clearAllMessages() {
  document.getElementById("large-value-prompt").style.display = 'none';
  document.getElementById("invalid-input-prompt").style.display = 'none';
  document.getElementById("unreal-triangle-prompt").style.display = 'none';
}

function validateAllInputs(leg1, leg2, hyp) {
  // Clear all messages before displaying again
  clearAllMessages();
  
  if (leg1.length === 0 && leg2.length === 0 && hyp.length === 0) { // All sides are empty
    return false;
  }
  
  if (hyp <= leg1 || hyp <= leg2 || leg1 >= hyp || leg2 >= hyp) {
    document.getElementById("unreal-triangle-prompt").style.display = 'block';
    return false;
  }

  if (leg1 > MAX_NUM || leg2 > MAX_NUM || hyp > MAX_NUM) { // Test if any inputs are too large for Javascript to handle.
    document.getElementById("large-value-prompt").style.display = 'block';
    return false;
  }
  else if (leg1.length === 0 || leg2.length === 0 || hyp.length === 0) { // Okay for a side to be empty
    document.getElementById("invalid-input-prompt").style.display = 'none';
    return true;
  }
  else if (leg1 <= 0 || leg2 <= 0 || hyp <= 0) { // Conduct another zero or negative input test.
    document.getElementById("invalid-input-prompt").style.display = 'block';
    return false;
  }
  else { // If there are no issues, disable the messages.
    document.getElementById("large-value-prompt").style.display = 'none';
    document.getElementById("invalid-input-prompt").style.display = 'none';
    document.getElementById("unreal-triangle-prompt").style.display = 'none';
    return true;
  }
}

function solveTriangle() {
  // Retrieve the values from the text fields and ensure they are valid.  
  let leg1 = document.getElementById("leg1").value;
  let leg2 = document.getElementById("leg2").value;
  let hyp = document.getElementById("hyp").value;

  // Call method for ensuring the inputs create a real right triangle
  if (validateAllInputs(leg1, leg2, hyp)) {
    console.log("OK");
    drawTriangle(leg1, leg2, hyp);
    drawCoordinateText(leg1, leg2, hyp, 800, 500);
  }
}
