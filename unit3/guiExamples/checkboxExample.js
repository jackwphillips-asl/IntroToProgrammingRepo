/* This program consists of a single function definition
 * No code runs when the page is loaded. Only the function
 * executes when the button is pressed.
 */

// Function to be executed when button is pressed. Will print out a nice message.
function makeARecommendation() {
	
	// declare variables and assign to each of the checkboxes. 
	var gil = document.getElementById("gilmoreGirls");
	var cards = document.getElementById("houseOfCards");
	var jones = document.getElementById("jessicaJones");
	
	// Create an alert with the value of the checkbox. true or false.
	alert("Gilmore: " + gil.checked);
	alert("Cards: " + cards.checked);
	alert("Jessica: " + jones.checked);
	
	//declare a variable and save the paragraph called "message"
	var messageParagraph = document.getElementById("message");
	// change the text of the paragraph
	messageParagraph.textContent = "Great choices!";
}