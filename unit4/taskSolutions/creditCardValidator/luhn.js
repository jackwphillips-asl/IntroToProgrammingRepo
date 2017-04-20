// accepts a credit card number as a number
// returns true if passes the luhn test
function luhn(ccNumber) {
  // convert cc number to an array of integers
  // eg 12345 -> [1,2,3,4,5]
  var ccNumberArray = ccNumber.toString().split("").map(function(d) {
    return parseInt(d)});
  // remove and save the last number  
  var lastNumber = ccNumberArray.pop();
  // reverse the digits in the array
  ccNumberArray = ccNumberArray.reverse();
  // double number in odd spot (first, third, fifth, etc.)
  // if a number in array is over 9, subtract 9
  for (var i=0; i<ccNumberArray.length; i+=2) {
    ccNumberArray[i] = ccNumberArray[i]*2 <= 9 ? ccNumberArray[i]*2 : ccNumberArray[i]*2 - 9;
  }
  // sum the numbers of the array
  var sum = 0;
  for (var i=0; i<ccNumberArray.length; i++) {
  	sum += ccNumberArray[i];
  }
  // return true if sum mod 10 is equal to the orginal last number
  return (sum % 10 == lastNumber);
}

/*
// For testing
console.log(luhn(4929353628739610)); // true
console.log(luhn(4929353628739611)); // false
*/