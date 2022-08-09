// Email JS function to collect the param values from the contact form on the HTML homepage
function sendMail() {
  const params = {
    from_name: document.getElementById('fullName').value,
    email_id: document.getElementById('email_id').value,
    message: document.getElementById('message').value,
  };
  /* 'service_c3qpq6z' personal ID for email service
   * 'template_jk2d9nh' personal ID for email template
   */
  emailjs.send('service_c3qpq6z', 'template_jk2d9nh', params)(function () {
    alert("Success! Your email has been sent");
  });
}

// Instructions & Contact modal

// Get the instructions modal
const modal = document.getElementById("myModal");

// Get the contact modal
const contactModal = document.getElementById("mycontactModal");

// Get the button that opens the contact modal
const contactBtn = document.getElementById("contact");

// Get the button that opens the instructions modal
const instructionBtn = document.getElementById("instruction-btn");

// Get the <span> element that closes the instructions modal
const span = document.getElementsByClassName("close")[0];

// Get the <span> element that closes the contact modal
const contactSpan = document.getElementsByClassName("contactClose")[0];

// Open the instructions modal
instructionBtn.onclick = function () {
  modal.style.display = "block";
};

// Open the contact modal
contactBtn.onclick = function () {
  contactModal.style.display = "block";
};

// Close the instructions modal
span.onclick = function () {
  modal.style.display = "none";
};

// Close the contact modal
contactSpan.onclick = function () {
  contactModal.style.display = "none";
};

// When the user clicks anywhere outside of the instructions modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// When the user clicks anywhere outside of the contact modal, close it
window.addEventListener("click", function (event) {
  if (event.target == contactModal) {
    contactModal.style.display = "none";
  }
});

// Audio variables

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