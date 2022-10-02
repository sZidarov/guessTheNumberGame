function guessTheNumberGame (){
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let computerGuess = Math.floor(Math.random() * 100);
let guess;
let tryCount = 10;

let recursiveAsyncReadLine = function() {
    readline.question(`Guess the number from 0 to 100, you have ${tryCount} more tries: ` , number => {
       guess = Number(number);
 
       if (guess <= 100 && guess>=0){
        if (guess == computerGuess){
            console.log('You guessed it on the ' + (11-tryCount) + ' try!');
            return readline.close();
        }else if (guess < computerGuess){
            console.log('Too Low!');
            tryCount--;
            //console.log(`You have ${tryCount} tries left!`);
            recursiveAsyncReadLine();
        }else if (guess > computerGuess){
            console.log('Too High!');
            tryCount--;
            //console.log(`You have ${tryCount} tries left!`);
            recursiveAsyncReadLine();
        }
        }else {
        console.log('Invalid input! Try again...');
        tryCount--;
        recursiveAsyncReadLine();
        }
        if (tryCount==0){
            console.log('Aborting...');
            return readline.close();
        }
        
    });
}
recursiveAsyncReadLine();
}
guessTheNumberGame();