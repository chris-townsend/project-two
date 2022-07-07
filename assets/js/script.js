// Javascipt to run game on game page

const timeLeft = document.querySelector('#time-left');
const scoreDisplay = document.querySelector('#score');
const squares = document.querySelectorAll('.square');

let molePositions
let score = 0
let currentTime = 30

function moveMole () {
  setInterval(function () {
    squares.forEach(square => square.classList.remove('mole-image'))
   const randomSquare = squares[Math.floor(Math.random() * squares.length)]
   randomSquare.classList.add('mole-image')

   molePositions = randomSquare.id

  }, 800)
}

moveMole()

squares.forEach(square => square.addEventListener('click', function () {
  if (square.id === molePositions) {
    score++
    scoreDisplay.innerHTML = score
  }
}))

function countDown() {
  currentTime--
  timeLeft.innerHTML = currentTime
}

setInterval(countDown, 1000)


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

