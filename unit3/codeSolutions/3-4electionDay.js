/* This program will count votes in a local election. */

// Setup
var polyVotes = 0;
var earnestVotes = 0;
var message;

// Welcome
alert("Election Day Vote Counting Program");
// Get user response
var userChoice = prompt("Enter results for a precinct? (y/n)");

// Main program loop
while(userChoice != "n") {

    // Enter next set of votes if user selects y
    if(userChoice == "y") {
    
        // Prompt user for number of votes
        polyVotes += parseInt(prompt("Enter number of votes for Polly:"));
        earnestVotes += parseInt(prompt("Enter number of votes for Ernest:"));
    
    } else { // Something other than y or n was entered.
        alert("Invalid input.");
    }

    // Ask for another precinct
    userChoice = prompt("Enter results from another precinct? (y/n)");
    
}

// Create closing message
message = "Votes for Polly: " + polyVotes + "<br>Votes for Ernest: " + earnestVotes;

// Determine who won
if(polyVotes > earnestVotes) {
    message += "<br>Polly wins!";
} else if (polyVotes < earnestVotes) {
    message += "<br>Earnest wins!";
} else {
    message += "<br>It's a tie. I demand a recount!";
}


closingMessage = document.createElement("p");
closingMessage.innerHTML = message;
document.body.append(closingMessage);

