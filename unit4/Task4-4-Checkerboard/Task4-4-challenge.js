var SIZE = 8

function setup() {
	//Must have same width and height to be square
	createCanvas(600,600);
	drawBoard(SIZE);
}

function drawPiece() {
	var rowNum = parseInt(document.getElementById("rowBox").value);
	var colNum = parseInt(document.getElementById("colBox").value);
	drawBoard(SIZE, rowNum, colNum);
}

function drawBoard(numSquares, row, col) {
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
			if(row==i && col==j) {
				if(isBlack) {
					fill(255, 0, 0);
				} else {
					fill(0);
				}
				var piece_x = square_width/2;
				var piece_y = square_height/2;
				var piece_diameter = 0.8 * square_width;
				ellipse(piece_x, piece_y, piece_diameter);
			}
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