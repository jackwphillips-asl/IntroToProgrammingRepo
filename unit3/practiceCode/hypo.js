function calculateHypo() {
    // Your code here
    
    // Grab the text boxes and get the value
    var sideABox = document.getElementById("sideAbox");
    var sideAString = sideABox.value;
    var sideBBox = document.getElementById("sideBbox");
    var sideBBoxString = sideBBox.value;
        
    // Convert the value to numbers
    var sideA = parseFloat(sideAString);
    var sideB = parseFloat(sideBString);    
    
    // Calculate hypo using the hypotenuse function
    var hypoAnswer = hypotenuse(sideA, sideB);
    
    // Add hypotenuse answer to webpage
    var hypoParagraph = document.getElementById("hypo");
    hypoParagraph.textContent = hypoAnswer;
    
}

// Returns hypotenuse given two legs of a right triangle.
function hypotenuse(a, b) {
    return Math.sqrt(a*a + b*b);   
}
