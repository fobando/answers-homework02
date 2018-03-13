var wordLettersArr = ['F','O','X'];
var guessedLettersArr = [];
var lettersFoundArr = [];
var index2 = 0;
var found;
var reward = 0;

for (let index = 0; index < wordLettersArr.length; index++) {
    lettersFoundArr.push("_");
  }

function guessLetter(letter){
    found = false;

    for (let index = 0; index < wordLettersArr.length; index++) {
        if (wordLettersArr[index] == letter) {
            lettersFoundArr  [index]  = wordLettersArr[index];
            guessedLettersArr[index2] = wordLettersArr[index];
            index2++;
            found = true;
            reward = reward + 10; //Math.floor((Math.random() * 100) + 1) random number between 1 and 100 
        }   
    }

    if (found) {
        console.log('Congrats, you have found a new letter. ' + lettersFoundArr);    
    }else{
        reward = reward - 10; //Math.floor((Math.random() * 100) + 1) random number between 1 and 100
        console.log('Sorry, new letter not found.');    
    }

    if (guessedLettersArr.length < wordLettersArr.length) {
        console.log('There are still more letters to guess. Please try again.');
    }else{
        console.log('Congrats, you have won the game.  The word is ' + wordLettersArr.join(''));
        console.log('Your reward is ' + reward);
    }
    console.log('');
}

guessLetter('S');
guessLetter('O');
guessLetter('R');
guessLetter('F');
guessLetter('R');
guessLetter('X');
