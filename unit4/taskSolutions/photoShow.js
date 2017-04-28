var PUPPY = "puppy.JPG";
var KITTEN = "kitten.JPG";
var MOLERAT = "molerat.JPG";

start();

function start() {
	var MAX = 3;
	var MIN = 1;

	var randomSelection = generateRandomNumber(MIN, MAX);
	var imageElement = document.getElementById("picture");
	var dropDownElement = document.getElementById("photoSelector");

	if(randomSelection == 1) {
		imageElement.src = PUPPY;
		dropDownElement.value = "puppyPicture";
	} else if (randomSelection == 2) {
		imageElement.src = KITTEN;
		dropDownElement.value = "kittenPicture";
	} else if (randomSelection == 3) {
		imageElement.src = MOLERAT;
		dropDownElement.value = "moleratPicture";
	}
}

function photoChanged() {
	var dropDownElement = document.getElementById("photoSelector");
	var imageElement = document.getElementById("picture");
	var selection = dropDownElement.value;

	if(selection == "puppyPicture") {
		imageElement.src = PUPPY;
	} else if (selection == "kittenPicture") {
		imageElement.src = KITTEN;
	} else if (selection == "moleratPicture") {
		imageElement.src = MOLERAT;
	}

}

function randomButtonPressed() {
	var MAX = 3;
	var MIN = 1;

	var randomSelection = generateRandomNumber(MIN, MAX);

	var imageElement = document.getElementById("picture");

	if(randomSelection == 1) {
		imageElement.src = PUPPY;
	} else if (randomSelection == 2) {
		imageElement.src = KITTEN;
	} else if (randomSelection == 3) {
		imageElement.src = MOLERAT;
	}
}

function generateRandomNumber(min, max) {
	var randomNumber;
	randomNumber = Math.floor((max-min+1)*Math.random() + min);
	return randomNumber
}