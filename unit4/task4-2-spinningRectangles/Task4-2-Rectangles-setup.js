function setup() {
	createCanvas(500, 500);
	smooth();
	rectMode(CENTER);
	angleMode(DEGREES);
	colorMode(HSB);
}

function drawRects(y) {
	// your code here
}

function main() {
	var yCoor = parseInt(document.getElementById("y-coordinate-box").value);
	drawRects(yCoor);
}
