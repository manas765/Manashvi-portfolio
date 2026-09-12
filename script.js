/* =========================================================
   BATCOMPUTER // PORTFOLIO ENGINE
   MANASHVI SHARMA
========================================================= */

"use strict";


/* =========================================================
   LOADER
========================================================= */

const loader = document.getElementById("loader");
const progress = document.querySelector(".loader-progress");
const percent = document.querySelector(".loader-percent");

let loadingValue = 0;

const loadingTimer = setInterval(() => {

    loadingValue += Math.floor(Math.random() * 8) + 3;

    if (loadingValue >= 100) {

        loadingValue = 100;

        clearInterval(loadingTimer);

        setTimeout(() => {

            if (loader) {
                loader.classList.add("hide");
            }

        }, 350);
    }

    if (progress) {
        progress.style.width = `${loadingValue}%`;
    }

    if (percent) {
        percent.textContent = `${loadingValue}%`;
    }

}, 80);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

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
   PROJECT CARD 3D EFFECT
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("pointermove", (event) => {

        if (window.innerWidth < 800) {
            return;
        }

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateY =
            ((x - centerX) / centerX) * 4;

        const rotateX =
            ((centerY - y) / centerY) * 4;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-4px)`;

    });


    card.addEventListener("pointerleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

    });

});


/* =========================================================
   PROFILE CARD 3D EFFECT
========================================================= */

const profileCard =
    document.querySelector(".profile-card");

if (profileCard) {

    profileCard.addEventListener(
        "pointermove",
        (event) => {

            if (window.innerWidth < 800) {
                return;
            }

            const rect =
                profileCard.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateY =
                ((x - centerX) / centerX) * 5;

            const rotateX =
                ((centerY - y) / centerY) * 5;

            profileCard.style.transform =
                `rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateZ(10px)`;

        }
    );


    profileCard.addEventListener(
        "pointerleave",
        () => {

            profileCard.style.transform =
                "rotateX(0deg) rotateY(0deg) translateZ(0)";

        }
    );

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");

const sectionObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                const currentId =
                    entry.target.getAttribute("id");

                navLinks.forEach((link) => {

                    link.classList.remove("active");

                    const href =
                        link.getAttribute("href");

                    if (href === `#${currentId}`) {

                        link.classList.add("active");

                    }

                });

            });

        },

        {
            threshold: 0.35
        }

    );

sections.forEach((section) => {

    sectionObserver.observe(section);

});


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        if (!targetId || !targetId.startsWith("#")) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   FOOTER YEAR
========================================================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   MOUSE GLOW / CARD LIGHTING
========================================================= */

projectCards.forEach((card) => {

    card.addEventListener("pointermove", (event) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        card.style.background =
            `radial-gradient(
                circle at ${x}px ${y}px,
                rgba(180,185,188,.08),
                rgba(8,10,11,.96) 45%
            )`;

    });


    card.addEventListener("pointerleave", () => {

        card.style.background =
            "";

    });

});


/* =========================================================
   CONSOLE SIGNATURE
========================================================= */

console.log(
    "%c BATCOMPUTER ONLINE ",
    "background:#202529;color:#d9dcdd;padding:8px;font-weight:bold;"
);

console.log(
    "%c MANASHVI SHARMA // SYSTEM BUILDING ",
    "color:#899195;"
);