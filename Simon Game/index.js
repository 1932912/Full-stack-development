var buttonColor = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
$(document).keypress(function (event) {
  if (!started) {
    $("h1").text("level " + level);
    nextSequence();
    started = true;
  }
});
$(".btn").click(function () {
  var userChosenButton = $(this).attr("id");
  userClickedPattern.push(userChosenButton);
  playSound(userChosenButton);
  buttonAnimation(userChosenButton);

  checkAnswer(userClickedPattern.length - 1, userChosenButton);
});
function checkAnswer(currentLevel, button) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    var audio = new Audio("./sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart.");
    level = 0;
    started = false;
    gamePattern = [];
    userClickedPattern = [];
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").text("level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColor[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
}

function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}
function buttonAnimation(button) {
  $("#" + button).addClass("pressed");
  setTimeout(function () {
    $("#" + button).removeClass("pressed");
  }, 100);
}
