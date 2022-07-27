

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




  


