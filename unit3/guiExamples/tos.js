// This program does a simple check to see if the user has agreed to the terms of service.

function submit() {
	// Determine if the agree box has been checked.
	var checkBox = document.getElementById("agree_box");
	if(!checkBox.checked) {
		// Change the message red
		var message = document.getElementById("tos_message");
		message.style.color = "red";
	} else {
		alert("Form successfully submitted!");
	}
}