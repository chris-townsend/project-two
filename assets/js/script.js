// Javascipt to run game on game page

const timeLeft = document.querySelector('#time-left');
const scoreDisplay = document.querySelector('#score');
const squares = document.querySelectorAll('.square');

function moveMole () {
  setInterval(function () {
    squares.forEach(square => square.classList.remove('mole'))
   const randomSquare = squares[Math.floor(Math.random() * squares.length)]
   randomSquare.classList.add('mole')
  }, 800)
}

moveMole()



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

