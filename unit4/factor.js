function factor() {
	var textDataString = document.getElementById("number").value;
	numberToFactor = parseInt(textDataString);

	var factor = 2;
	var factorMessage = "";

	while(numberToFactor > 1) {
		var remainder = numberToFactor % factor;
		
		if (remainder == 0) {
			factorMessage = factorMessage + factor;
			numberToFactor = numberToFactor / factor;
			
			if(numberToFactor > 1) {
				factorMessage = factorMessage + ", "
			}

		} else {
			factor = factor + 1;
		}
	}
	
	var messageElement = document.getElementById("factorList");
	messageElement.textContent = factorMessage;
}