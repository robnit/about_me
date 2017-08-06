var myArray = [
  ['how old are you? (Please enter yes or no)', 'yes', 0],
  ['where are you from? (Please enter yes or no', 'no', 0],
  ['how would you solve the housing crisis? (Please enter yes or no)', 'no', 0],
  ['Do I enjoy rock climbing, burritos, and chiptune music? (Please enter yes or no)', 'yes', 0],
  ['How are you? (Please enter yes or no)', 'yes', 0]
];
totalAnswers = 0;
for (i = 0; i < myArray.length; i++){
  if (prompt(myArray[i][0]).toLowerCase() == myArray[i][1]){
    myArray[i][2] = 1;
    totalAnswers++;
    alert ('that\s right!');
  }
  else {
    alert ('NO');
  }
}

// do while loop to integrate numGuesses??

//BonusQ function - tests if input valid letter or number.
//function parameters: prompt message , letter/number specification, number of guesses

//Q6 function - guess a random number, 4 guesses, ends if no more guesses -or- if correct number guessed
//function parameters: prompt message , answer condition (answer is randomly generated number), number of guesses

//Q7 function - guess word in array, 6 guesses, ends if no more guesses -of- if answer guessed is in array
//function parameters: prompt message, answer condition (answer is in array), number of guesses

alert ('You guessed ' + totalAnswers + ' correctly.');