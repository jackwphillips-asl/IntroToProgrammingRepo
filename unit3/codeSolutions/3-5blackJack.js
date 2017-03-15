/* This is a simplified version of the game Black Jack. */

// Setup
var playerScore = 0;
var computerScore = 0;
var message;

// Welcome
alert("Welcome to the casino. Let's play Blackjack. Press n for next hand or q to quit.");
// Get user response
var userChoice = prompt("What would you like to do (n/q):");

// Main game loop
while(userChoice != "q") {

    // Play next hand if player selects n
    if(userChoice == "n") {
        // keep track of player and computer total
        var playerTotal = 0;
        var computerTotal = 0;
    
        // Choose 2 player cards
        var MIN = 1;
        var MAX = 13;
        var playerNumber1 = Math.floor((MAX-MIN+1) * Math.random()) + MIN;
        var playerNumber2 = Math.floor((MAX-MIN+1) * Math.random()) + MIN;
        
    
        // Determine if should print number or letter for card for player
        var playerCard1;
        if(playerNumber1 < 11 && playerNumber1 > 1) {
            playerCard1 = "" + playerNumber1;
        } else if (playerNumber1 == 11) {
            playerCard1 = "J";
            playerNumber1 = 10;
        } else if (playerNumber1 == 12) {
            playerCard1 = "Q";
            playerNumber1 = 10;
        } else if (playerNumber1 == 13) {
            playerCard1 = "K";
            playerNumber1 = 10;            
        } else if (playerNumber1 == 1) {
            playerCard1 = "A";
        }
        
        var playerCard2;
        if(playerNumber2 < 11 && playerNumber2 > 1) {
            playerCard2 = "" + playerNumber2;
        } else if (playerNumber2 == 11) {
            playerCard2 = "J";
            playerNumber2 = 10;
        } else if (playerNumber2 == 12) {
            playerCard2 = "Q";
            playerNumber2 = 10;
        } else if (playerNumber2 == 13) {
            playerCard2 = "K";
            playerNumber2 = 10;
        } else if (playerNumber2 == 1) {
            playerCard2 = "A";
        }
        
        playerTotal = playerNumber1 + playerNumber2;
        
        message = "You have a " + playerCard1 + " and a " + playerCard2 + ".";
        message += "\nYour total is " + playerTotal + ".";
        message += "\nWould you like to hit (h) or stick (s)?";
        
        var hitOrStick = prompt(message);
        
        while(hitOrStick != "s") {
        
            message = ""; // Reset the message variable;
        
            if (hitOrStick == "h") {
                // pick another card
                playerNumber1 = Math.floor((MAX-MIN+1) * Math.random()) + MIN;
                
                // Determine if should print number or letter for card for player
                if(playerNumber1 < 11 && playerNumber1 > 1) {
                    playerCard1 = "" + playerNumber1;
                } else if (playerNumber1 == 11) {
                    playerCard1 = "J";
                    playerNumber1 = 10;
                } else if (playerNumber1 == 12) {
                    playerCard1 = "Q";
                    playerNumber1 = 10;
                } else if (playerNumber1 == 13) {
                    playerCard1 = "K";
                    playerNumber1 = 10;
                } else if (playerNumber1 == 1) {
                    playerCard1 = "A";
                }
                
                // Determine next move
                playerTotal += playerNumber1;
                message = "You have a " + playerCard1 + ".";
                
                
            } else {
                alert("Invalid input.");
            }
            
            // Determine what the player would like to do.
            message += "\nYour total is " + playerTotal + ".";
            message += "\nWould you like to hit (h) or stick (s)?";
        
            hitOrStick = prompt(message);
        }
        
        // Computer's turn
        var computerNumber1 = Math.floor((MAX-MIN+1) * Math.random()) + MIN;
        var computerNumber2 = Math.floor((MAX-MIN+1) * Math.random()) + MIN;
        
        // Determine if should print number or letter for card1 for computer 
        var computerCard1;  
        if(computerNumber1 < 11 && computerNumber1 > 1) {
            computerCard1 = "" + computerNumber1;
        } else if (computerNumber1 == 11) {
            computerCard1 = "J";
            computerNumber1 = 10;
        } else if (computerNumber1 == 12) {
            computerCard1 = "Q";
            computerNumber1 = 10;
        } else if (computerNumber1 == 13) {
            computerCard1 = "K";
            computerNumber1 = 10;
        } else if (computerNumber1 == 1) {
            computerCard1 = "A";
        }
        
        // Determine if should print number or letter for card2 for computer 
        var computerCard2;  
        if(computerNumber2 < 11 && computerNumber2 > 1) {
            computerCard2 = "" + computerNumber2;
        } else if (computerNumber2 == 11) {
            computerCard2 = "J";
            computerNumber2 = 10;
        } else if (computerNumber2 == 12) {
            computerCard2 = "Q";
            computerNumber2 = 10;
        } else if (computerNumber2 == 13) {
            computerCard2 = "K";
            computerNumber2 = 10;
        } else if (computerNumber2 == 1) {
            computerCard2 = "A";
        }
    
        computerTotal = computerNumber1 + computerNumber2;
        
        message = "The dealer has a " + computerCard1 + " and a " + computerCard2 + ".";
        message += "\nHer total is " + computerTotal + ".";
        alert(message);
        
        // Continue to draw cards for computer until total is 17 or more;
        while(computerTotal < 17) {
             // Computer's turn
            computerNumber1 = Math.floor((MAX-MIN+1) * Math.random()) + MIN;
    
            // Determine if should print number or letter for card1 for computer 
            computerCard1;  
            if(computerNumber1 < 11 && computerNumber1 > 1) {
                computerCard1 = "" + computerNumber1;
            } else if (computerNumber1 == 11) {
                computerCard1 = "J";
                computerNumber1 = 10;
            } else if (computerNumber1 == 12) {
                computerCard1 = "Q";
                computerNumber1 = 10;
            } else if (computerNumber1 == 13) {
                computerCard1 = "K";
                computerNumber1 = 10;
            } else if (computerNumber1 == 1) {
                computerCard1 = "A";
            }
            
            computerTotal += computerNumber1;
            
            message = "The dealer drew a " + computerCard1 + ".";
            message += "\nHer total is " + computerTotal + ".";
            alert(message);
        }
        
        // Display totals.
        message = "You have " + playerTotal + ". The dealer has " + computerTotal + ".";
        
        // Decide and display who won
        if (playerTotal > 21) {
            message += "\nYou bust.";
            computerScore++;
        } else if (computerTotal > 21) {
            message += "\nThe dealer busts.";
            playerScore++;
        } else if (playerTotal > computerTotal) {
            message += "\nYou win.";
            playerScore++;
        } else if (playerTotal < computerTotal) {
            message += "\nYou lose.";
            computerScore++;
        } else {
            message += "\nIt's a push.";
        }
        alert(message);
    } else { // Something other than n was entered.
        alert("Invalid input.");
    }
    userChoice = prompt("What would you like to do (n/q):");
}

// Create closing message
message = "Your score is " + playerScore + ". The dealer's score is " + computerScore + ".";
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
