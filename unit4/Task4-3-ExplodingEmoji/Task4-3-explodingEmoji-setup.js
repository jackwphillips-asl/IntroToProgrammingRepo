var emoji;

function setup() {
	createCanvas(500,500)
	background(200);
	angleMode(DEGREES)
	emoji = loadImage("https://cdn.shopify.com/s/files/1/0185/5092/products/nature-9.png?v=1369544017");
}

function mousePressed() {
	drawExplodingEmoji(mouseX, mouseY);
}

function drawExplodingEmoji(x, y) {
	// your code here
}