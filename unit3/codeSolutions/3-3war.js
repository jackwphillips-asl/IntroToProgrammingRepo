/* This is a simplified version of the classic game of war. */

// Setup
var playerScore = 0;
var computerScore = 0;
var message;

// Welcome
alert("Welcome to the game of War. Press n for next hand or q to quit.");
// Get user response
var userChoice = prompt("What would you like to do (n/q):");

// Main game loop
while(userChoice != "q") {

    // Play next hand if player selects n
    if(userChoice == "n") {
        // Choose player card and computer card
        var MIN = 2;
        var MAX = 14;
        var playerNumber = Math.floor((MAX-MIN+1) * Math.random()) + MIN;
        var computerNumber = Math.floor((MAX-MIN+1) * Math.random()) + MIN;
    
        // Determine if should print number or letter for card for player
        var playerCard, computerCard;
        if(playerNumber < 11) {
            playerCard = "" + playerNumber;
        } else if (playerNumber == 11) {
            playerCard = "J";
        } else if (playerNumber == 12) {
            playerCard = "Q";
        } else if (playerNumber == 13) {
            playerCard = "K";
        } else if (playerNumber == 14) {
            playerCard = "A";
        }
        // Determine if should print number or letter for card for computer    
        if(computerNumber < 11) {
            computerCard = "" + computerNumber;
        } else if (computerNumber == 11) {
            computerCard = "J";
        } else if (computerNumber == 12) {
            computerCard = "Q";
        } else if (computerNumber == 13) {
            computerCard = "K";
        } else if (computerNumber == 14) {
            computerCard = "A";
        }
    
        // Display hand
        message  = "Your Card\t\t\tOpponent's Card\n" + playerCard + "\t\t\t\t" + computerCard;
        alert(message);
    
        // Decide and display who won
        if (playerNumber > computerNumber) {
            message = "You win the hand.";
            playerScore++;
        } else if (playerNumber < computerNumber) {
            message = "Your opponent wins the hand.";
            computerScore++;
        } else {
            message = "It's a push.";
        }
        alert(message);
    } else { // Something other than n was entered.
        alert("Invalid input.");
    }
    userChoice = prompt("What would you like to do (n/q):");
    
}

// Create closing message
message = "Your score is " + playerScore + ". Your opponent's score is " + computerScore + ".";
// Determine who won
if(playerScore > computerScore) {
    message += "<br>You win!";
} else if (playerScore < computerScore) {
    message += "<br>You lose!";
} else {
    message += "<br>It's a tie.";
}

message += "<br>Goodbye.";

closingMessage = document.createElement("p");
closingMessage.innerHTML = message;
document.body.append(closingMessage);
