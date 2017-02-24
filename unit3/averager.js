// JavaScript File
var total = 0;
var numScores = 0;
// ask for user input five times
for (var i = 0; i<5; i++) {
    var score = prompt("Enter another score", 76);
    var scoreNum = parseInt(score);
    total = total + scoreNum;
    numScores = numScores +1;
}
var outputString = "There were "+numScores+" scores.\n";
outputString += "The total sum was "+total+"\n";
// calculate and add the average to the output
outputString += "The resulting average is "+total/numScores;
alert(outputString);