/* 
 * Unit 4 Mock Assessment. Multiplication Table.
 * Introduction to Programming
 * April 2018
 */

// Create the canvas and clear with a white background
function setup() {
	createCanvas(1000, 500);
	background(255);
}

// Function that is run when the button is pressed. Gets the value in the textbox and draws the corresponding table.
function showTable() {
	var maxNum = parseInt(document.getElementById("maxNumberBox").value);
	if (maxNum < 1) {
		maxNum = 1;
	} else if (maxNum > 20) {
		maxNum = 20;
	}
	drawTable(maxNum);
}

// Function draws the table. Given a max num will draw a multiplication table of that size. 
// E.g., drawTable(4) will create a multiplication that is 5 row (4 + header row) by 5 columns (4 plus a header column) displaying all the products up to 4 x 4 = 16. 
// E.g., drawTable(16) will create table up to 16x16=256
function drawTable(num) {
	background(255);
	var row = 0;
	var col = 0; 
	var yheight = height / (num + 1);
	var xwidth = width / (num + 1);
	var x = xwidth / 2;
	var y = yheight / 2;
	
	textAlign(CENTER, CENTER)
	var fontSize = 1;
	textSize(fontSize);
	while(textWidth(num*num)<xwidth && textAscent() < yheight) {
		fontSize = fontSize + 1;
		textSize(fontSize);
	}
	
	while(col <= num) {
		while(row <= num) {
			var message;
			fill(200,50,50);
			if (row == 0 && col == 0) {
				message = "";
			} else if (row != 0 && col == 0) {
				message = row;
			} else if (row == 0 && col != 0) {
				message = col;
			} else {
				fill(0);
				message = row * col;
			}
			text(message, x, y);
			row = row + 1;
			y = y + yheight;
		}
		x = x + xwidth;
		col = col + 1;
		row = 0;
		y = yheight / 2;

	}
}