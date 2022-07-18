let playerChoice = prompt('Rock, Paper, or Scissors?');
let playerChoiceLower = playerChoice.toLowerCase();

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomChoice = (choices[Math.floor(Math.random() * choices.length)]);
    return randomChoice;
}

computerPlay();

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`Draw! ${playerSelection} equals ${computerSelection}`)
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === "paper" && computerSelection === "rock")) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`)
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === "paper" && computerSelection === "rock")) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`)
    } else {
        console.log('Please sumbit a valid option!')
    }
}

singleRound(playerChoiceLower, computerPlay()); 

