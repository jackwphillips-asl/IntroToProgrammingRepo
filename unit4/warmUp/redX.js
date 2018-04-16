function setup() {
	createCanvas(500, 500);
	smooth();
}

function main() {
	stroke(255, 0, 0);
	strokeWeight(5);
	line(0, 0, width, height)
	line(0, height, width, 0);
}