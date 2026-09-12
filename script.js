/* =========================================================
   MANASHVI SHARMA
   PORTFOLIO INTERACTION ENGINE
========================================================= */


/* =========================================================
   LOADER
========================================================= */

const loader = document.getElementById("loader");
const loaderProgress = document.getElementById("loader-progress");
const loaderPercent = document.getElementById("loader-percent");

let progress = 0;

const loaderInterval = setInterval(() => {

    progress += Math.floor(Math.random() * 8) + 4;

    if (progress >= 100) {

        progress = 100;

        clearInterval(loaderInterval);

        if (loaderProgress) {
            loaderProgress.style.width = "100%";
        }

        if (loaderPercent) {
            loaderPercent.textContent = "100%";
        }

        setTimeout(() => {

            if (loader) {
                loader.classList.add("hidden");
            }

            document.body.classList.add("loaded");

        }, 350);

        return;
    }

    if (loaderProgress) {
        loaderProgress.style.width = progress + "%";
    }

    if (loaderPercent) {
        loaderPercent.textContent =
            String(progress).padStart(2, "0") + "%";
    }

}, 90);



/* =========================================================
   YEAR
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

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
   PROJECT CARD MOUSE SPOTLIGHT
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            ((event.clientX - rect.left) / rect.width) * 100;

        const y =
            ((event.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty(
            "--mouse-x",
            x + "%"
        );

        card.style.setProperty(
            "--mouse-y",
            y + "%"
        );

    });

});



/* =========================================================
   PROJECT CARD 3D TILT
========================================================= */

projectCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        if (window.innerWidth < 900) {
            return;
        }

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateY =
            ((x - centerX) / centerX) * 3;

        const rotateX =
            ((centerY - y) / centerY) * 3;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-4px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});



/* =========================================================
   PROFILE CARD 3D TILT
========================================================= */

const profileCard =
    document.querySelector(".profile-card");


if (profileCard) {

    profileCard.addEventListener(
        "mousemove",
        (event) => {

            if (window.innerWidth < 900) {
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
                 translateZ(8px)`;

        }
    );


    profileCard.addEventListener(
        "mouseleave",
        () => {

            profileCard.style.transform =
                "rotateX(0deg) rotateY(0deg)";

        }
    );

}



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const navLinks =
    document.querySelectorAll(".nav-link");


const sections =
    document.querySelectorAll("section[id]");


const navObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const id =
                        entry.target.getAttribute("id");

                    navLinks.forEach((link) => {

                        link.classList.remove(
                            "active"
                        );

                        const href =
                            link.getAttribute("href");

                        if (href === "#" + id) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                }

            });

        },

        {
            rootMargin:
                "-35% 0px -55% 0px"
        }

    );


sections.forEach((section) => {

    navObserver.observe(section);

});



/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const href =
            link.getAttribute("href");

        if (!href || !href.startsWith("#")) {
            return;
        }

        const target =
            document.querySelector(href);

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
   PARALLAX HERO
========================================================= */

const heroVisual =
    document.querySelector(".hero-visual");


if (heroVisual) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.innerWidth < 900) {
                return;
            }

            const scrollY =
                window.scrollY;

            if (scrollY < window.innerHeight) {

                heroVisual.style.transform =
                    `translateY(${scrollY * 0.08}px)`;

            }

        },
        {
            passive: true
        }
    );

}



/* =========================================================
   KEYBOARD ACCESSIBILITY
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            document.activeElement.blur();

        }

    }
);



/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%c WAYNE TECH DATABASE ",
    "background:#151a1d;color:#d9dddf;padding:8px;font-weight:bold;"
);

console.log(
    "%c MANASHVI SHARMA // SYSTEM ONLINE ",
    "color:#9aa3a8;"
);