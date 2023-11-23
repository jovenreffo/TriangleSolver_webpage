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

// This function will be reused when the Calculate button is clicked and a new canvas will be created.
function initializeCanvas() {
  // Create the canvas
  mainCanvas = createCanvas(500, 500);
  centreCanvas();
  background(50, 50, 50);
}

function drawCoordinateText(leg1, leg2, hyp, cnvWidth, cnvHeight) {
  // Set up text properties
  textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(4);
  fill(18, 124, 211);

  // legs were given, hypotenuse was not entered
  if (leg1.length > 0 && leg2.length > 0 && hyp.length === 0) {
    // Calculate the hypotenuse
    let hypCalc = sqrt(Math.pow(leg1, 2) + Math.pow(leg2, 2));
    hyp = hypCalc.toFixed(3);
    
    // Obtain the width of strings, in pixels.
    let leg1TextWidth = textWidth(leg1);
    let leg2TextWidth = textWidth(leg2);
    let hypTextWidth = textWidth(hyp);

    let x1 = (cnvWidth / 2) - leg1TextWidth; let y1 = ((cnvHeight / 2) + ((cnvHeight/2) / 2) + 30);
    let x2 = (cnvWidth / 2) - 210 - leg2TextWidth; let y2 = (cnvHeight / 2) + (leg2TextWidth / 2);
    let x3 = (cnvWidth / 2); let y3 = (cnvHeight / 2) - 10;
    
    text(leg1, x1, y1);
    text(leg2, x2, y2);
    text(hyp, x3, y3);
  }
}

function setShapeColour() {
  // Set colors for filling in the shapes
  fill(18, 124, 211);
  stroke(0, 0, 0);
  strokeWeight(2);
}

function drawDefaultTriangle() {
  // Canvas dimensions
  let cnvWidth = mainCanvas.width;
  let cnvHeight = mainCanvas.height;

  let x1 = (cnvWidth / 2) - 200; let y1 = (cnvHeight / 2) + ((cnvHeight/2) / 2);
  let x2 = (cnvWidth / 2) - 200; let y2 = (cnvHeight / 2) - ((cnvHeight/2) / 2); // top point
  let x3 = (cnvWidth / 2) + 200; let y3 = (cnvHeight / 2) + ((cnvHeight/2) / 2);
  triangle(x1, y1, x2, y2, x3, y3);
}

function drawTriangle(leg1, leg2, hyp) {
  mainCanvas.clear();
  initializeCanvas();
  let cnvWidth = mainCanvas.width;
  let cnvHeight = mainCanvas.height;

  // Set the triangle colour
  setShapeColour();
  drawDefaultTriangle(); //TEMP

  //if (leg1.length > 0 && leg2.length > 0 && hyp.length === 0) {
  //  console.log("Leg 1 and 2 not null, hypotenuse is null."); // Test message
  //  let x1 = (cnvWidth / 2) - leg1; let y1 = (cnvHeight / 2) + (leg1 / 2);
  //  let x2 = (cnvWidth / 2) - leg1; let y2 = (cnvHeight / 2) - ((cnvHeight/2) / 2); // top point
  //  let x3 = (cnvWidth / 2) + leg2; let y3 = (cnvHeight / 2) + (leg1 / 2);
  //  triangle(x1, y1, x2, y2, x3, y3);
  //}
}

// This setup() functions initializes components of the p5 library as soon as the site is running.
function setup()
{
  initializeCanvas();

  // Canvas dimensions
  let cnvWidth = mainCanvas.width;
  let cnvHeight = mainCanvas.height;
  
  setShapeColour();

  // Draw an initial triangle
  drawDefaultTriangle();
}

// Event that will automatically be called by p5 when the user resizes their browser window.
// This will ensure the canvas stays centered on the screen, no matter what.
function windowResized() {
  centreCanvas();
}