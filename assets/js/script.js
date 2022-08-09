// Mallet cursor variable
const cursor = document.querySelector(".cursor-mallet img");

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