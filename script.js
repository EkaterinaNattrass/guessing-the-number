let max = parseInt(prompt('Enter the maximum number'));
let win = document.getElementById("win");

while (!max) {
    max = parseInt(prompt('Enter a valid number'));
}

const targetNum = Math.floor(Math.random() * max) + 1;

let guess = parseInt(prompt('Enter your first guess'));
let attempts=1;

while (parseInt(guess) !== targetNum) {
    attempts++;
    if (guess > targetNum) {
       guess = prompt (` ${guess} is too high. Enter a new guess`);
    }
    else {
        guess = prompt (` ${guess} is too low. Enter a new  guess`);
    }
}

win.innerHTML = `Congrats! ${guess} is the right number! You win!
                It took you ${attempts} guesses.`

