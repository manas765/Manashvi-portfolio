/* =========================================================
   MANASHVI SHARMA
   BATMAN PORTFOLIO // INTERACTION ENGINE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       LOADER
    ===================================================== */

    const loader = document.getElementById("loader");
    const loaderProgress = document.getElementById("loaderProgress");
    const loaderPercent = document.getElementById("loaderPercent");

    let progress = 0;

    const loadingInterval = setInterval(() => {

        progress += Math.floor(Math.random() * 8) + 3;

        if (progress >= 100) {

            progress = 100;

            clearInterval(loadingInterval);

            setTimeout(() => {

                loader.classList.add("hidden");

            }, 350);

        }

        if (loaderProgress) {
            loaderProgress.style.width = `${progress}%`;
        }

        if (loaderPercent) {
            loaderPercent.textContent =
                `${String(progress).padStart(2, "0")}%`;
        }

    }, 70);


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".section-header, " +
        ".about-grid, " +
        ".organization-card, " +
        ".project-card, " +
        ".skill-category, " +
        ".record, " +
        ".contact-link"
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });


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


    /* =====================================================
       PROJECT CARD 3D TILT
    ===================================================== */

    const projectCards =
        document.querySelectorAll(".project-card");


    projectCards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -2.5;

            const rotateY =
                ((x - centerX) / centerX) * 2.5;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-4px)`;

            card.style.setProperty(
                "--mouse-x",
                `${x}px`
            );

            card.style.setProperty(
                "--mouse-y",
                `${y}px`
            );

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

        });

    });


    /* =====================================================
       PROFILE CARD 3D TILT
    ===================================================== */

    const profileCard =
        document.getElementById("profileCard");


    if (profileCard) {

        profileCard.addEventListener(
            "mousemove",
            (event) => {

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

                const rotateX =
                    ((y - centerY) / centerY) * -5;

                const rotateY =
                    ((x - centerX) / centerX) * 5;

                profileCard.style.transform =
                    `rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateZ(10px)`;

            }
        );


        profileCard.addEventListener(
            "mouseleave",
            () => {

                profileCard.style.transform =
                    "rotateX(0deg) rotateY(0deg) translateZ(0)";

            }
        );

    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-link");


    const navObserver = new IntersectionObserver(
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
            rootMargin: "-35% 0px -55% 0px"
        }
    );


    sections.forEach((section) => {
        navObserver.observe(section);
    });


    /* =====================================================
       SMOOTH NAVIGATION
    ===================================================== */

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


    /* =====================================================
       DYNAMIC FOOTER YEAR
    ===================================================== */

    const footerYear =
        document.getElementById("footerYear");


    if (footerYear) {

        footerYear.textContent =
            `© ${new Date().getFullYear()}`;

    }


    /* =====================================================
       EXTERNAL LINKS
    ===================================================== */

    const externalLinks =
        document.querySelectorAll(
            'a[target="_blank"]'
        );


    externalLinks.forEach((link) => {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (reducedMotion.matches) {

        projectCards.forEach((card) => {

            card.style.transform = "none";

        });

        if (profileCard) {
            profileCard.style.transform = "none";
        }

    }

});