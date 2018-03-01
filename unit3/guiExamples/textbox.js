
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