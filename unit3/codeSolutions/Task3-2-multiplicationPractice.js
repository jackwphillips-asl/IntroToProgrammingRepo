/****************************
 * Multiplication practice game
 *
 * @author: Intro To Programming
 * @date: 2017
 ****************************/

function practice() {
		
	var score = 0;
	var result = 0;
	var answer;
	var numAnswer;
	alert("Let's get multiplyn'!!! (Type Q to quit)");
	
	while(true) {
		//random numbers generation
		var MIN = 0, MAX = 12;
		var firstNum = Math.floor((MAX-MIN+1)*Math.random()) + MIN;
		var secondNum = Math.floor((MAX-MIN+1)*Math.random()) + MIN;
		
		answer = prompt("" + firstNum + " x " + secondNum + "\nAnswer: ");
		result = firstNum*secondNum;	
		if (answer == "Q"){	
			alert("Your score is " + score + "\nGoodbye");
			break;
		} else {
			numAnswer = parseInt(answer);
			if (numAnswer == result) {
				score++;
				alert("Correct! Your score is " + score);
			} else {
				alert("Sorry the correct answer was " + result);
			}
		}
	}
}