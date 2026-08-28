/* =========================================================
   BATCOMPUTER PORTFOLIO
   MANASHVI SHARMA
========================================================= */


/* =========================================================
   LOADING SCREEN
========================================================= */

const loader = document.getElementById("loader");
const progress = document.querySelector(".loader-progress");
const percent = document.querySelector(".loader-percent");

let loading = 0;

const loadingInterval = setInterval(() => {

    loading += Math.floor(Math.random() * 7) + 3;

    if (loading >= 100) {

        loading = 100;

        clearInterval(loadingInterval);

        setTimeout(() => {

            loader.classList.add("hide");

        }, 500);
    }

    progress.style.width = loading + "%";
    percent.textContent = loading + "%";

}, 80);


/* =========================================================
   NAVIGATION ACTIVE STATE
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

function updateNavigation() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "";

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.style.color = "#f4c542";

        }

    });

}

window.addEventListener(
    "scroll",
    updateNavigation
);


/* =========================================================
   3D PROJECT CARDS
========================================================= */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -3;

        const rotateY =
            ((x - centerX) / centerX) * 3;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================================================
   PROFILE CARD 3D MOVEMENT
========================================================= */

const profileCard =
    document.querySelector(".profile-card");

if (profileCard) {

    profileCard.addEventListener(
        "mousemove",
        event => {

            const rect =
                profileCard.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - 0.5) * 12;

            const rotateX =
                ((y / rect.height) - 0.5) * -12;

            profileCard.style.transform =
                `perspective(1200px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        }
    );


    profileCard.addEventListener(
        "mouseleave",
        () => {

            profileCard.style.transform =
                `perspective(1200px)
                 rotateY(-7deg)
                 rotateX(3deg)`;

        }
    );

}


/* =========================================================
   REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section, .stat-card, .project-card, .skill-group, .achievement-card"
    );

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "revealed"
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   MAGNETIC BUTTON EFFECT
========================================================= */

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener(
        "mousemove",
        event => {

            const rect =
                button.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const moveX =
                (x - rect.width / 2) * 0.12;

            const moveY =
                (y - rect.height / 2) * 0.12;

            button.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform = "";

        }
    );

});


/* =========================================================
   TERMINAL TYPING EFFECT
========================================================= */

const terminalOutputs =
    document.querySelectorAll(
        ".terminal-output"
    );

terminalOutputs.forEach((element, index) => {

    const originalText =
        element.textContent.trim();

    element.textContent = "";

    let character = 0;

    setTimeout(() => {

        const typing =
            setInterval(() => {

                element.textContent +=
                    originalText[character];

                character++;

                if (
                    character >=
                    originalText.length
                ) {

                    clearInterval(typing);

                }

            }, 25);

    }, 1000 + (index * 600));

});


/* =========================================================
   CURSOR GLOW
========================================================= */

const cursorGlow =
    document.createElement("div");

cursorGlow.style.position = "fixed";
cursorGlow.style.width = "250px";
cursorGlow.style.height = "250px";
cursorGlow.style.borderRadius = "50%";
cursorGlow.style.pointerEvents = "none";
cursorGlow.style.zIndex = "-1";

cursorGlow.style.background =
    "radial-gradient(circle, rgba(244,197,66,0.045), transparent 65%)";

cursorGlow.style.transform =
    "translate(-50%, -50%)";

document.body.appendChild(cursorGlow);


document.addEventListener(
    "mousemove",
    event => {

        cursorGlow.style.left =
            event.clientX + "px";

        cursorGlow.style.top =
            event.clientY + "px";

    }
);


/* =========================================================
   EASTER EGG
   TYPE "BATMAN" ON KEYBOARD
========================================================= */

let secretCode = "";

document.addEventListener(
    "keydown",
    event => {

        secretCode +=
            event.key.toLowerCase();

        if (secretCode.length > 6) {

            secretCode =
                secretCode.slice(-6);

        }

        if (secretCode === "batman") {

            activateBatmanMode();

            secretCode = "";

        }

    }
);


function activateBatmanMode() {

    document.body.style.transition =
        "filter 0.5s ease";

    document.body.style.filter =
        "brightness(1.4)";

    setTimeout(() => {

        document.body.style.filter =
            "brightness(1)";

    }, 600);

    console.log(
        "%c BATCOMPUTER ONLINE ",
        "background:#f4c542;color:#000;padding:10px;font-weight:bold;"
    );

}


/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        event => {

            const target =
                document.querySelector(
                    link.getAttribute("href")
                );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%c BATCOMPUTER // MANASHVI SHARMA ",
    "background:#050608;color:#f4c542;font-size:16px;padding:12px;"
);

console.log(
    "%c SYSTEM STATUS: ONLINE ",
    "color:#8cff9a;font-weight:bold;"
);

console.log(
    "GitHub: https://github.com/manas765"
);

console.log(
    "LeetCode: https://leetcode.com/u/manas765/"
);
/* =========================================================
   🦇 BATCOMPUTER ENVIRONMENT PARALLAX
========================================================= */

const hero = document.querySelector(".hero");
const heroLeft = document.querySelector(".hero-left");
const heroRight = document.querySelector(".hero-right");


if (
    hero &&
    heroLeft &&
    heroRight &&
    window.innerWidth > 800
) {

    hero.addEventListener("mousemove", (event) => {

        const rect = hero.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width -
            0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height -
            0.5;


        /* LEFT CONTENT */

        heroLeft.style.transform = `
            translate3d(
                ${x * -8}px,
                ${y * -5}px,
                35px
            )
        `;


        /* PROFILE */

        if (profileCard) {

            profileCard.style.transform = `
                perspective(1100px)
                rotateY(${x * 10}deg)
                rotateX(${y * -7}deg)
                translateZ(70px)
                translateY(-4px)
            `;

        }


        /* RIGHT ATMOSPHERE */

        heroRight.style.transform = `
            translate3d(
                ${x * 5}px,
                ${y * 4}px,
                20px
            )
        `;
    });


    hero.addEventListener("mouseleave", () => {

        heroLeft.style.transform =
            "translate3d(0,0,35px)";

        heroRight.style.transform =
            "translate3d(0,0,20px)";

        if (profileCard) {

            profileCard.style.transform = `
                perspective(1100px)
                rotateY(-8deg)
                rotateX(4deg)
                translateZ(50px)
            `;

        }

    });

}
/* =========================================================
   🦇 DETECTIVE MODE
========================================================= */

const detectiveToggle =
    document.getElementById("detective-toggle");

if (detectiveToggle) {

    detectiveToggle.addEventListener("click", () => {

        document.body.classList.toggle(
            "detective-mode"
        );

        const active =
            document.body.classList.contains(
                "detective-mode"
            );

        detectiveToggle.innerHTML = active
            ? "<span>●</span> DETECTIVE MODE // ACTIVE"
            : "<span>◉</span> DETECTIVE MODE";
    });

}