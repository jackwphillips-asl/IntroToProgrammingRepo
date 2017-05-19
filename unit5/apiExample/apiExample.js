var d;

function setup() {
  createCanvas(500, 400);
  var url = "http://www.omdbapi.com/?t=ANCHORMAN&y=2004";
  loadJSON(url, dataLoaded);
}

function draw() {
  background(200);
}

function dataLoaded(data) {
  d = data
}