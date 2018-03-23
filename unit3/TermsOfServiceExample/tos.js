/* TODO: When user hits submit button, this function should check
   if the box is checked. If it is, alert: "Form successfully submitted".
   It not, change the tos_message to red with this code:
      var message = document.getElementById("tos_message");
      message.style.color = "red";
   If message is red and then checkbox is checked and submitted, change back to black
*/
  

// --> void
// Checks if checkbox is checked and then responds accordingly
function submit() {
  var checkbox = document.getElementById("agree_box");
  var isChecked = checkbox.checked;
 
  if (isChecked == true) {
    alert("Form successfully submitted");
    changeColor("green");
  } else {
    changeColor("red");
  }
}


// string: clr --> void
// Changes the tos_message element color to clr 
function changeColor(clr) {
  var theMessage = document.getElementById("tos_message");
  theMessage.style.color = clr;
}