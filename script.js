const rose = document.querySelector(".rose");
const music = document.getElementById("bgMusic");
const prompt = document.getElementById("prompt");

let played = false;

// mobile ke liye extra safe
const playMusic = () => {
  if (played) return;

  music.muted = false;
  music.volume = 1;

  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        prompt.innerText = "🌹 Playing just for you...";
        played = true;
      })
      .catch((err) => {
        prompt.innerText = "🌹 Tap once more";
        console.log("Play blocked:", err);
      });
  }
};

// click + touch dono support
rose.addEventListener("click", playMusic);
rose.addEventListener("touchstart", playMusic, { passive: true });
