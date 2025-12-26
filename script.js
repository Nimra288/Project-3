// flip cards
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

// random reason button
const reasons = [
  "Your smile makes my bad days better",
  "You always support me",
  "You make me laugh without trying",
  "I feel safe with you",
  "You’re so kind and a good person",
  " i love you so much my junk food boy",
  "You’re my favourite person",
  "You make life better just by being in it"
];

const button = document.getElementById("randomBtn");
const text = document.getElementById("randomText");

button.addEventListener("click", () => {
  const random = reasons[Math.floor(Math.random() * reasons.length)];
  text.textContent = random;
});


const btn = document.getElementById("randomBtn");

btn.addEventListener("click", (e) => {
  for (let i = 0; i < 8; i++) {
    const heart = document.createElement("span");
    heart.textContent = "💖";
    heart.style.position = "absolute";
    heart.style.left = `${e.offsetX}px`;
    heart.style.top = `${e.offsetY}px`;
    heart.style.fontSize = "14px";
    heart.style.pointerEvents = "none";
    heart.style.animation = `heartBurst 0.8s ease-out forwards`;
    heart.style.transform = `translate(-50%, -50%)`;
    btn.appendChild(heart);

    setTimeout(() => heart.remove(), 800);
  }
});

  