var XMIN = 10;
var XMAX = 410;
var YMIN = 80;
var YMAX = 480;

var treasureX = generateRandomNumber(XMIN, XMAX);
var treasureY = generateRandomNumber(YMIN, YMAX);

var clicks = 0;

function imageClicked(mouseEvent) {
	// coordinates of image: (10, 80) to (410, 480)
	//alert(mouseEvent.clientX + ", " + mouseEvent.clientY);
	clicks = clicks + 1;
	updateCoordinatesDisplay(mouseEvent.clientX, mouseEvent.clientY);
	updateDistance(mouseEvent.clientX, mouseEvent.clientY)
}

function updateCoordinatesDisplay(xCoord, yCoord) {
	var xElement = document.getElementById("x-coord");
	var yElement = document.getElementById("y-coord");

	xElement.innerHTML = "X: " + xCoord;
	yElement.innerHTML = "Y: " + yCoord;
}

function generateRandomNumber(min, max) {
	var randNum = Math.floor((max-min+1) * Math.random()) + min;
	return randNum;
}

function calculateDistance(x1, y1, x2, y2) {
	var distance = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
	return distance;
}

function updateDistance(xCoord, yCoord) {
	var distanceToTreasure = calculateDistance(xCoord, yCoord, treasureX, treasureY);

	var distanceElement = document.getElementById("distance");
	var message;

	if(distanceToTreasure > 320) {
		distanceElement.style.color = 'purple';
		message = "Freezing!";
	} else if (distanceToTreasure > 160) {
		distanceElement.style.color = 'blue';
		message = "Really cold";
	} else if (distanceToTreasure > 80) {
		distanceElement.style.color = 'blue';
		message = "Cold";
	} else if (distanceToTreasure > 40) {
		distanceElement.style.color = 'orange';
		message = "Warm";
	} else if (distanceToTreasure > 20) {
		distanceElement.style.color = 'orange';
		message = "Hot";
	} else if (distanceElement > 10) {
		distanceElement.style.color = 'orange';
		message = "Really Hot";
	} else {
		distanceElement.style.color = 'red';
		message = "You found the treasure in " + clicks + " clicks!";	
	}

	distanceElement.innerHTML = message;
}