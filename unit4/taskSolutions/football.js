function changeSeats() {
	// Function called when change in the dropdown menu.
	var seatingSelection = document.getElementById("seats");
	if(seatingSelection.value == "default") {
		// do nothing
	} else {
		calculateTotal();
	}
}

function enableLarge() {
	// Enable or disable the extra large button depending on meal deal selection
	var yesMDElement = document.getElementById("yesMealDeal");
	var extraLargeElement = document.getElementById("extraLarge");

	if(yesMDElement.checked) {
		// enable the extra large box
		extraLargeElement.disabled = false;
	} else {
		// disable the extra large box uncheck the box
		extraLargeElement.disabled = true;
		extraLargeElement.checked = false;
	}
}

function calculateTotal(){
	// Calculate the total cost of the tickets and display in the content2 area
	var totalPrice = 0;

	// Get the seating type
	var seatingSelection = document.getElementById("seats");
	var seatingPrice;

	if(seatingSelection.value == "seatsA") {
		seatingPrice = 50;
	} else if (seatingSelection.value == "seatsB") {
		seatingPrice = 40;
	} else if (seatingSelection.value == "seatsC") {
		seatingPrice = 20;
	} else {
		alert("Please select a type of seating.");
		seatingPrice = 0;
	}

	// Get number of tickets	
	var numTicketsElement = document.getElementById("numTickets");
	var numTickets = parseInt(numTicketsElement.value);
	
	totalPrice += numTickets * seatingPrice;

	// Determine if meal deal is selected and add to price
	var yesMDElement = document.getElementById("yesMealDeal");
	var extraLargeElement = document.getElementById("extraLarge");

	if(yesMDElement.checked) {
		totalPrice += 5 * numTickets;
	}

	if (extraLargeElement.checked) {
		totalPrice += 2 * numTickets;
	}


	var message = "You owe &pound;" + totalPrice;
	document.getElementById("content2").innerHTML = message;
}  