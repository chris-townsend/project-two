// game variables
const holes = document.querySelectorAll('.hole');
const timeRemaining = document.querySelector('#timeRemain');
const scoreDisplay = document.querySelector('#score');
const cursor = document.querySelector(".cursor-mallet img");

let successfulWhack = () => new Audio("assets/audio/hit-sound.flac").play();
let playSound = () => new Audio("assets/audio/hammer-whack.wav").play();
let audio = document.getElementById('audio');
let playPauseBtn = document.getElementById('playPauseBtn');
let count = 0;

// function for music buttons on homepage to play and pause music
function playPause() {
  if (count == 0) {
    count = 1;
    audio.play();
    playPauseBtn.innerHTML = "Pause &#9208;";
  } else {
    count = 0;
    audio.pause();
    playPauseBtn.innerHTML = "Play &#9658;";
  }
}
// function for music button on homepage to stop the music
function stop() {
  playPause();
  audio.pause();
  audio.currentTime = 0;
  playPauseBtn.innerHTML = "Play &#9658;";
}

let molePosition;
let score = 0;
let currentTime = 20;
let moleTimerId;

/* function that generates a mole to pop up at a random hole
 * holes.length is used to generate a random hole between the number of holes available
 * This allows the number of holes to be added/removed without editing the Js code
 */
function randomMove() {
  holes.forEach(hole => {
    hole.classList.remove('mole-image');
  });

  const randomHole = holes[Math.floor(Math.random() * holes.length)];
  randomHole.classList.add('mole-image');

  molePosition = randomHole.id;
}
/**
 * iterate through the array of moles, 
 * add click event to increase score 
 * & change background sound on hit
 */
holes.forEach(hole => {
  hole.addEventListener('mousedown', () => {
    if (hole.id == molePosition) {
      successfulWhack(); // makes a different whack sound on successful hit of a mole
      score++; // increase the score on every mole click
      scoreDisplay.textContent = score; // add the score text to the score display
      molePosition = null;
    }
  });
});
/*
 * function to move the mole and sets
 * the amount of time for how long a mole stays up for - Currently set to 0.8 of a second
 * this could be increased to make it easier or lower to make it harder
 */
function moveMole() {
  moleTimerId = setInterval(randomMove, 800);
}

moveMole();

// countdown timer function
function countDown() {
  currentTime--;
  timeRemaining.textContent = currentTime;

  // if statement for what to do when the timer reaches 0 and game is over
  if (currentTime == -1) { // when the timer reaches 0
    clearInterval(countDownTimerId); // reset countdown timer to 0 on play again
    clearInterval(moleTimerId); // reset scoreboard to 0 on play again
    window.alert('GAME OVER! Your final score is ' + score); // alert user GAMEOVER and give final score
    location.reload(); // reload the game 
    playSound();
  }
}
/*
* sets the speed of the countdown timer, currently set to 1000
to go down in seconds
*/
let countDownTimerId = setInterval(countDown, 1000);

// event listener to allow the mallet cursor to move 
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";

  window.addEventListener("click", () => {
    cursor.style.animation = "hit 0.1s ease";

    // timeout function to allow the cursor animation to reset on click
    setTimeout(() => {
      cursor.style.removeProperty("animation");
    }, 100);
  });
});