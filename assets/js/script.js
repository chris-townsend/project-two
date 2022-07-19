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

let randomSquare = squares[Math.floor(Math.random() * 12)]
   randomSquare.classList.add('mole-image');

   molePositions = randomSquare.id
}
  squares.forEach(square => {
  square.addEventListener('mousedown', () => {
  if (square.id == molePositions) {
    
    score++;
    scoreDisplay.textContent = score;
    molePositions = null;
  }
})
})

// Submit name to Highscores
  // Display msg if player name value is empty
  function saveHighScore() {
    let name = document.forms["leader"]["name"].value;
    const currentScore = {
      name: highScoreName.value,
      score: scoreboard.textContent,
    };
    if (name == "") {
      text.innerHTML = "Please enter a name";
      return false;
    } else {
      // Save a High score and position in leaderboard
      // Help from James Q Quick video on Saving High Scores in Local Storage
      // push current score into highscore array
      highScores.push(currentScore);

      // Sort higher scores to the top and only accept top 5
      highScores.sort((a, b) => b.score - a.score);
      // Help from Samantha from Code Institute Tutor support
      // Only accept 5 values
      highScores.splice(5);

      // Iterate through the current leaderboard and replace score with if beaten
      // Help from Michael on Code Institute Tutor support
      for (let i = 0; i < highScores.length; i++) {
        playerScores[i].textContent = highScores[i].score;
        playerNames[i].textContent = highScores[i].name;
      }

      localStorage.setItem("highScores", JSON.stringify(highScores));

      cardLeader.classList.add("scoreboard");
      cardLeader.classList.remove("game-on");
      cardStart.classList.add("game-on");
      cardHighscore.classList.add("game-on");
      return true;
    }
  }

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
    location.reload()
    }
  }
let countDownTimerId = setInterval(countDown, 1000)


//High Scores & Instructions modals 

// Get the modal (Instructions)
const modal = document.getElementById("myModal");
// Get the modal (High Scores)
const HighscoreModal = document.getElementById("myhighScoreModal");
// Get the button that opens the instructions modal
const btn = document.getElementById("instruction-btn");

// Get the button that opens the highscores modal
const highscoreBtn = document.getElementById("highscore");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
// Get the <span> element that closes the modal
const highScoreSpan = document.getElementsByClassName("highscoreClose")[0];

// When the user clicks on the button, open the instructions modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on the button, open the highscores modal
highscoreBtn.onclick = function() {
  HighscoreModal.style.display = "block";
}
// When the user clicks on <span> (x), close the instructions modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks on <span> (x), close the highscores modal
highscoreSpan.onclick = function() {
  HighscoreModal.style.display = "none";
}
// When the user clicks anywhere outside of the instructions modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } 
}
// When the user clicks anywhere outside of the highscores modal, close it

window.addEventListener("click", function(event) {
  if (event.target == HighscoreModal) {
    HighscoreModal.style.display = "none"; }
  })
