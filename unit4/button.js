// The main program
alert("My program is now running");

// This function will be called when 
function buttonWasClicked() {
	// Alert box after button was pressed
	alert("Button was pressed. Now watch the paragraph.");
	// Get the paragraph element "my_paragraph" and save it
	var theParagraph = document.getElementById("my_paragraph");
	// Change the text of the paragraph element
	theParagraph.innerHTML = "Now I've changed the innerHTML. Yay!";
}

