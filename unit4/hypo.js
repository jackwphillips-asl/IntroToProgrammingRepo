function calculateHypo() {
	var sideA = document.getElementById("sideA").value;
	var sideB = document.getElementById("sideB").value;
	sideA = parseFloat(sideA);
	sideB = parseFloat(sideB);

	var sideC = hypotenuse(sideA, sideB);

	document.getElementById("hypo").value = sideC; 
}

function hypotenuse(a, b) {
    return Math.sqrt(a*a + b*b);   
}