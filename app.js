/*
if (!confirm('By clicking OK, u agree to the terms and conditions of my Web site')){
    alert('I\'ll let you in anyways');
}
*/
var correctAnswers = 0;

var q1 = prompt('please type a letter or a number');
q1 = q1.toLowerCase();

if (q1.length > 1){
    alert ('too many characters, u failed');
}

else if (!RegExp(/[a-z0-9]/).test(q1)){
    alert ('no forbidden characters allowed');
}

else if ((RegExp(/[a-z]/).test(q1))){
    correctAnswers++;
    alert ('good letter');
}

else if ((RegExp(/[0-9]/).test(q1))){
    correctAnswers++;
    alert ('that\'s a fine number');
}