// Javascipt to run game on game page

const timeLeft = document.querySelector('#time-left');
const scoreDisplay = document.querySelector('#score');
const squares = document.querySelectorAll('.square');
const cursor = document.querySelector(".cursor-mallet img");

window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";

window.addEventListener("click", () => {
  cursor.style.animation = "hit 0.1s ease";
//Allows the animation to work continously 
  setTimeout (() => {
    cursor.style.removeProperty("animation");
},100);
})
})

let molePositions
let score = 0
let currentTime = 10
let moleTimerId = null

let playSound = () => new Audio("/assets/audio/hammer-whack.wav").play();

let playHomeSound = () => new Audio("/assets/audio/jazz.wav").play();

function randomSquare() {
squares.forEach(square => {
  square.classList.remove('mole-image')
})

let randomSquare = squares[Math.floor(Math.random() * 16)]
   randomSquare.classList.add('mole-image');

   molePositions = randomSquare.id
}


squares.forEach(square => {
  square.addEventListener('mousedown', () => {
  if (square.id == molePositions) {
    score++
    scoreDisplay.textContent = score
    molePositions = null
  }
})
})

function moveMole() {
 moleTimerId= setInterval(randomSquare, 800)
}

moveMole()

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime
  
if (currentTime == 0) {
    
    clearInterval(countDownTimerId);
    clearInterval(moleTimerId);
    window.alert('GAME OVER! Your final score is ' + score);
  }
  
}
  let countDownTimerId = setInterval(countDown, 1000)



// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("instruction-btn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let hasPlayed = false;
function handleFirstPlay(event) {
  if(hasPlayed === false) {
    hasPlayed = true;

    let vid = event.target;

    vid.onplay = null;

    // Start whatever you need to do after first playback has started
  }
}
