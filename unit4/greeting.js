// Main program
main();

// Prompt user for name and display output
function greeting() {
	var name = prompt("What is your name?");
	alert("Welcome, " + name);
}

// Call greeting three times
function main() {
	for(var i=0;i<3;i++) {
	greeting();
	}
}