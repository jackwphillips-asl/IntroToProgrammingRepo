// This program demonstrates radio buttons and drop down menus

function menuChanged() {
  // Get the menu color and change the title
  var menuElement = document.getElementById("color_menu");
  var selectedColor = menuElement.value;
  changeColor(selectedColor);
  
  // Select the corresponding radio button
  if(selectedColor == "blue") {
    document.getElementById("blue_radio").checked = true;
  } else if(selectedColor == "red") {
    document.getElementById("red_radio").checked = true;
  } else if(selectedColor == "green") {
    document.getElementById("green_radio").checked = true;
  }
  
}

function radioClicked() {
  var selectedColor;

  // Figure out which radio is selected
  if (document.getElementById("blue_radio").checked) {
    selectedColor = "blue";
  } else if (document.getElementById("red_radio").checked) {
    selectedColor = "red";  
  } else if (document.getElementById("green_radio").checked) {
    selectedColor = "green";  
  }
  // Set the title color
  changeColor(selectedColor);
  
  // Set the menu to the corresponding color
  var menuElement = document.getElementById("color_menu");
  menuElement.value = selectedColor;
  
}

function changeColor(clr) {
  document.body.style.backgroundColor = clr;
}