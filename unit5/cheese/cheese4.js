/* MOD 3: Add some cheese with different colors */
var myYellow, myBlue;

function setup() {
    createCanvas(500, 500);
    myYellow = color(252, 252, 18);
    myBlue = color(18, 207, 252);
}

function draw() {  
	drawCheeseWithColor(myYellow);
	drawChesseWithColor(myBlue);
}

function drawCheeseWithPosition(c) {
	// TODO Add code here that draws cheese at 
    // a random location with color c
}