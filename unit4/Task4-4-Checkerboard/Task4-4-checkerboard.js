var SIZE = 8

function setup() {
	//Must have same width and height to be square
	createCanvas(600,600);
	drawBoard(SIZE);
}

function drawBoard(numSquares) {
	square_width = width / SIZE;
	square_height = height / SIZE;
	var i = 0; //counter for rows
	var j = 0; //counter for columns
	var x = 0; //x position of squares
	var y = 0; //y position of squares
	var isBlack = true;
	//Rows
	while(i < numSquares) {
		//Columns
		while(j < numSquares) {
			push();
			translate(x, y);
			if(isBlack) {
				fill(0);
			} else {
				fill(255, 0, 0);
			}
			rect(0, 0, square_width, square_height);
			pop();
			y = y + square_height;			
			j = j + 1;
			if (j < numSquares) {
				isBlack = !isBlack;
			}
		}
		j = 0;
		y = 0;
		x = x + square_width;
		i = i + 1;
	}
}