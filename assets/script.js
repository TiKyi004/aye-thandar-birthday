const welcomeScreen = document.getElementById("welcomeScreen");
const openSurprise = document.getElementById("openSurprise");
const musicButton = document.getElementById("musicButton");
const musicIcon = document.getElementById("musicIcon");
const musicLabel = document.getElementById("musicLabel");
const backgroundMusic = document.getElementById("backgroundMusic");
const wishButton = document.getElementById("wishButton");
const wishMessage = document.getElementById("wishMessage");
const cake = document.querySelector(".cake");
const finalLove = document.getElementById("finalLove");

openSurprise.addEventListener("click", () => {
  welcomeScreen.classList.add("hide");
  createHeartBurst();
});

musicButton.addEventListener("click", async () => {
  if (backgroundMusic.paused) {
    try {
      await backgroundMusic.play();
      musicIcon.textContent = "♫";
      musicLabel.textContent = "Music on";
    } catch (error) {
      musicLabel.textContent = "Add your song";
      alert("Please add your music file: assets/music/soft-piano.mp3");
    }
  } else {
    backgroundMusic.pause();
    musicIcon.textContent = "♪";
    musicLabel.textContent = "Music off";
  }
});

wishButton.addEventListener("click", () => {
  cake.classList.add("blown");
  wishButton.disabled = true;
  wishButton.textContent = "Wish sent 💗";
  wishMessage.textContent = "May every beautiful wish in your heart come true...";
  finalLove.classList.add("show");
  launchConfetti();
  createHeartBurst();
});

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = ["♡", "♥", "ღ", "✧"][Math.floor(Math.random() * 4)];
  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (14 + Math.random() * 22) + "px";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  document.querySelector(".floating-hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 10500);
}
setInterval(createHeart, 650);

function createHeartBurst() {
  for (let i = 0; i < 18; i++) {
    setTimeout(createHeart, i * 65);
  }
}

function launchConfetti() {
  const colors = ["#f08eaf", "#ffd166", "#c6a0e8", "#ffffff", "#f5b7ca"];
  for (let i = 0; i < 100; i++) {
    const piece = document.createElement("span");
    piece.textContent = Math.random() > 0.5 ? "✦" : "♥";
    piece.style.position = "fixed";
    piece.style.zIndex = "30";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = "-20px";
    piece.style.color = colors[Math.floor(Math.random() * colors.length)];
    piece.style.fontSize = (10 + Math.random() * 16) + "px";
    piece.style.pointerEvents = "none";
    document.body.appendChild(piece);
    const x = (Math.random() - 0.5) * 260;
    const y = 450 + Math.random() * 450;
    piece.animate([
      { transform: "translate(0, 0) rotate(0deg)", opacity: 1 },
      { transform: `translate(${x}px, ${y}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
    ], { duration: 1800 + Math.random() * 1400, easing: "cubic-bezier(.15,.7,.3,1)" });
    setTimeout(() => piece.remove(), 3400);
  }
}
