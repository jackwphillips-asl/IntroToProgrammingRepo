var XMIN = 10;
var XMAX = 410;
var YMIN = 80;
var YMAX = 480;

var treasureX, treasureY, clicks;
clicks = 0;

// TODO: Set the x and y coordinate of the treasure in a random location;
treasureX = generateRandomNumber(XMIN, XMAX);
treasureY = generateRandomNumber(YMIN, YMAX);

function imageClicked(mouseEvent) {
	// This function is run when the map is clicked. This function 
	// 1) increments the clicks variable, 
	// 2) changes the x-coord and y-coord elements to display the mouse coordinates, and 
	// 3) updates the 'heat' message that tells the player how close the click was

	// Example using mouseEvent.clientX and mouseEvent.clientY
	// coordinates of image: (10, 80) to (410, 480)
	// Feel free to delete in your final code
	// alert(mouseEvent.clientX + ", " + mouseEvent.clientY);
	
	// Do not change this code. 
	clicks = clicks + 1;
	updateCoordinatesDisplay(mouseEvent.clientX, mouseEvent.clientY);
	updateDistance(mouseEvent.clientX, mouseEvent.clientY)
}

function updateCoordinatesDisplay(xCoord, yCoord) {
	// TODO: This function should update the x-coord and y-coord
	// elements of the webpage with xCoord and yCoord arguments
	
}

function generateRandomNumber(min, max) {
	var randNum;
	// TODO: This function should generate a random number given the arguments
	// min and max. The random number should be returned.
	
}

function calculateDistance(x1, y1, x2, y2) {
	var distance;
	// TODO: This funtion should calculate the distance between two points
	// (x1, y1) and (x2, y2). The distance should be returned.
	
}

function updateDistance(xCoord, yCoord) {
	// TODO: This function should update the 'heat' message telling how
	// cold or hot the click is. You will need to use the calculateDistance()
	// function.
		
}



