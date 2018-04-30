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
	e_width = 20;
	e_height = 20;
	angle = 0;
	angleStep = 30;
	currentX = 0;
	currentY = 0;
	translate(x, y);
	while(angle < 360) {
		while(currentX < width) {
		  push();
		  rotate(angle);
		  translate(currentX, currentY);
		  image(emoji, 0, 0, e_width, e_height);
		  pop();
		  currentX = currentX + 0.8 * e_width;
		}
		angle = angle + angleStep;
		currentX = 0;
	}
}