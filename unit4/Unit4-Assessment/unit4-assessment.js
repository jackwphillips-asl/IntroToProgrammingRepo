// Setup the canvas and set text command to use position x,y as center
// No need to change setup()
function setup() {
	createCanvas(1000, 1000);
	background(255);
	textAlign(CENTER, CENTER);
}

// Function run when button is pressed.
function runProgram() {
	// Clear the canvas
	background(255);

	// TODO: Get the phrase in the text box and convert it to upper case
	var words;
	//... add your code here.

  // Draw the Matrix
	drawMatrix(words)
}

// Function to draw the Matrix given a certain phrase
function drawMatrix(phrase) {
	// TODO:  Draw the matrix based on the length of the
}
