function calculateTotal() {
	var total = 0;
	if(document.getElementById("oil").checked) {
		total += 30.00;
	}
	if(document.getElementById("radiator").checked) {
		total += 40.00;
	}
	if(document.getElementById("trans").checked) {
		total += 100.00;
	}
	if(document.getElementById("inspection").checked) {
		total += 35.00;
	}
	if(document.getElementById("muffler").checked) {
		total += 200.00;
	}
	if(document.getElementById("tire").checked) {
		total += 20.00;
	}

	var totalElement = document.getElementById("total");
	totalElement.innerHTML = "Your total is &pound;" + total.toFixed(2);
	
}