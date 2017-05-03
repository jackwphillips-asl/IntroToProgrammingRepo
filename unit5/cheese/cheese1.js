/* BASE: This code is the base */
var myGreen;
var myX, myY;

function setup() {
    createCanvas(500, 500);
    myGreen = color(0, 200, 100);
	myX = 75;
	myY = 100;
}

function draw() {  
    // Code to draw green cheese
    noStroke(); //no border
    fill(myGreen); // green fill
    arc(myX, myY, 175, 175, PI * 1.30, PI * 1.70);
    fill(0); // black fill
    ellipse(50, 45, 15, 15); // a hole
    ellipse(80, 70, 20, 20); // a hole
    ellipse(75, 30, 10, 10); // a hole
}