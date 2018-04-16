// Runs once when the page loads
function setup() {
  createCanvas(500, 500);
  smooth();
}

// Helper function that draws a random, borderless triangle
function drawRandomTriangle() {
  // Keep away from edges
  var PADDING = 50;
  // create random x, y somewhere on the canvas
  var x = random(PADDING, width-PADDING);
  var y = random(PADDING, height-PADDING);
  var x2 = random(x-PADDING, x+PADDING);
  var y2 = random(y-PADDING, y+PADDING);
  var x3 = random(x-PADDING, x+PADDING);
  var y3 = random(y-PADDING, y+PADDING);
  // generate random color
  var clr = color(random(255), random(255), random(255));
  // do some drawing
  fill(clr);
  noStroke();
  triangle(x, y, x2, y2, x3, y3);
}

// Main function that runs when Draw button is pressed.
function main() {
  // Get the number in the text box
  var num = parseInt(document.getElementById("numberOfTriangles").value);
  // Keep track of how many triangles have been drawn
  var counter = 0;
  // Clear the canvas
  background(255);
  // Draw num triangles
  while(counter < num) {
    drawRandomTriangle();
    counter = counter + 1;
  }
}
