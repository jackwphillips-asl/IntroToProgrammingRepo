/* 
 * This program determines if the words in text boxes are mirrorWords
 * Intro to Programming
*/


// initial setup
function begin() {
    displayMessage("Please enter two words and press the button.");
	alert("Welcome to mirror Checker. You will be asked to enter two words."+
		"\nThe program will then determine if the words are mirrors.");
	var word1 = prompt("Enter the first word:");
	var word2 = prompt("Enter the second word:");
	// get the text boxes
	var textBox1 = document.getElementById("word1");
	var textBox2 = document.getElementById("word2");
	// set the text boxes with the words
	textBox1.value = word1;
	textBox2.value = word2;
}

// displayMessage will update the paragraph element with a message
function displayMessage(message) {
    // get the paragraph element called "response"
	var response = document.getElementById("response");
	// change the text for the paragraph to message
	response.textContent = message;
}

// checkMirror will be activated when the button is clicked
function checkMirror() {
	// get the text boxes
	var textBox1 = document.getElementById("word1");
	var textBox2 = document.getElementById("word2");
	// get the words in the text boxes
	var word1 = textBox1.value;
	var word2 = textBox2.value;
	// see if the words are mirrors
	var mirror = isMirror(word1, word2);

	// display a message depending on mirror or not
	if(mirror) {
		displayMessage("Congratulations. The words are mirrors.");
	} else {
		displayMessage("Sorry. The words are not mirrors");
	}
}

// isMirror(w1, w2) will return true if w1 and w2 are mirrors of each other
function isMirror(w1, w2) {

	if(isSameLength(w1, w2)) {
		// check if words are same length
		for (var i=0; i<w1.length; i++) {
			// check each letter of w1 against w2
			if(w1[i] != w2[w2.length-1-i]) {
				// letters don't match
				return false;
			}
		}
		// for loop completed and all letters match
		return true;
	} else {
		// not the same length
		return false;
	}
}

// isSameLength will return true if w1 and w2 are same length
function isSameLength(w1, w2) {
	if(w1.length == w2.length) {
		// length is the same
		return true;
	} else {
		// length is not the same
		return false;
	}
}