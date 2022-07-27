

// Javascipt to run game on game page


const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole-image');
const timeRemaining = document.querySelector('#timeRemain');
const scoreDisplay = document.querySelector('#score');
const cursor = document.querySelector(".cursor-mallet img");

let successfulWhack = () => new Audio("assets/audio/hit-sound.flac").play();
let playSound = () => new Audio("assets/audio/hammer-whack.wav").play();
let audio = document.getElementById('audio');
let playPauseBtn = document.getElementById('playPauseBtn');
let count = 0;
let molePosition;
let score = 0;
let currentTime = 20;
let timerId = false;
function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole-image');
  });
  
  const randomHole = squares[Math.floor(Math.random() * squares.length)];
  randomHole.classList.add('mole-image');
  
  molePosition = randomHole.id;
  
     
  }
    squares.forEach(square => {
    square.addEventListener('mousedown', () => {
    if (square.id == molePosition) {
      successfulWhack();
      score++;
      scoreDisplay.textContent = score;
      molePosition = null;
    }
  });
  });
  
  function moveMole() {
   moleTimerId = setInterval(randomSquare, 800);
  }
  
  moveMole();



function countDown() {
  currentTime--;
  timeRemain.innerHTML = currentTime;

  
if (currentTime ==  -1) {
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
  setTimeout (() => {
    cursor.style.removeProperty("animation");
},100);
});
});


function playPause(){
  if(count == 0){
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
  //High Scores & Instructions modals 

// Get the modal (Instructions)
const modal = document.getElementById("myModal");


// Get the modal (High Scores)
const highscoreModal = document.getElementById("myhighScoreModal");


// Get the button that opens the highscores modal
const highscoreBtn = document.getElementById("highscore");


// Get the button that opens the instructions modal
const instructionBtn = document.getElementById("instruction-btn");


// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Get the <span> element that closes the modal
const highscoreSpan = document.getElementsByClassName("highscoreClose")[0];

// When the user clicks on the button, open the instructions modal
instructionBtn.onclick = function() {
  modal.style.display = "block";
};
// When the userclicks on the button, open the highscores modal
highscoreBtn.onclick = function() {
  highscoreModal.style.display = "block";
};
// When the user clicks on <span> (x), close the instructions modal
span.onclick = function() {
  modal.style.display = "none";
};
// When the user clicks on <span> (x), close the highscores modal
highscoreSpan.onclick = function() {
  highscoreModal.style.display = "none";
};
// When the user clicks anywhere outside of the instructions modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } 
};
// When the user clicks anywhere outside of the highscores modal, close it
window.addEventListener("click", function(event) {
  if (event.target == highscoreModal) {
    highscoreModal.style.display = "none"; }
  });




  


