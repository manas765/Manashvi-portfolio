/* =========================================================
   MANASHVI SHARMA — PORTFOLIO INTERACTION ENGINE
   ========================================================= */


/* =========================================================
   LOADER
   ========================================================= */

const loader = document.getElementById("loader");
const loaderProgress = document.getElementById("loader-progress");
const loaderPercent = document.getElementById("loader-percent");

let progress = 0;

const loaderInterval = setInterval(() => {

    progress += Math.floor(Math.random() * 8) + 3;

    if (progress >= 100) {
        progress = 100;
        clearInterval(loaderInterval);

        setTimeout(() => {
            loader.classList.add("hide");
        }, 450);
    }

    if (loaderProgress) {
        loaderProgress.style.width = `${progress}%`;
    }

    if (loaderPercent) {
        loaderPercent.textContent = `${progress}%`;
    }

}, 70);


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================================================
   PROJECT CARD 3D TILT
   ========================================================= */

const projectCards = document.querySelectorAll(".project-card");

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (!reducedMotion) {

    projectCards.forEach((card) => {

        card.addEventListener("pointermove", (event) => {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -3;

            const rotateY =
                ((x - centerX) / centerX) * 3;

            card.style.transform = `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-4px)
            `;

            card.style.setProperty(
                "--mouse-x",
                `${x}px`
            );

            card.style.setProperty(
                "--mouse-y",
                `${y}px`
            );

        });

        card.addEventListener("pointerleave", () => {

            card.style.transform = "";

        });

    });

}


/* =========================================================
   PROFILE CARD 3D TILT
   ========================================================= */

const profileCard = document.getElementById("profileCard");

if (profileCard && !reducedMotion) {

    profileCard.addEventListener("pointermove", (event) => {

        const rect = profileCard.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -5;

        const rotateY =
            ((x - centerX) / centerX) * 5;

        profileCard.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateZ(10px)
        `;

    });

    profileCard.addEventListener("pointerleave", () => {

        profileCard.style.transform =
            "rotateX(0deg) rotateY(0deg) translateZ(0)";

    });

}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections = document.querySelectorAll(
    "section[id]"
);

const navLinks = document.querySelectorAll(
    ".nav-link"
);

const updateActiveNavigation = () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (target === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

};

window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);

updateActiveNavigation();


/* =========================================================
   DYNAMIC FOOTER YEAR
   ========================================================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}


/* =========================================================
   SMOOTH ANCHOR OFFSET
   ========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        const navbarHeight = 80;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: reducedMotion
                ? "auto"
                : "smooth"
        });

    });

});


/* =========================================================
   CONSOLE SIGNATURE
   ========================================================= */

console.log(
    "%c MANASHVI SHARMA ",
    "background:#111;color:#c9b65b;font-weight:bold;padding:8px;"
);

console.log(
    "%c WAYNE TECH DATABASE // SYSTEM ONLINE ",
    "color:#777;"
);