// main function
function calculate() {
  // Get the user input from textbox
  var inputBox = document.getElementById("userInput");
  var inputString = inputBox.value;
  var input = parseFloat(inputString);
  
  // Do the math calculate80 function
  var cost = calculate80(input);
  
  // Display on webpage
  var output = document.getElementById("output");
  output.textContent = "The insurance cost is " + cost
}

// helper function
function calculate80(buildingCost) {
    var insuranceCost = buildingCost * .80;
    return insuranceCost;
}