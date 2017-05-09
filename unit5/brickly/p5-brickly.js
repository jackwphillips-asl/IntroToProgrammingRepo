// JavaScript File
/**
 * A basic BrickBreak/Breakout clone
 * K Collins
 * May 6, 2017
 * */
 
// create variables for our game components
var paddle; 
var ball; 

function setup() {
  // create a canvas 640 pixels wide and 480 pixels tall
  createCanvas(640, 480);
  // intialize our objects.  Done in setup() so that we have access
  // to the p5 variables 'width' and 'height' -- remember preprocessing?
  paddle={x:width/2, y:7*height/8, w:80, h:10};
  // notice the alternate syntax--easier to read?
  ball={
    x:width/2, // horizontal position starts halfway across the screen
    y:height/2, // vertical position starts halfway down the screen
    w:10, // the width to use when drawing the ball 
    h:10, // the height to use when drawing the ball
    dx:2, // the change in x-position, per frame
    dy:-3 // the change in y-position, per frame 
  }; 

  // set the drawing mode so that when drawing rectangles the (x,y) coordinates 
  // given are treated as the rectangle's center and not its upper left corner
  rectMode(CENTER);
}

// this function is invoked repeatedly 
function draw() {
  background(64);
  updatePaddle();
  updateBall();
  drawPaddle();
  drawBall();
}

// should be invoked once each frame before drawing the paddle
function updatePaddle() {
  // if the LEFT_ARROW key is down and the paddle is to the right of the left edge,
  // set the paddle location to 5 units less than its current value
  if (keyIsDown(LEFT_ARROW) && paddle.x>0) {
    paddle.x-=5;
  } 
  // if the RIGHT_ARROW key is down and the paddle is to the left of the right edge,
  else if (keyIsDown(RIGHT_ARROW) && paddle.x<width) {
    paddle.x+=5;
  }
}

// should be invoked once each frame once the paddle has been updated
function drawPaddle() {
  rect(paddle.x, paddle.y, paddle.w, paddle.h);
}

function updateBall(){
  // advance the ball horizontally
  ball.x+=ball.dx;
  // check if ball is now beyond the left screen edge
  if (ball.x<0) {
    ball.x = 0; // bring it back on screen
    ball.dx*=-1; // flip the dx value to 'bounce' horizontally
  } else if (ball.x>width) { // repeat for right edge
    ball.x = width;
    ball.dx*=-1;
  }  
  // advance the ball vertically
  ball.y+=ball.dy;
  // check if ball is now above the top of the screen 
  if (ball.y<=0) {
    ball.y=0; // set it to the top
    ball.dy*=-1; // flip the dy value so moves down
  } else if (ball.y>height) { // repeat for bottom edge
    ball.y = height;
    ball.dy*=-1;
  }
}

function drawBall(){
  ellipse(ball.x, ball.y, ball.w, ball.h);
}