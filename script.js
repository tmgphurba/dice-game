var button = document.querySelector(".btn");

button.addEventListener("click", function () {
    var randomNumber1 = Math.floor(Math.random() * 6);
    var randomNumber2 = Math.floor(Math.random() * 6);

    var diceImages = [
        "dice1.png",
        "dice2.png",
        "dice3.png",
        "dice4.png",
        "dice5.png",
        "dice6.png"
    ];

    var randomDiceImage1 = diceImages[randomNumber1];
    var randomDiceImage2 = diceImages[randomNumber2];

    document.querySelector(".img1").setAttribute("src", "./images/" + randomDiceImage1);
    document.querySelector(".img2").setAttribute("src", "./images/" + randomDiceImage2);

    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw!";
    }

    else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    }

    else {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
});