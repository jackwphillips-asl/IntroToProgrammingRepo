// P5 sketch template
var img;

function setup() {
	// Code that will be run once     
 createCanvas(640, 480);
 img = loadImage("Papasmurf1.jpg");

}

function draw() {
	// Code that will loop indefinitely
    image(img, 0, 0, 50, 50);
    image(img, 200, 100, 100, 100);
}