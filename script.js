/* =========================================================
   MANASHVI SHARMA
   GOTHAM PORTFOLIO
========================================================= */


/* =========================================================
   CURSOR
========================================================= */

const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let ringX = mouseX;
let ringY = mouseY;

window.addEventListener("mousemove", (e) => {

  mouseX = e.clientX;
  mouseY = e.clientY;

  if (cursorDot) {
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  }

});

function animateCursor() {

  ringX += (mouseX - ringX) * 0.13;
  ringY += (mouseY - ringY) * 0.13;

  if (cursorRing) {
    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;
  }

  requestAnimationFrame(animateCursor);
}

animateCursor();


document.querySelectorAll("a, button, .project-card, .skill-tags-large span")
  .forEach((element) => {

    element.addEventListener("mouseenter", () => {
      cursorRing?.classList.add("active");
    });

    element.addEventListener("mouseleave", () => {
      cursorRing?.classList.remove("active");
    });

  });


/* =========================================================
   PARALLAX HERO
========================================================= */

const gotham = document.querySelector(".gotham");
const heroContent = document.querySelector(".hero-content");
const signal = document.querySelector(".bat-signal");

window.addEventListener("mousemove", (e) => {

  if (window.innerWidth < 800) return;

  const x = (e.clientX / window.innerWidth - 0.5);
  const y = (e.clientY / window.innerHeight - 0.5);

  if (gotham) {
    gotham.style.transform = `
      translate3d(${x * -12}px, ${y * -8}px, 0)
    `;
  }

  if (heroContent) {
    heroContent.style.transform = `
      translate3d(${x * 8}px, ${y * 6}px, 0)
    `;
  }

  if (signal) {
    signal.style.transform = `
      translateX(calc(-50% + ${x * 25}px))
      translateY(${y * 15}px)
    `;
  }

});


/* =========================================================
   SCROLL PARALLAX
========================================================= */

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  const cityBack = document.querySelector(".city-back");
  const cityMid = document.querySelector(".city-mid");
  const cityFront = document.querySelector(".city-front");

  if (cityBack) {
    cityBack.style.transform = `
      translateY(${scrollY * 0.035}px)
      scale(1.2)
    `;
  }

  if (cityMid) {
    cityMid.style.transform = `
      translateY(${scrollY * 0.06}px)
      scale(1.1)
    `;
  }

  if (cityFront) {
    cityFront.style.transform = `
      translateY(${scrollY * 0.1}px)
    `;
  }

});


/* =========================================================
   RAIN ENGINE
========================================================= */

const canvas = document.getElementById("rainCanvas");
const ctx = canvas?.getContext("2d");

let rainDrops = [];
let rainWidth = window.innerWidth;
let rainHeight = window.innerHeight;

function resizeRain() {

  if (!canvas || !ctx) return;

  rainWidth = window.innerWidth;
  rainHeight = window.innerHeight;

  canvas.width = rainWidth * window.devicePixelRatio;
  canvas.height = rainHeight * window.devicePixelRatio;

  canvas.style.width = `${rainWidth}px`;
  canvas.style.height = `${rainHeight}px`;

  ctx.scale(
    window.devicePixelRatio,
    window.devicePixelRatio
  );

  createRain();
}

function createRain() {

  rainDrops = [];

  const amount = Math.min(
    220,
    Math.floor(rainWidth / 5)
  );

  for (let i = 0; i < amount; i++) {

    rainDrops.push({
      x: Math.random() * rainWidth,
      y: Math.random() * rainHeight,
      length: 8 + Math.random() * 22,
      speed: 4 + Math.random() * 10,
      opacity: 0.08 + Math.random() * 0.25
    });

  }

}

function drawRain() {

  if (!ctx) return;

  ctx.clearRect(
    0,
    0,
    rainWidth,
    rainHeight
  );

  rainDrops.forEach((drop) => {

    ctx.beginPath();

    ctx.moveTo(drop.x, drop.y);

    ctx.lineTo(
      drop.x - 1.5,
      drop.y + drop.length
    );

    ctx.strokeStyle =
      `rgba(190, 200, 210, ${drop.opacity})`;

    ctx.lineWidth = 0.7;

    ctx.stroke();

    drop.y += drop.speed;

    drop.x -= 0.8;

    if (drop.y > rainHeight) {

      drop.y = -drop.length;

      drop.x = Math.random() * rainWidth;

    }

    if (drop.x < -20) {
      drop.x = rainWidth + 20;
    }

  });

  requestAnimationFrame(drawRain);
}

window.addEventListener("resize", resizeRain);

resizeRain();
drawRain();


/* =========================================================
   BATCOMPUTER TABS
========================================================= */

const skillTabs = document.querySelectorAll(".skill-tab");
const skillPanels = document.querySelectorAll(".skill-panel");

skillTabs.forEach((tab) => {

  tab.addEventListener("click", () => {

    const target = tab.dataset.skill;

    skillTabs.forEach((item) => {
      item.classList.remove("active");
    });

    skillPanels.forEach((panel) => {
      panel.classList.remove("active");
    });

    tab.classList.add("active");

    const targetPanel = document.getElementById(target);

    if (targetPanel) {
      targetPanel.classList.add("active");
    }

  });

});


/* =========================================================
   CASE FILE MODALS
========================================================= */

const caseModal = document.getElementById("caseModal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");

const caseData = {

  predictor: {

    title: "BLACK PREDICTOR",

    content: `
      <h4>MISSION</h4>

      <p>
        A predictive grid reliability platform designed to
        forecast power outage risk using historical
        infrastructure and environmental data.
      </p>

      <h4>ARCHITECTURE</h4>

      <ul>
        <li>Machine learning prediction pipeline</li>
        <li>Flask REST APIs</li>
        <li>SQLite data persistence</li>
        <li>Prediction history management</li>
        <li>Interactive analytics dashboard</li>
      </ul>

      <h4>TECH STACK</h4>

      <p>
        Python · Flask · scikit-learn · SQLite · REST API
      </p>

      <h4>FUTURE SYSTEMS</h4>

      <p>
        Modular architecture supporting future Digital Twin
        modelling and IoT-based monitoring.
      </p>
    `

  },

  softdrink: {

    title: "SOFTDRINK",

    content: `
      <h4>MISSION</h4>

      <p>
        A responsive beverage brand landing page focused on
        visual presentation, intuitive navigation and
        interactive product showcasing.
      </p>

      <h4>FEATURES</h4>

      <ul>
        <li>Responsive layout</li>
        <li>Interactive navigation</li>
        <li>Product showcase</li>
        <li>Smooth CSS animations</li>
        <li>JavaScript interactions</li>
        <li>Semantic HTML structure</li>
      </ul>

      <h4>TECH STACK</h4>

      <p>
        HTML · CSS · JavaScript · Responsive Web Design
      </p>
    `

  }

};


document.querySelectorAll(".case-button")
  .forEach((button) => {

    button.addEventListener("click", () => {

      const caseId = button.dataset.case;

      const data = caseData[caseId];

      if (!data) return;

      modalTitle.textContent = data.title;

      modalContent.innerHTML = data.content;

      caseModal.classList.add("open");

      document.body.classList.add("modal-open");

    });

  });


function closeModal() {

  caseModal.classList.remove("open");

  document.body.classList.remove("modal-open");

}

modalClose?.addEventListener("click", closeModal);

caseModal?.addEventListener("click", (event) => {

  if (event.target === caseModal) {
    closeModal();
  }

});

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    closeModal();
  }

});


/* =========================================================
   MAGNETIC BUTTONS
========================================================= */

const magneticElements =
  document.querySelectorAll(".magnetic");

magneticElements.forEach((element) => {

  element.addEventListener("mousemove", (event) => {

    const rect = element.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left -
      rect.width / 2;

    const y =
      event.clientY -
      rect.top -
      rect.height / 2;

    element.style.transform =
      `translate(${x * 0.12}px, ${y * 0.12}px)`;

  });

  element.addEventListener("mouseleave", () => {

    element.style.transform = "";

  });

});


/* =========================================================
   REVEAL SECTIONS
========================================================= */

const revealTargets = document.querySelectorAll(
  ".section-heading, .glass-card, .about-copy, .computer, .project-card, .coding-terminal, .record-card, .social-card"
);

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) return;

      entry.target.animate(
        [
          {
            opacity: 0,
            transform: "translateY(35px)"
          },
          {
            opacity: 1,
            transform: "translateY(0)"
          }
        ],
        {
          duration: 850,
          easing: "cubic-bezier(.2,.8,.2,1)",
          fill: "forwards"
        }
      );

      revealObserver.unobserve(entry.target);

    });

  },
  {
    threshold: 0.12
  }
);

revealTargets.forEach((element) => {

  element.style.opacity = "0";

  revealObserver.observe(element);

});


/* =========================================================
   RECORD CARD STAGGER
========================================================= */

document.querySelectorAll(".record-card")
  .forEach((card, index) => {

    card.style.transitionDelay =
      `${index * 60}ms`;

  });


/* =========================================================
   EASTER EGG
   TYPE: BAT
========================================================= */

let secretInput = "";

document.addEventListener("keydown", (event) => {

  if (
    event.key.length === 1 &&
    /[a-z]/i.test(event.key)
  ) {

    secretInput += event.key.toLowerCase();

    if (secretInput.length > 3) {
      secretInput =
        secretInput.slice(-3);
    }

    if (secretInput === "bat") {
      openSecretTerminal();
      secretInput = "";
    }

  }

});


const secretTerminal =
  document.getElementById("secretTerminal");

const secretClose =
  document.getElementById("secretClose");

function openSecretTerminal() {

  secretTerminal.classList.add("open");

}

secretClose?.addEventListener("click", () => {

  secretTerminal.classList.remove("open");

});

secretTerminal?.addEventListener("click", (event) => {

  if (event.target === secretTerminal) {

    secretTerminal.classList.remove("open");

  }

});


/* =========================================================
   ACTIVE NAV
========================================================= */

const sections =
  document.querySelectorAll("section[id]");

const navLinks =
  document.querySelectorAll(".side-nav a");

const navObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {

          link.style.color = "";

          link.style.borderColor = "";

        });

        const active =
          document.querySelector(
            `.side-nav a[href="#${entry.target.id}"]`
          );

        if (active) {

          active.style.color =
            "var(--yellow)";

          active.style.borderColor =
            "var(--yellow)";

        }

      });

    },
    {
      threshold: 0.45
    }
  );

sections.forEach((section) => {

  navObserver.observe(section);

});


/* =========================================================
   MENU BUTTON
========================================================= */

const menuButton =
  document.getElementById("menuButton");

const sideNav =
  document.getElementById("sideNav");

menuButton?.addEventListener("click", () => {

  sideNav?.classList.toggle("mobile-visible");

});


/* =========================================================
   CONSOLE EASTER EFFECT
========================================================= */

console.log(`
╔══════════════════════════════════════╗
║       WAYNE SYSTEMS // MS-27         ║
╠══════════════════════════════════════╣
║                                      ║
║  MANASHVI SHARMA                     ║
║  COMPUTER SCIENCE & ENGINEERING      ║
║                                      ║
║  SYSTEM STATUS: ONLINE               ║
║                                      ║
║  Try typing "BAT"...                 ║
║                                      ║
╚══════════════════════════════════════╝
`);


/* =========================================================
   PREVENT IMAGE DRAG
========================================================= */

document.querySelectorAll("img").forEach((img) => {

  img.setAttribute("draggable", "false");

});