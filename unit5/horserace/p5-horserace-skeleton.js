// JavaScript File
/**
 * A horserace where the horses advance randomly.
 * Could be monetized?
 * 
 * K Collins
 * May 16, 2017
 * */

// create variables for our game components
var stable = [];
var startLine; // will be 1/10 screen from the left edge of canvas
var finishLine; // will be 9/10 from the left edge of the canvas
var numHorses = 10;
var raceOver = false;
var winningHorse;  // holds leading horse after each round of updates
var divisionSpacing;  // used to separate horses vertically down screen

function setup() {
  // create a canvas 640 pixels wide and 480 pixels tall
  createCanvas(640, 480);
  textSize(48);
  textAlign(CENTER);
  startLine = width / 10;
  finishLine = width * 9 / 10;
  divisionSpacing = height / (numHorses + 2);
  
  // using a loop, create numHorses horses and put each into the stable
  for () {// do it numHorses times
  
    // create a single horse.  
    var horse = {
      // Horses have the following properties
      // x, y, width, height, and uniqueColor
      // Horses have the following functions
      // draw(), update() 
      // your code here
    }
    // add the newly created horse to the array
    // your code here
  }
}

// this function is invoked repeatedly 
function draw() {
  background(64);
  // draw the start and finish lines
  stroke(255, 255, 0);
  line(startLine, 0, startLine, height);
  line(finishLine, 0, finishLine, height);
  stroke(0);
  // traverse the array of horses
  for (var i = 0; i < numHorses; i++) {
    if (!raceOver) {
      // invoke update() on the horse in position i
      // your code here
    }
    // invoke draw() on the horse in position i
    // your code here
  }
  
// NO NEED TO CHANGE THE CODE BELOW.  STUDY IT TO SEE WHAT IT DOES

  // determine furthest horse and whether it is across finish
  var maxDistance = 0;
  for (var i = 0; i < numHorses; i++) {
    if (stable[i].x > maxDistance) {
      maxDistance = stable[i].x;
      winningHorse = i;
    }
  }
  if (maxDistance > finishLine) raceOver = true;
  if (raceOver) {
    fill(255,255,0);
    text("And the winner is: " + winningHorse, width / 2, divisionSpacing);
  } else {
    fill(255);
    text("And they're off!", width/2, divisionSpacing)
  }
}
