var fontsize = 20;
var maxsize = 30;
var minsize = 8;

function makeBigger() {
	var theMessage = document.getElementById("message");
	console.log(theMessage.style.width);
	fontsize = fontsize + 1;
	theMessage.style.fontSize = fontsize + "px";
	theMessage.textContent = "This message is size " + fontsize + "px";
	if(fontsize > maxsize || fontsize < minsize) {
		theMessage.style.color = "red";
	} else {
		theMessage.style.color = "black";
	}
}

function makeSmaller() {
	var theMessage = document.getElementById("message");
	fontsize = fontsize - 1;
	theMessage.style.fontSize = fontsize + "px";
	theMessage.textContent = "This message is size " + fontsize + "px";
	if(fontsize < minsize || fontsize > maxsize) {
		theMessage.style.color = "red";
	} else {
		theMessage.style.color = "black";
	}

}



