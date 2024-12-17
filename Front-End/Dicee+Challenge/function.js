var diceNumber1 = Math.floor(Math.random() * 6) + 1;
var diceNumber2 = Math.floor(Math.random() * 6) + 1;
var diceImage1 = "./images/dice" + diceNumber1 + ".png";
var diceImage2 = "./images/dice" + diceNumber2 + ".png";
document.querySelector(".img1").setAttribute("src", diceImage1);
document.querySelector(".img2").setAttribute("src", diceImage2);
if (diceNumber1 === diceNumber2) {
  document.querySelector("h1").textContent = "It's a Draw!!";
} else if (diceNumber1 > diceNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else {
  document.querySelector("h1").textContent = "Player 2 Wins!";
}
