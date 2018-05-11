var d;
var pictureURL;
var img;

function setup() {
  noCanvas();
  var url = "http://www.omdbapi.com/?t=Rocky&apikey=c29ab2ed";
  loadJSON(url, dataLoaded);
  
}

function dataLoaded(data) {
  d = data;
  pictureURL = d.Poster;
  document.getElementById("picture").src=pictureURL;
}
