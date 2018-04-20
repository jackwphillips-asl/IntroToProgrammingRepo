/**
 * This practice problem models a typical scenario that might be
 * present in an online game or part of an "Escape the Room"
 * adventure.  Given a lever and a knob, can you find the correct
 * combination?
 */
 
 // Secret winning conditions for the lever and knob
 var LEVER_CORRECT = "reverse";
 var KNOB_CORRECT = "leave";
 
 // Define a variable to track the number of incorrect attempts
 
 /**
  * Define and implement the function checkCombo() which compares the 
  * user's choices against the secret conditions.  
  * 
  * If the secret winning conditions are provided, set the background
  * color of the "game" <div> to light green and set the instruction
  * text to read "Congratulations, you have escaped back to humanity."
  * 
  * If the winning conditions are not both met, set the background color
  * of the "game" <div> to light yellow and set the instruction text to
  * "Hmmm... That didn't work."  Increment the number of attempts by one.
  * 
  * On the third incorrect attempt, set the background color of the "game"
  * <div> to red and the instruction text to "The lock clicks permanently
  * into place -- you will never escape."
  */