"use strict";

let correctNumber = Math.trunc(Math.random() * 20) + 1;

let score = 5;

let highScore = 0;

const displayGuessing = function (guessing) {
    document.querySelector(".guessing").textContent = guessing;
};

const displayScore = function (score) {
    document.querySelector("#current-score").textContent = score;
};

document.querySelector("#again").addEventListener("click", function () {
    correctNumber = Math.trunc(Math.random() * 20) + 1;

    score = 5;
    displayScore(5);
    document.querySelector("#number").textContent = "?";
    displayGuessing("Start guessing ...");
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".score-box").style.width = "";
    document.querySelector("#guess-number").value = "";
});

// document.querySelector("#number").textContent = correctNumber;

document.querySelector("#guess").addEventListener("click", function () {
    const guess = Number(document.querySelector("#guess-number").value);
    if (score >= 1) {
        if (!guess) {
            displayGuessing("there is no nummber!");
        } else if (guess === correctNumber) {
            displayGuessing("Correct number ");
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".score-box").style.width = "20rem";
            document.querySelector("#number").textContent = correctNumber;
            if (score > highScore) {
                highScore = score;
                document.querySelector("#high-score").textContent = highScore;
            }
        } else if (guess > correctNumber) {
            displayGuessing();
            guess <= correctNumber + 2
                ? displayGuessing("litle bit high")
                : displayGuessing("too high");
            score--;
            displayScore(score);
        } else if (guess < correctNumber) {
            guess + 2 >= correctNumber
                ? displayGuessing("litle bit low")
                : displayGuessing("too low");
            score--;
            displayScore(score);
        }
    } else {
        score = 0;
        displayScore(score);
        displayGuessing("you lose ...");
        document.querySelector("body").style.backgroundColor = "red";
        document.querySelector("#number").textContent = correctNumber;
    }
});
