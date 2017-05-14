// JavaScript File
/**
 * A basic BrickBreak/Breakout clone
 * Demonstrates using an array to hold references
 * to multiple (eight) bricks. 
 * 
 * K Collins
 * May 12, 2017
 * */

// create variables for our game components
var paddle;
var ball;
var numLives = 3;
var numHits = 0;
var bricks = [];

function setup() {
  // create a canvas 640 pixels wide and 480 pixels tall
  createCanvas(640, 480);
  // set the drawing mode so that when drawing rectangles the (x,y) coordinates 
  // given are treated as the rectangle's center and not its upper left corner
  rectMode(CENTER);
  // intialize our objects.  Done in setup() so that we have access
  // to the p5 variables 'width' and 'height' -- remember preprocessing?
  // create a paddle object with named values (variables) and behaviors (functions)
  paddle = {
    x: width / 2,
    y: 7 * height / 8,
    w: 80,
    h: 10,
    update: function() {
      // if the LEFT_ARROW key is down and the paddle is to the right of the left edge,
      // set the paddle location to 5 units less than its current value
      if (keyIsDown(LEFT_ARROW) && this.x > 0) {
        this.x -= 5;
      }
      // if the RIGHT_ARROW key is down and the paddle is to the left of the right edge,
      else if (keyIsDown(RIGHT_ARROW) && this.x < width) {
        this.x += 5;
      }
    },
    draw: function() {
      // draw a paddle centered on paddleCenter (x) but 7/8ths the way down the screen
      // a typical size for a paddle might be 80 pixels wide and 10 pixels high
      fill(255, 255, 0);
      rect(this.x, this.y, this.w, this.h);
    }
  };
  // create a ball object with named values (variables) and behaviors (functions)
  ball = {
    x: width / 2, // horizontal position starts halfway across the screen
    y: height / 2, // vertical position starts halfway down the screen
    w: 10, // the width to use when drawing the ball 
    h: 10, // the height to use when drawing the ball
    dx: 2, // the change in x-position, per frame
    dy: -3, // the change in y-position, per frame 
    update: function() {
      // advance the ball horizontally
      this.x += this.dx;
      // check if ball is now beyond the left screen edge
      if (this.x < 0) {
        this.x = 0; // bring it back on screen
        this.dx *= -1; // flip the dx value to 'bounce' horizontally
      }
      else if (this.x > width) { // repeat for right edge
        this.x = width;
        this.dx *= -1;
      }
      // advance the ball vertically
      this.y += this.dy;
      // check if ball is now above the top of the screen 
      if (this.y <= 0) {
        this.y = 0; // set it to the top
        this.dy *= -1; // flip the dy value so moves down
      }
      else if (this.checkCollidePaddle()) {
        this.y = paddle.y - paddle.h / 2 - this.h / 2;
        this.dy *= -1;
        numHits++;
      }
      else if (this.y > height) { // repeat for bottom edge
        numLives--;
        this.y = height / 2;
        this.x = width / 2;
        this.dx = -2;
        this.dy = -3;
      }
    },
    checkCollidePaddle: function() {
      var verticalDifference = paddle.y - this.y;
      var maxDifference = (paddle.h + this.h) / 2;
      if (verticalDifference < maxDifference) {
        if (this.x > paddle.x - paddle.w / 2 && this.x < paddle.x + paddle.w / 2) {
          return true;
        }
      }
      else return false;
    },
    draw: function() {
      fill(255);
      ellipse(this.x, this.y, this.w, this.h);
    }
  };

  for (var i = 0; i < 8; i++) {
    // create a brick object with named values (variables) and behaviors (functions)
     var brick = {
      x: i * 80 + 40,
      y: 100,
      w: 78,
      h: 20,
      c:color(random(255), random(255), random(255)),
      draw: function() {
        fill(this.c);
        rect(this.x, this.y, this.w, this.h);
      }
    }
    bricks[i] = brick;
  }
}

// this function is invoked repeatedly 
function draw() {
  background(64);
  paddle.update();
  ball.update();
  paddle.draw();
  ball.draw();
  for (var i = 0; i<8; i++) {
    bricks[i].draw();
  }

}
