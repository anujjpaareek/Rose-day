// class se rose select kar rahe hain (id ki zarurat nahi)
const rose = document.querySelector(".rose");
const music = document.getElementById("bgMusic");
const prompt = document.getElementById("prompt");

let played = false;

if (rose && music) {
  rose.addEventListener("click", () => {
    if (!played) {
      music.play().catch(err => {
        console.log("Autoplay blocked:", err);
      });
      prompt.innerText = "🌹 Playing just for you...";
      played = true;
    }
  });
}
