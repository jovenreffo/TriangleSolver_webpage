// Define a max number to prevent overflow
let MAX_NUM = 9007199254740991;

// Define the canvas as a global variable so it can be accessed wherever.
let mainCanvas;

// Sub-method to be called in setup() when initializing the canvas.
function centreCanvas() {
  // Get the window dimensions
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  // Obtain coordinates for the middle of the screen
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;

  mainCanvas.position(x, y);
} 

// This setup() functions initializes components of the p5 library as soon as the site is running.
function setup()
{
  // Create the canvas
  mainCanvas = createCanvas(400, 400);
  centreCanvas();
  background(30, 30, 30);

  // Set colors for filling in the shapes
  fill(18, 124, 211);
  stroke(0, 0, 0);

  // Draw an initial triangle
  triangle(700, 400, 900, 400, 700, 250);
}

// Event that will automatically be called by p5 when the user resizes their browser window.
// This will ensure the canvas stays centered on the screen, no matter what.
function windowResized() {
  centreCanvas();
}

function validateInput(event) {
  let char = String.fromCharCode(event.which);

  // If the current character is a decimal place, let it be typed
  if (char == '.'){
    return;
  }

  // If the input is anything except a number or decimal, do not allow it to be typed
  // TODO: add value conditions here
  if (!(/[0-9]/.test(char))){
    event.preventDefault()
  }
}

function validateNumInput(inputValue) {
  console.log(inputValue);

  if ((inputValue == 0 || inputValue < 0 ||inputValue > MAX_NUM) && inputValue != '') {
    console.log("Invalid");
    document.getElementById("invalid-input-prompt").style.display = 'block';
  }
  else if (inputValue > 0 || inputValue == '') {
    console.log("Valid")
    document.getElementById("invalid-input-prompt").style.display = 'none';
  }
}

function drawTriangleWithLegs() {

}

function drawGivenLegAndHyp() {
  
}

function solveTriangle() {
  // Retrieve the values from the text fields and ensure they are valid.  
  let leg1 = document.getElementById("leg1").value;
  //validateNumInput(leg1);

  let leg2 = document.getElementById("leg2").value;
  //validateNumInput(leg2);
  
  let hyp = document.getElementById("hyp").value;
  //validateNumInput(hyp);
}
