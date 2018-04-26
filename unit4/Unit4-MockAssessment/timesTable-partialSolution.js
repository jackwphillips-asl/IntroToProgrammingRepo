/* 
 * Unit 4 Mock Assessment. Multiplication Table.
 * Introduction to Programming
 * April 2018
 */

// Create the canvas and clear with a white background
function setup() {
	// no need to change code
	createCanvas(1000, 500);
	background(255);
}

// Function that is run when the button is pressed. Gets the value in the textbox and draws the corresponding table.
function showTable() {
	// TODO: Your code here.
	var maxnum = parseInt(document.getElementById("maxNumberBox").value);
	drawTable(maxnum);
}

// Function draws the multiplication table. Given a max num will draw a multiplication table of that size. 
// E.g., drawTable(4) will create a multiplication that is 5 row (4 + header row) by 5 columns (4 plus a header column) displaying all the products up to 4 x 4 = 16. 
// E.g., drawTable(16) will create table up to 16x16=256
function drawTable(num) {
	// TODO: Your code here.
	var x = 0;
	var col = 1;
	var y = 10;
	var row = 1;
	
	// draw row
	while(col <= num) {
		while(row <= num) {
			text(row * col, x, y);
			y = y + 20;
			row = row + 1;
		}
		row = 1;
		y = 10;
		x = x + 20;
		col = col + 1;
	}
	
}