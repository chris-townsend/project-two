function sendMail() {
  const params = {
   from_name : document.getElementById('fullName').value,
   email_id : document.getElementById('email_id').value,
   message : document.getElementById('message').value,
   }
   emailjs.send('service_c3qpq6z', 'template_jk2d9nh', params).then(function (res) {
     alert("success! " + res.status);
})
 }

//High Scores & Instructions modals 

// Get the Instructions modal
const modal = document.getElementById("myModal");

// Get the Highscores modal
const highscoreModal = document.getElementById("myhighScoreModal");

// Get the button that opens the Highscores modal
const highscoreBtn = document.getElementById("highscore");

// Get the button that opens the Instructions modal
const instructionBtn = document.getElementById("instruction-btn");

// Get the <span> element that closes the Instructions modal
const span = document.getElementsByClassName("close")[0];

// Get the <span> element that closes the Highscore modal
const highscoreSpan = document.getElementsByClassName("highscoreClose")[0];

// When the user clicks on the button, open the Instructions modal
instructionBtn.onclick = function() {
  modal.style.display = "block";
};
// When the user clicks on the button, open the Highscores modal
highscoreBtn.onclick = function() {
  highscoreModal.style.display = "block";
};
// When the user clicks on <span> (x), close the Instructions modal
span.onclick = function() {
  modal.style.display = "none";
};
// When the user clicks on <span> (x), close the Highscores modal
highscoreSpan.onclick = function() {
  highscoreModal.style.display = "none";
};
// When the user clicks anywhere outside of the Instructions modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; } 
};
// When the user clicks anywhere outside of the Highscores modal, close it
window.addEventListener("click", function(event) {
  if (event.target == highscoreModal) {
    highscoreModal.style.display = "none"; }
  });

 





  


