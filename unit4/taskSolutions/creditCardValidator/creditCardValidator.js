// Functionality for the credit card validator

function validate() {
  var ccNumber = parseInt(document.getElementById("ccNumber").value);
  var ccType = document.getElementById("ccType").value;
  displayMessage(validateCardNumberAndType(ccNumber, ccType));
}

// function that accepts creditcard number and type
function validateCardNumberAndType(number, type) {
  if(luhn(number)) {
    // turns number into array of digits
    // eg 12345 -> ["1","2","3","4","5"]
    numberArray = number.toString().split("");
	if(type=="visa") {
	  console.log("Visa");
	  return (numberArray[0]=="4" && 
	          numberArray.length>=13 && 
	          numberArray.length<=16);
	} else if(type=="mastercard") {
	  console.log("MasterCard");
	  return (parseInt(numberArray[0]+numberArray[1])>=51 &&
	          parseInt(numberArray[0]+numberArray[1])<=55 &&
		      numberArray.length>=16 && 
		      numberArray.length<=19);
	} else if(type=="amex") {
	  console.log("American Express");
	  return (parseInt(numberArray[0]+numberArray[1])==34 ||
	          parseInt(numberArray[0]+numberArray[1])==37 &&
		      numberArray.length==15);
	}
  } else {
    console.log("Failed luhn");
    return false;
  }
}


// function displays message on webpage. Accepts true for a valid message
// or false for invalid message
function displayMessage(valid) {
  var messageElement = document.getElementById("message");
  if(valid) {
    messageElement.textContent = "Valid credit card number";
    messageElement.style.color = "black";
  } else {    
    messageElement.textContent = "Invalid credit card number";
    messageElement.style.color = "red";
  }
}