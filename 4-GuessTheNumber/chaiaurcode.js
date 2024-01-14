let randN = parseInt(Math.random()*100 + 1);
const guess = document.getElementById('guessField');
const subguess = document.getElementById('subt');
let endg = document.getElementById('endg');
let startn = document.getElementById('startn');

const guesses = document.querySelector('.guesses');
const rem = document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');

let guessno = 1;

subguess.addEventListener('click',function(e){
    e.preventDefault();
    validateGuess(parseInt(guess.value));
});

endg.addEventListener('click',(e)=>{
    e.preventDefault();
    endgame();
})

startn.addEventListener('click',(e)=>{
    e.preventDefault();
    startNewGame();
})

function validateGuess(guess){
    if(guess<1 || guess>100 || isNaN(guess)){
        displayMessage('Wrong! Hint: Guess a number between 1 to 100');
    }else{
        displayGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess){
    if(guess===randN){
        displayMessage('Spot on.Correct guess is ${guess}');
        endgame();
    }else if(guess <= randN){
        displayMessage("Guess too low");
    }else{
        displayMessage('Guess too high');
    }
}

function displayGuess(myguess){
    guess.value = '';
    guesses.innerHTML += `${myguess}, `;
    if(guessno===1){
        endg.style.display = "inline";
    }
    guessno++;
    rem.innerHTML = `${11-guessno}`;
    if(guessno===11){
        endgame();
    }
}

function displayMessage(message){
    loworhi.innerHTML = `${message}`
}

function endgame(){
    displayMessage(`correct answer is ${randN}`);
    guess.value = '';
    subguess.style.display = "none";
    endg.style.display = "none";
    startn.style.display = "inline";
}

function startNewGame(){
    randN = parseInt(Math.random()*100 + 1);
    startn.style.display = 'none';
    subguess.style.display = 'inline';
    guessno = 1;
    guesses.innerHTML = '';
    rem.innerHTML = '10';
    loworhi.innerHTML = '';
}

