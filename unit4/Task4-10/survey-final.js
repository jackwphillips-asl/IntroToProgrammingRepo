var question1 = "What is your favorite Harry Potter novel?";
var q1_answer1 = "Deathly Hallows";
var q1_answer2 = "Half-Blood Prince"
var q1_answer3 = "Philosopher's Stone"

var question2 = "Who is your favorite Harry Potter character?";
var q2_answer1 = "Harry";
var q2_answer2 = "Hermione";
var q2_answer3 = "Ron";

var answerToQuestion1, answerToQuestion2, currentQuestion;
currentQuestion = 1;

main();

function main() {
	loadQuestion(currentQuestion);
}

function loadQuestion(questionNumber) {
	var questionElement = document.getElementById("question");
	var answerElement1 = document.getElementById("answer1_text");
	var answerElement2 = document.getElementById("answer2_text");
	var answerElement3 = document.getElementById("answer3_text");

	if(questionNumber==1) {
		question.innerHTML = question1;
		answerElement1.innerHTML = q1_answer1;
		answerElement2.innerHTML = q1_answer2;
		answerElement3.innerHTML = q1_answer3;
	} else {
		question.innerHTML = question1;
		answerElement1.innerHTML = q2_answer1;
		answerElement2.innerHTML = q2_answer2;
		answerElement3.innerHTML = q2_answer3;
	}
}

function submitAnswers() {
	if(currentQuestion == 1) {
		if(document.getElementById("answer1").checked) {
			answerToQuestion1 = q1_answer1;
		} else if (document.getElementById("answer2").checked) {
			answerToQuestion1 = q1_answer2;
		} else if (document.getElementById("answer3").checked) {
			answerToQuestion1 = q1_answer3;
		}
		currentQuestion = 2;
		loadQuestion(2);
	} else if (currentQuestion == 2) {
		if(document.getElementById("answer1").checked) {
			answerToQuestion2 = q2_answer1;
		} else if (document.getElementById("answer2").checked) {
			answerToQuestion2 = q2_answer2;
		} else if (document.getElementById("answer3").checked) {
			answerToQuestion2 = q2_answer3;
		}

		var message = "I agree. " + answerToQuestion2 + " is great in " + answerToQuestion1;

		var responseElement = document.getElementById("response");
		responseElement.innerHTML = message;
	}

	
}


