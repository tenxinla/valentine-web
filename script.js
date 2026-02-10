const story = [
  `I met you in 2019, as BCA dance group.`,

  `We became casual firend, and got busy with our life, `,

  `Covid hit us and somehow we survive.`,

  `On 23 April 2021 — we reconnected.`,

  `And then everything changed.`,

  `I enjoyed every moments we spent,`,

  `every little fight brings me closer to you,`,

  `On 17 Oct 2022 — we graduate and we moved.`,

  `But we find our way back, to stay close to each other.`,

  `I never felts this feeling before,`,

  `But on 23 Oct 2023, we had the hardest time (long distance relationship)`,

  `But still we survive and have good time.`,

  `I wanna Thank you for moments we shared, memories we made.`,

  `I LOVE YOU BABE, REALLY DO..
  Can i ask you something?`
];

let step = 0;
function showScene() {
  stage.innerHTML = `

  <div class="scene">

    <div class="card">
    <h5>${story[step]} </h5>
        <img src="assets/img${step}.jpeg" alt="us" />
    </div>

    <button class="btn" onclick="next()">Next ➜</button>

  </div>`;
}

function next() {
  step++;
  if (step < story.length) {
    showScene();
  } else {
    proposal();
  }
}

/* proposal scene */

function proposal() {
  stage.innerHTML = `

  <div class="scene">

    <div class="card">

      Will you be mine Valentine stay with me in this story? 💌

      <br><br>

      <button class="btn" onclick="yes()">YES ❤️</button>

      <button class="btn" id="noBtn" onmouseover="escapeNo()">NO 😄</button>

    </div>

  </div>`;
}

function escapeNo() {
  noBtn.style.transform = `translate(${Math.random() * 120 - 60}px,${Math.random() * 80 - 40}px)`;
}

/* YES ending */

function yes() {
  burst();

  stage.innerHTML = `

  <div class="scene">

    <div class="card">

      Yaee..!! I know You will!! 💗<br><br>

      Lets Keep creating story… 🎬

    </div>
    <div class="card">
    My Dearest Love,<br>
    I miss you in ways I never knew were possible. Every day, I wish I could see your face in person instead of through a screen, hold your hand, and share quiet moments together. The distance aches, but knowing you exist in my life makes it bearable.
    What fills my heart more than the missing is the overwhelming love I have for you. You are incredible, and I'm blessed to have found you. All I can do from here is wish for your health, happiness, and peace in every moment.
    I dream of the day this distance becomes just a memory—when we can finally build our beautiful life together, side by side. Until then, know that you carry my heart with you always. No distance can change how deeply I love you.
    You are worth every difficult day, every lonely night, every moment of waiting.
    I love you endlessly.<br>
    Always yours 💕
    </div>

  </div>`;
}

/* confetti */

function burst() {
  for (let i = 0; i < 60; i++) {
    const c = document.createElement("div");

    c.style.position = "absolute";

    c.style.left = "50%";

    c.style.top = "50%";

    c.style.width = "6px";

    c.style.height = "6px";

    c.style.background = `hsl(${Math.random() * 360},90%,60%)`;

    c.style.transform = `translate(${Math.random() * 400 - 200}px,${Math.random() * 400 - 200}px)`;

    c.style.transition = "1s";

    confetti.appendChild(c);

    setTimeout(() => c.remove(), 1000);
  }
}

/* start */

setTimeout(showScene, 3000);

/* 3D tilt */

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 14;

  const y = (e.clientY / window.innerHeight - 0.5) * -14;

  phone.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

/* floating hearts */

for (let i = 0; i < 15; i++) {
  const h = document.createElement("div");

  h.innerHTML = "💗";

  h.style.position = "absolute";

  h.style.left = Math.random() * 100 + "%";

  h.style.bottom = "-20px";

  h.style.fontSize = 14 + Math.random() * 18 + "px";

  h.style.animation = `rise ${6 + Math.random() * 6}s linear infinite`;

  hearts.appendChild(h);
}

const st = document.createElement("style");

st.innerHTML = `@keyframes rise{to{transform:translateY(-110vh);opacity:0}}`;

document.head.appendChild(st);
