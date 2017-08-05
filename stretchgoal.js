//Only basic yes/no inputs expected (for now)
var myArray = [
            ['how old are you? (Please enter yes or no)', 'yes', 0],
            ['where are you from? (Please enter yes or no', 'no', 0],
            ['how would you solve the housing crisis? (Please enter yes or no)', 'no', 0],
            ['Do I enjoy rock climbing, burritos, and chiptune music? (Please enter yes or no)', 'yes', 0],
            ['How are you? (Please enter yes or no)', 'yes', 0]
            ];

for (i = 0; i < myArray.length; i++){
    if (prompt(myArray[i][0]).toLowerCase() == myArray[i][1]){ //why cant i add tolowercase to this
        myArray[i][2] = 1;
        alert ('that\s right!');
    }
    else {
        alert ('NO');
    }
}