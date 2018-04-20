/* 
 * Complete the following three functions. Don't forget to add your own comments
 * Name:
 * Date:
 */

// Message for error console to show script has been successfully loaded
console.log("JavaScript file has loaded");

function calculateTotal(){
	// This function should calculate the total price of the pizza when the button is pressed.
	// Getting this function to work, at least in part, is a good first step.
	
	var totalPrice = 0;

	// Calculate the price of the crust

	// Calculate the price of the cheese possibly with extra cheese

	// Calculate the price for the toppings

	// Display the total price
	var message = "You owe &pound;" + totalPrice;
	document.getElementById("output").innerHTML = message;	
}

function enableExtra() {
	// This function will allow the user to select the extra cheese option
	// when the cheese checkbox is checked
	
}

function noneSelected() {
	// This function will disable all of the topping checkboxes if the 'none' box is
	// selected. If the 'none' box is unselected, then the topping boxes are all enabled
	
	
}

