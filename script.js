let guessBox = document.getElementById("number-input");
let check = document.getElementById("guess");
let history = document.getElementById("history");
const randomNumber = Math.floor(Math.random()*100+1);
let count = 1;
let finalResult = false;
history.innerHTML = "";

function GuessingGame() {
    if (finalResult === false) {
        computeWinner();
        viewHistory();
        return finalResult;
    }
}   

function viewHistory() {
    let manualGuess = guessBox.value;
    history.innerHTML+=". your guessed🤔🤔value= " + manualGuess;

}

function computeWinner() {
    let result = document.getElementById("result");
    let guess = guessBox.value;

    if (count < 5) {
        if (randomNumber == guess) {
            result.innerHTML ="<h2>super!💥🤩🎊you reached🤝🥳!</h2>";
            finalResult = true;
        } else if (randomNumber < guess) {
            result.innerHTML = "<h2>You guessed too high!😲</h2>";
            finalResult = false;
        } else {
            result.innerHTML = "<h2>You guessed too Low!🙄</h2>";
            finalResult = false;
        }
        count ++;
    } else {
        if (randomNumber == guess) {
            result.innerHTML = "<h2>wow!🤩you reached👍🥳🤝</h2>";
            finalResult = true;
        }
        else {
            result.innerHTML = "<h2>oops!😔you failed👎</h2>";
            finalResult = true;
        }
    }
}



check.addEventListener("click", GuessingGame);