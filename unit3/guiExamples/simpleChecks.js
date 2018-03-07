// This js file controls the actions of the checkboxes

function doesNothing() {
  // This function does nothing
}

function toggleCheck() {
  // This function will cause all boxes to be checked when the
  // second box is checked
  
  var checker = document.getElementById("check_all_box");
  if(checker.checked) {
    // check the other boxes
    document.getElementById("nothing_box").checked = true;
    document.getElementById("disable_box").checked = true;
  } else {
    // uncheck the other boxes
    document.getElementById("nothing_box").checked = false;
    document.getElementById("disable_box").checked = false;
  }
}

function toggleDisable() {
  // This function will disable/enable the first two boxes
  
  var disabler = document.getElementById("disable_box");
  if(disable_box.checked) {
    // disable the first two boxes
    document.getElementById("nothing_box").disabled = true;
    document.getElementById("check_all_box").disabled = true;
  } else {
    // enable the first two boxes
    document.getElementById("nothing_box").disabled = false;
    document.getElementById("check_all_box").disabled = false;
  }
}