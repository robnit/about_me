var correctAnswers = 0;
var userName = prompt('Please enter your name');

var myArray = [
['how old are you? (Please enter yes or no)', 'yes'],
  ['where are you from? (Please enter yes or no', 'no'],
  ['how would you solve the housing crisis? (Please enter yes or no)', 'no'],
  ['Do I enjoy rock climbing, burritos, and chiptune music? (Please enter yes or no)', 'yes'],
  ['How are you? (Please enter yes or no)', 'yes']
];

function yesNo (question,correctAnswer){
  console.log('Input question variable is: ' + question);
  if (prompt(question).toLowerCase() === correctAnswer){
    correctAnswers++;
    alert ('Correct');
    console.log(correctAnswers + ' questions guessed correctly');
    console.log('User inputted correct answer:' + correctAnswer);
  }
  else {
    alert ('Incorrect!');
    myArray[i][2]--;
    console.log('User inputted incorrect answer.');
  }
} 

for (i = 0; i < myArray.length; i++){
  yesNo( myArray[i][0], myArray[i][1] );
}

//Bonus Question
var bonusQ = prompt('***BONUS QUESTION***\n please type a letter or a number').toLowerCase();

if (bonusQ.length != 1){
  console.log('User has entered incorrect input');
  alert ('only one character required');
}

else if (!RegExp(/[a-z0-9]/).test(bonusQ)){
  console.log('User has entered incorrect input');
  alert ('no forbidden characters allowed');
}

else if ((RegExp(/[a-z]/).test(bonusQ))){
  correctAnswers++;
  console.log('Correct answer guessed! User\'s score is ' + correctAnswers);
  alert ('good letter');
}

else if ((RegExp(/[0-9]/).test(bonusQ))){
  correctAnswers++;
  console.log('Correct answer guessed! User\'s score is ' + correctAnswers);
  alert ('that\'s a fine number');
}

//Question 6
var guesses = 3;
var goodNumber = Math.floor(Math.random(0,9) * 10);
var numberGuess = parseInt(prompt('please choose the best number between 1 and 10\nGuesses left: ' + (guesses + 1)));

while (parseInt(numberGuess) !== goodNumber && guesses > 0){ //Runs loop while guess is incorrect OR if guesses are greater than 0
  //Returns error if input isn't all numbers
  if (RegExp(/[^\d]/).test(numberGuess)) {
    alert('invalid input, please only numbers');
    console.log('User has entered incorrect input');
    guesses--;
    numberGuess = parseInt(prompt('please choose the best number\nGuesses left: ' + (guesses + 1)));
  }
  else if (numberGuess < goodNumber){
    alert ('too low');
    console.log('User has entered incorrect input'); 
    guesses--;
    numberGuess = parseInt(prompt('please choose the best number\nGuesses left: ' + (guesses + 1)));
  }
  else if (numberGuess > goodNumber){
    alert ('too high');
    console.log('User has entered incorrect input');
    guesses--;
    numberGuess = parseInt(prompt('please choose the best number\nGuesses left: ' + guesses));
  }
} //end of while loop

//Afterwards, returns message based on exit state of previous while loop
if (parseInt(numberGuess) === goodNumber){
  correctAnswers++;
  console.log('Correct answer guessed! User\'s score is ' + correctAnswers);
  alert('congratulations! you won!');
}
else{
  alert('u failed horribly :(');
}

//Question 7
guesses = 6;
var answerArray = ['burd','mitten','tomclancy','denim','slime','drums']; 
var correctTracker = 0;

//Returns error if input isn't all letters
while (correctTracker === 0 && guesses > 0){
  var wordGuess = prompt('please enter the best word\nGuesses left: ' + guesses).toLowerCase();
  if (RegExp(/[^\w]/).test(wordGuess)){
    guesses--;
    alert('invalid input, please only letters');
    console.log('User has entered incorrect input');
  }
  else {
    for (i = 0; i < answerArray.length; i++){
      if (answerArray[i] == wordGuess){
        correctTracker = 1;
      }
    }
    if (correctTracker === 0){
      guesses--;
      alert ('incorrect');
      console.log('User has entered incorrect input');
    }
  }
} //end of while loop

if (correctTracker === 1){
  correctAnswers++;
  console.log('Correct answer guessed! User\'s score is ' + correctAnswers);
  answerArray.splice((answerArray.indexOf(wordGuess)),1);
  alert('That\'s right!\nI also would have accepted ' + answerArray.join(', '));
}
else if (guesses === 0){
  alert('Mission Failed\nObviously, the best words are: ' + answerArray.join(', '));
  console.log('User has entered incorrect input');
}
else {
  alert('error');
}

//Final Tally
console.log('User has earned a total of ' + correctAnswers + ' points');
if (correctAnswers === 8){
  alert('you have earned the maximum number of points!\n7 out of a possible 7 plus the bonus question!\nyou are either a genius or you cheated');
}
else {
  alert('Good job, ' + userName + '!\nYou earned ' + correctAnswers + ' out of a possible 7');
}