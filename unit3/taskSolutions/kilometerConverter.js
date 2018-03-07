/* 
   kilometerConverter.js -- this program displays a distance in miles given a distance in kilometers by the user.
   Intro To Programming, 2018
*/

// Get input from user
//var kiloInput = prompt("Please enter a distance in kilometers.");
function mainProgram() {
	var kiloInputBox = document.getElementById("kmbox");
	var kiloInput = kiloInputBox.value;
	var kiloNum = parseFloat(kiloInput);
	
	// Convert the input to miles
	var milesOutput = kilometers2miles(kiloNum);
	
	//alert(kiloInput + " km is " + milesOutput + " mi.");
	var resultP = document.getElementById("resultPara");
	resultP.textContent = kiloInput + " km is " + milesOutput + " mi.";
}

// converts kilometers to miles
function kilometers2miles(km) {
	var miles = 0.6214 * km;
	return miles;
}


// Update the webpage

