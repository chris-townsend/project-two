// Variables
const holes = document.querySelectorAll('.hole');
const timeRemaining = document.querySelector('#timeRemain');
const scoreDisplay = document.querySelector('#score');
const cursor = document.querySelector(".cursor-mallet img");

let successfulWhack = () => new Audio("assets/audio/hit-sound.flac").play();
let playSound = () => new Audio("assets/audio/hammer-whack.wav").play();
let audio = document.getElementById('audio');
let playPauseBtn = document.getElementById('playPauseBtn');
let count = 0;

// Music buttons
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

// Generate a mole to pop up at a random hole
function randomMove() {
  holes.forEach(hole => {
    hole.classList.remove('mole-image');
  });

  const randomHole = holes[Math.floor(Math.random() * holes.length)];
  randomHole.classList.add('mole-image');

  molePosition = randomHole.id;
}



holes.forEach(hole => {
  hole.addEventListener('mousedown', () => {
    if (hole.id == molePosition) {
      successfulWhack();
      score++;
      scoreDisplay.textContent = score;
      molePosition = null;
    }
  });
});

function moveMole() {
  moleTimerId = setInterval(randomMove, 800);
}

moveMole();


// Countdown Timer
function countDown() {
  currentTime--;
  timeRemaining.textContent = currentTime;


  if (currentTime == -1) {
    clearInterval(countDownTimerId);
    clearInterval(moleTimerId);
    window.alert('GAME OVER! Your final score is ' + score);
    location.reload();
    playSound();
  }
}
let countDownTimerId = setInterval(countDown, 1000);

window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";

  window.addEventListener("click", () => {
    cursor.style.animation = "hit 0.1s ease";
    //Allows the animation to work continously 
    setTimeout(() => {
      cursor.style.removeProperty("animation");
    }, 100);
  });
});