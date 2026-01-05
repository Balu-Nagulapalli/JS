/*

Lets Play a number guessing game.
You will ask user for a number between 1 to 10. Once user will enter a number,
you will tell user if the entered number is lower or higher. With this 
information, user will change the number and finally guess the right number.
You also need to show the number of attempts made by the users to reach to the right guess

*/

/*

HINTS:

Max Number

Min Number

Secret Number ia a random number b/w MIN and MAX

Get the Prompt from the user as a guess

Create a variable to store the no of attempts

Write the logic to check if the guess and the secret number are same,
if not continue a loop to ask again

Inside loop check if the guess is less than the secret number or greater than,
accordingly tell if the guess is low or high

Give the option to play again

*/

const min_value = 1;
const max_value = 10;
function secretNumberGame(){
    console.log("Getting Started with Secret Number Game!...");
    console.log("Try to Guess a Number between 1 and 10");
    
    let guess=null;
    const secretNmbr = Math.floor(Math.random() * max_value) + 1;

    let attempts = 0;

    while(guess!==secretNmbr){
        const userGuess =prompt("Enter your Guess");

        if (userGuess === null) {
            console.log("Game cancelled by user.");
            return;
        }

        guess = parseInt(userGuess);

        if(isNaN(guess) || guess < min_value || guess > max_value){
            console.log("Invalid Input!, Please enter a valid Input b/w "+min_value+" and "+max_value);
            continue;
        }

        attempts +=1;

        if(guess < secretNmbr){
            console.log("Number is Too Low, Try Again!");
        }
        else if(guess > secretNmbr){
            console.log("Number is Too Big, Try Again!");
        }
        else{
            console.log("Congrats!, You guessed the right number at "+attempts+" Attempts");
            break;
        }
    }
    
    const playAgainPrompt = prompt("Do you want to PLAY Again? (Yes/No) ");
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

    if(playAgain == "yes"){
        secretNumberGame();
    }
    else{
        console.log("Thanks for Playing See you next time..!")
    }
    
}

secretNumberGame();