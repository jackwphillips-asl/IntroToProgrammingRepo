/* MOD 2: Add some more cheese */
var myGreen;
var myX, myY;
var anotherX, anotherY;

function setup() {
    createCanvas(500, 500);
    myGreen = color(0, 200, 100);
	myX = 75;
	myY = 100;
	anotherX = 200;
	anotherY = 250;
}

function draw() {  
    drawCheeseWithPosition(myX, myY);
    drawCheeseWithPosition(anotherX, anotherY);
}

function drawCheeseWithPosition(x, y) {
	// TODO Add code here that draws cheese at 
    // location (x, y)
}