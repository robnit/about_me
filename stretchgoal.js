//Only basic yes/no inputs expected (for now)
var guess = ['how old are you? (Please enter yes or no)', 'yes', ]





//VVVVVOriginal code VVVVVV
//Question 1
var q1 = prompt('how old are you? (Please enter yes or no)').toLowerCase();

if (q1 === 'yes') {
  correctAnswers++;
  console.log('Correct answer guessed! User\'s score is ' + correctAnswers);
  alert ('correct!');
}
else if (q1.startsWith('y')){
  correctAnswers++;
  console.log('Correct answer guessed! User\'s score is ' + correctAnswers);
  alert ('it looks like you attempted to type \'yes\'');
}
else if (q1 === 'no'){
  console.log('User has entered incorrect input');
  alert ('incorrect answer');
}
else {
  console.log('User has entered incorrect input');
  alert ('invalid input');
}

//Question 2
var q2 = prompt('where are you from? (Please enter yes or no').toLowerCase();

if (q2 === 'yes'){
  console.log('User has entered incorrect input');
  alert ('incorrect answer');
}
else if (q2 === 'no'){
  correctAnswers++;
  console.log('Correct answer guessed! User\'s score is ' + correctAnswers);
  alert ('correct!');
}
else {
  console.log('User has entered incorrect input');
  alert ('invalid input');
}

//Question 3
var q3 = prompt('how would you solve the housing crisis? (Please enter yes or no)').toLowerCase();

if (q3 === 'yes'){
  console.log('User has entered incorrect input');
  alert ('incorrect answer');
}
else if (q3 === 'no'){
  correctAnswers++;
  console.log('Correct answer guessed! User\'s score is ' + correctAnswers);
  alert ('correct!');
}
else {
  console.log('User has entered incorrect input');
  alert ('invalid input');
}

//Question 4
var q4 = prompt('Do I enjoy rock climbing, burritos, and chiptune music? (Please enter yes or no)').toLowerCase();

if (q4 === 'yes'){
  correctAnswers++;
  console.log('Correct answer guessed! User\'s score is ' + correctAnswers);
  alert ('correct!');
}
else if (q4 === 'no'){
  console.log('User has entered incorrect input');
  alert ('incorrect answer');
}
else {
  console.log('User has entered incorrect input');
  alert ('invalid input');
}

//Question 5
var q5 = prompt('How are you? (Please enter yes or no)').toLowerCase();

if (q5 === 'yes'){
  correctAnswers++;
  console.log('Correct answer guessed! User\'s score is ' + correctAnswers);
  alert ('correct!');
}
else if (q5 === 'no'){
  console.log('User has entered incorrect input');
  alert ('incorrect answer');
}
else {
  console.log('User has entered incorrect input');
  alert ('invalid input');
}