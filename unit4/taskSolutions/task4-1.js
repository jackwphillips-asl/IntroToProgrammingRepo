// Converts km to miles

function km2miles(k) {
	// Beautifully simple function that converts km to mi
	return k * 0.6214;
}

function generateOutput(k, m) {
	// Generate the final message given arguments k (kilometers)
	// and m (miles)
	var message = k + " kilometers is " + m.toFixed(3) + " miles.";
	var header = document.getElementById("output");
	header.innerHTML = message;
}

function doTheConversion() {
    // Gets the value of textbox, does the conversion, then updates the output

    // Get the input fro text box
    var box = document.getElementById("theBox");
    var boxInput = box.value; // instead of prompt
    var km = parseFloat(boxInput);

    //conversion
	var miles = km2miles(km);

	//output
	generateOutput(boxInput, miles);
}

