/* JavaScript file for Task01: TooClose */

var grumpy;
var blissful;

function setup() {
  createCanvas(400, 300);
  grumpy = {
    x: width/2,
    y: height/2,
    draw: function { 
      noStroke();
      ellipse(this.x, this.y, 40, 40);
    }
    update: function {
      this.x += random(-1, 1);
      this.y += random(-1, 1);
    }
  }

  blissful = {
    x: random(width);
    y: random(height);
    stepX: 2;
    stepY: 2;
    draw: function () { 
      fill(0, 255, 0);
      noStroke();
      ellipse(this.x, this.y, 40, 40);
    },
    update: function () {
      this.x += this.stepX;
      this.y += this.stepY;
      if (this.x > width || this.x < 0) {
        this.stepX *= -1;
      }
      if (this.y > height || this.y < 0) {
        this.stepY *= -1;
      }
    } 
  };
}

function draw() {
  // clear the background every frame
  background(0);
  
  // call the tooClose function to determine what fill color to use for grumpy
  if(tooClose(grumpy.x, grumpy.y, blissful.x, blissful.y, 80)) {
    fill(255, 0, 0); // red
  }
  else {
    fill(0, 0, 255); // blue
  }

  grumpy.draw(); // draw grumpy
  blissful.draw(); // draw blissful
  
  grumpy.update(); // move grumpy
  blissful.update(); // move blissful
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








