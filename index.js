// To check which button with drum class is being clicked

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

// Play sound by mouse click

function handleClick() {
  let buttonClicked = this.innerHTML;
  handleSound(buttonClicked);
}

// Play sound by using keyboard button press

document.addEventListener("keydown", (e) => {
  let keyPressed = e.key;
  handleSound(keyPressed);
});

// A function to check the values and play sound accordingly

function handleSound(instrument) {
  switch (instrument) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "j":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "l":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;
    default:
      console.log(keyPressed);
  }
}
