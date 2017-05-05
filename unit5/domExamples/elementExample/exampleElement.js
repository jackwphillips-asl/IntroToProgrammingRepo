var wordElements = [];

function setup() {
  var text = "Now is the winter of our discontent.";
  var words = text.split(" ");
  for(var i=0; i<words.length; i++) {
    var spannedWord = createSpan(words[i]);
    spannedWord.position(random(600), random(200));
    wordElements.push(spannedWord);
  }
}

function draw() {
  for (var i=0; i<wordElements.length; i++) {
    var x = wordElements[i].x + random(-6, 6);
    var y = wordElements[i].y + random(-6, 6);
    wordElements[i].position(x, y);
  }
}