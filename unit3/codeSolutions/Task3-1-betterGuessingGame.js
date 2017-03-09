var MAX_GUESSES = 8;
var MAX = 100;
var MIN = 1;

function play() {
  var randomNumber = Math.floor((MAX-MIN+1) * Math.random()) + MIN;
  var guessesRemaining = MAX_GUESSES;
  var endGame = false;
  var message = "";

  var messageElement = document.getElementById("messagePara");

  while(!endGame) {
  	
  	var guessString = prompt("You have " + guessesRemaining + " guesses remaining.\n" + 
  		"Enter your guess (1-100, Q to quit):");
    
    if (guessString == "Q") {
    	message = "The correct number was " + randomNumber + ". Goodbye.";
    	endGame = true;
    }
  	else if(parseInt(guessString) == randomNumber) {
  		message = "Yes! Congratulations. You win.";
  		endGame = true;
  	} else if (parseInt(guessString) < randomNumber) {
  		alert("Too low");
  		guessesRemaining = guessesRemaining - 1;
  	} else {
  		alert("Too high");
  		guessesRemaining = guessesRemaining - 1;
  	}
  	messageElement.textContent = message;

  	if (guessesRemaining == 0) {
  		endGame = true;
  	}
  }

  if (guessesRemaining == 0) {
	message = "The correct number was " + randomNumber + ". Goodbye.";
	messageElement.textContent = message;
  }
}