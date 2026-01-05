/*
--> The Rock , Paper, Scissors Game
--> This Game will be played between the computer and Human. Once Human will select
    Rock, Paper, or Scissors and in the next turn the computer will select
    Rock, Paper, Scissors
---> The winner will be selected on these rules

    Rock an Break Scissors => Rock Wins
    Paper can wrap Rock => Paper Wins
    Scissors can cut Paper => Scissors Wins
    
    Ask the input from user and randomly select a comouter selection to continue the game.
     
*/

/*
Assumptions:

1. We have to Prompt the user to get their inputs.
2. The Computers selection is Random.
3. We have to compare user and Computer's choice.
4. We need to announce the winner.
5. After the winner announcement, we may want to ask the user to play again or quit from the game
*/

function rockPaperScissorsGame(){
    console.log("Getting Started With Rock Paper Scissors Game.....!");
    const userChoicePrompt = prompt("Enter Rock, Paper, or Scissors");

    if(userChoicePrompt == null){
        console.log("Game CANCELLED by USER");
        return;
    }
    const userChoice = userChoicePrompt.toLowerCase();

    let computerChoice;

    const randomNumber = Math.floor(Math.random() * 3) + 1; //3 becase high range is 3, if high range is 10 , then we multiplt by 10
    
    /*
    if(randomNumber === 1){
        computerChoice = "rock";
    }
    else if(randomNumber === 2){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors";
    }
    */

     switch(randomNumber){
        case 1:
                computerChoice = "rock";
                break;
        case 2:
                computerChoice = "paper";
                break;
        default:
                computerChoice = "scissors";
                break;       
    }

    console.log("User selected:", userChoice);
    console.log("Computer selcted:", computerChoice);

    if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    )
        {
            console.log("You the User WIN!!, Congractsssss")
        }
    else if(userChoice === computerChoice)
    {
        console.log("The Game is TIE!");
    }
    else if(
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice == "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")        
    )
    {
        console.log("Oh No, COMPUTER WINS!!");
    }
    else
    {
        console.log("Please check the input!");
    }

    const playAgainPrompt = prompt("Do you want to PLAY Again? (Yes/No) ");
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

    if(playAgain == "yes"){
        rockPaperScissorsGame();
    }
    else{
        console.log("Thanks for Playing See you next time..!")
    }
}   



//Start This Game
rockPaperScissorsGame()