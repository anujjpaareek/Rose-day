const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

let played = false;

musicBtn.addEventListener("click", () => {
  if (!played) {
    music.play()
      .then(() => {
        musicBtn.innerText = "🎶 Playing...";
        played = true;
      })
      .catch(err => {
        console.log("Autoplay blocked:", err);
      });
  }
});
