/*
if (!confirm('By clicking OK, u agree to the terms and conditions of my Web site')){
    alert('I\'ll let you in anyways');
}
*/
// var correctAnswers = 0;

// //Question 1
// var q1 = prompt('what is your name? (Please enter yes or no)').toLowerCase();

// if (q1 === 'yes') {
//   correctAnswers++;
//   console.log('Correct answer guessed! User\'s score is ' + correctAnswers);
//   alert ('correct!');
// }

// else if (q1.startsWith('y')){
//   correctAnswers++;
//   console.log('Correct answer guessed! User\'s score is ' + correctAnswers);
//   alert ('it looks like you attempted to type \'yes\'');
// }

// else if (q1 === 'no'){
//   console.log('User has entered incorrect input');
//   alert ('incorrect answer');
// }
// else {
//   console.log('User has entered incorrect input');
//   alert ('invalid input');
// }

// //Question 2
// var q2 = prompt('where are you from? (Please enter yes or no').toLowerCase();

// if (q2 === 'yes'){
//   console.log('User has entered incorrect input');
//   alert ('incorrect answer');
// }
// else if (q2 === 'no'){
//   correctAnswers++;
//   console.log('Correct answer guessed! User\'s score is ' + correctAnswers);
//   alert ('correct!');
// }
// else {
//   console.log('User has entered incorrect input');
//   alert ('invalid input');
// }

// //Question 3
// var q3 = prompt('how would you solve the housing crisis? (Please enter yes or no)').toLowerCase();

// if (q3 === 'yes'){
//   console.log('User has entered incorrect input');
//   alert ('incorrect answer');
// }
// else if (q3 === 'no'){
//   correctAnswers++;
//   console.log('Correct answer guessed! User\'s score is ' + correctAnswers);
//   alert ('correct!');
// }
// else {
//   console.log('User has entered incorrect input');
//   alert ('invalid input');
// }

// //Question 4
// var q4 = prompt('Do I enjoy rock climbing, burritos, and chiptune music? (Please enter yes or no)').toLowerCase();

// if (q4 === 'yes'){
//   correctAnswers++;
//   console.log('Correct answer guessed! User\'s score is ' + correctAnswers);
//   alert ('correct!');
// }
// else if (q4 === 'no'){
//   console.log('User has entered incorrect input');
//   alert ('incorrect answer');
// }
// else {
//   console.log('User has entered incorrect input');
//   alert ('invalid input');
// }

// //Question 5
// var q5 = prompt('How are you? (Please enter yes or no)').toLowerCase();

// if (q5 === 'yes'){
//   correctAnswers++;
//   console.log('Correct answer guessed! User\'s score is ' + correctAnswers);
//   alert ('correct!');
// }
// else if (q5 === 'no'){
//   console.log('User has entered incorrect input');
//   alert ('incorrect answer');
// }
// else {
//   console.log('User has entered incorrect input');
//   alert ('invalid input');
// }

// // Bonus Question
// var bonusQ = prompt('***BONUS QUESTION***\n please type a letter or a number').toLowerCase();

// if (bonusQ.length != 1){
//   console.log('User has entered incorrect input');
//   alert ('only one character required');
// }

// else if (!RegExp(/[a-z0-9]/).test(bonusQ)){
//   console.log('User has entered incorrect input');
//   alert ('no forbidden characters allowed');
// }

// else if ((RegExp(/[a-z]/).test(bonusQ))){
//   correctAnswers++;
//   console.log('Correct answer guessed! User\'s score is ' + correctAnswers);
//   alert ('good letter');
// }

// else if ((RegExp(/[0-9]/).test(bonusQ))){
//   correctAnswers++;
//   console.log('Correct answer guessed! User\'s score is ' + correctAnswers);
//   alert ('that\'s a fine number');
// }

//Question 6
var guesses = 3;
var goodNumber = 69;
var numberGuess = parseInt(prompt('please choose the best number\nGuesses left: ' + (guesses + 1)));

while (parseInt(numberGuess) !== goodNumber && guesses > 0){ //Runs loop while guess is incorrect OR if guesses are greater than 0
  //Returns error if input isn't all numbers
  if (RegExp(/[^\d]/).test(numberGuess)) {
    // alert(numberGuess);
    //This alternative if condition doesn't work and I don't know why
    // if (numberGuess == NaN) {
    alert('invalid input, please only numbers');
    guesses--;
    numberGuess = parseInt(prompt('please choose the best number\nGuesses left: ' + (guesses + 1)));
  }
  else if (numberGuess < goodNumber){
    alert ('too low'); 
    guesses--;
    numberGuess = parseInt(prompt('please choose the best number\nGuesses left: ' + (guesses + 1)));
  }
  else if (numberGuess > goodNumber){
    alert ('too high');
    guesses--;
    numberGuess = parseInt(prompt('please choose the best number\nGuesses left: ' + guesses));
  }
} //end of while loop

//Afterwards, returns message based on exit state of previous while loop
if (parseInt(numberGuess) === goodNumber){
  // correctAnswers++;
  alert('congratulations! you won!');
}
else{
  alert('u failed horribly :(');
}


// //Question 7

// var answerArray = ['burd','mitten','johnmadden','snakes','slime','drums']; 

// guesses = 6;
// var wordGuess = prompt('please enter the best word');

// //Returns error if input isn't all letters
// if (RegExp(/[^\w]/).test(numberGuess)){
//   alert('invalid input, please only letters');
// }

// //process answer through case sensitivity and exclusive alphabet character verification

// //loop terminates if user has guessed successsfully or if user has exceeded 6 tries