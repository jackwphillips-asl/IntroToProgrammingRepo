/* JavaScript file for Task01: TooClose */

var gx, gy; // grumpy's position
var bx, by; // blissful's position
var bstepX, bstepY; // blisfull's speed

function setup() {
  createCanvas(400, 300);
  // set initial values for variables
  gx = width/2;
  gy = height/2;
  bx = random(width);
  by = random(height);
  bstepX = 2;
  bstepY = 2;
}

function draw() {
  // clear the background every frame
  background(0);
  
  // call the tooClose function to determine what fill color to use for grumpy
  if(tooClose(gx, gy, bx, by, 80)) {
    fill(255, 0, 0); // red
  }
  else {
    fill(0, 0, 255); // blue
  }

  drawGrumpy(); // draw grumpy
  drawBlissful(); // draw blissful
  
  updateGrumpy(); // move grumpy
  updateBlissful(); // move blissful
  
}

// determines if two points are within "space" distance of each other
function tooClose(a, b, c, d, space) {
  if (dist(a, b, c, d) < space) {
    return true;
  }
  else {
    return false;
  }
}

function drawGrumpy() { 
  noStroke();
  ellipse(gx, gy, 40, 40);
}

function drawBlissful() { 
  fill(0, 255, 0);
  noStroke();
  ellipse(bx, by, 40, 40);
}

function updateGrumpy() {
  // take a step in a random direction
  gx += random(-1, 1);
  gy += random(-1, 1);
}

function updateBlissful() {
  // move blissful
  bx += bstepX;
  by += bstepY;
  // bounce off of vertical walls
  if (bx > width || bx < 0) {
    bstepX *= -1;
  }
  // bounce off of horizontal walls
  if (by > height || by < 0) {
    bstepY *= -1;
  }
}



