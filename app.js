/*
if (!confirm('By clicking OK, u agree to the terms and conditions of my Web site')){
    alert('I\'ll let you in anyways');
}
*/
var correctAnswers = 0;

//Question 1
var q1 = prompt('what is your name? (Please enter yes or no)');
q1 = q1.toLowerCase();

if (q1 === 'yes') {
    correctAnswers++;
    alert ('correct!');
}
else if (q1 === 'no'){
    alert ('incorrect answer');
}
else {
    alert ('incorrect answer');
}

//Question 2
var q2 = prompt('where are you from? (Please enter yes or no');
q2 = q2.toLowerCase();

if (q2 === 'yes'){
    alert ('incorrect answer');
}
else if (q2 === 'no'){
    correctAnswers++;
    alert ('correct!');
}
else {
    alert ('incorrect answer');
}

//Question 3
var q3 = prompt('how would you solve the housing crisis? (Please enter yes or no)');
q3 = q3.toLowerCase();

if (q3 === 'yes'){
    alert ('incorrect answer');
}
else if (q3 === 'no'){
    correctAnswers++;
    alert ('correct!');
}
else {
    alert ('incorrect answer');
}


// Bonus Question
var bonusQ = prompt('please type a letter or a number');
bonusQ = bonusQ.toLowerCase();

if (bonusQ.length != 1){
    alert ('only one character required');
}

else if (!RegExp(/[a-z0-9]/).test(bonusQ)){
    alert ('no forbidden characters allowed');
}

else if ((RegExp(/[a-z]/).test(bonusQ))){
    correctAnswers++;
    alert ('good letter');
}

else if ((RegExp(/[0-9]/).test(bonusQ))){
    correctAnswers++;
    alert ('that\'s a fine number');
}
