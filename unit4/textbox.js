// main program
alert("Starting the program now!");
// get the textbox and save it
var theTextBox = document.getElementById("my_textbox");

alert("Now watch the text box. I'm going to set the text.");
// set the textbox text
theTextBox.value = "Hi there.";

alert("Now type something in the textbox.");


function theButtonWasPressed() {
	// Get the textbox and save it
	var theTextBox = document.getElementById("my_textbox");
	// Get the text in the textbox and save it.
	var theTextInTheBox = theTextBox.value;
	// Alert the text
	alert("You typed: " + theTextInTheBox);
	
	// get new text from prompt box
	var newText = prompt("Now enter something here.");
	// Change the text in the text box
	theTextBox.value = newText;
}