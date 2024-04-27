let randomNumber = Math.floor(Math.random() * 100 + 1);

let userInp = document.querySelector("#guessField");
let submit = document.querySelector("#subt");
let StartOver = document.querySelector(".resultParas");
let guessSlot = document.querySelector(".guesses");
let remaining = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");

let p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        let guess = parseInt(userInp.value);
        console.log(guess);
        validation(guess);
    })
}
function validation(guess) {
    if (isNaN(guess)) {
        alert("please give  a valid number")
    } else if (guess < 1) {
        alert(" please enter a number more than 1")
    } else if (guess > 100) {
        alert("please enter a number less than 100");
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game is Over.random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("you guessed it right");
        endGame();
    } else if (guess < randomNumber) {
        displayMessage("Your number was TOOO short")
    } else if (guess > randomNumber) {
        displayMessage("Your number is TOOO high");
    }
}
function displayGuess(guess) {
    userInp.value = "";
    guessSlot.innerHTML += `${guess},`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(Message) {
    lowOrHi.innerHTML = `<h2>${Message}</h2>`
}
function endGame() {
    userInp.value = "";
    userInp.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id = "newGame"> Start New Game</h2>`
    StartOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInp.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}


