var name = "American School in London";
var addressLine1 = "1 Waverley Place";
var addressLine2 = "London, UK NW8 0NP";

function showInfo() {
	var nameElement = document.getElementById("name");
	var address1Element = document.getElementById("address1");
	var address2Element = document.getElementById("address2");

	nameElement.innerHTML = name;
	address1Element.innerHTML = addressLine1;
	address2Element.innerHTML = addressLine2;
}

function quit() {

}