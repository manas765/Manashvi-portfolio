/* =========================================================
   MANASHVI SHARMA
   BATCOMPUTER INTERACTION ENGINE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       LOADER
    ===================================================== */

    const loader =
        document.getElementById("loader");

    const progressBar =
        document.getElementById("loader-progress");

    const progressText =
        document.getElementById("loader-percent");


    let progress = 0;


    const loadingInterval =
        setInterval(() => {

            progress +=
                Math.floor(
                    Math.random() * 8
                ) + 3;


            if (progress >= 100) {

                progress = 100;

                clearInterval(
                    loadingInterval
                );


                setTimeout(() => {

                    if (loader) {

                        loader.classList.add(
                            "hide"
                        );

                    }

                }, 400);

            }


            if (progressBar) {

                progressBar.style.width =
                    `${progress}%`;

            }


            if (progressText) {

                progressText.textContent =
                    `${progress}%`;

            }

        }, 70);



    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;



    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section, .stat-card, .project-card, .skill-group, .achievement-card"
        );


    if (!reducedMotion) {

        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "reveal"
                );

            }
        );


        const revealObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                revealObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.08
                }
            );


        revealElements.forEach(
            (element) => {

                revealObserver.observe(
                    element
                );

            }
        );

    }



    /* =====================================================
       PROJECT 3D EFFECT
    ===================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    if (!reducedMotion) {

        projectCards.forEach(
            (card) => {


                card.addEventListener(
                    "pointermove",
                    (event) => {

                        const rect =
                            card.getBoundingClientRect();


                        const x =
                            event.clientX -
                            rect.left;


                        const y =
                            event.clientY -
                            rect.top;


                        const centerX =
                            rect.width / 2;


                        const centerY =
                            rect.height / 2;


                        const rotateX =
                            (
                                (y - centerY) /
                                centerY
                            ) * -3;


                        const rotateY =
                            (
                                (x - centerX) /
                                centerX
                            ) * 3;


                        card.style.transform =
                            `
                            perspective(900px)
                            rotateX(${rotateX}deg)
                            rotateY(${rotateY}deg)
                            translateY(-6px)
                            `;

                    }
                );


                card.addEventListener(
                    "pointerleave",
                    () => {

                        card.style.transform =
                            "";

                    }
                );

            }
        );

    }



    /* =====================================================
       PROFILE CARD 3D EFFECT
    ===================================================== */

    const profileCard =
        document.getElementById(
            "profileCard"
        );


    if (
        profileCard &&
        !reducedMotion
    ) {


        profileCard.addEventListener(
            "pointermove",
            (event) => {

                const rect =
                    profileCard.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    (
                        (y - centerY) /
                        centerY
                    ) * -4;


                const rotateY =
                    (
                        (x - centerX) /
                        centerX
                    ) * 4;


                profileCard.style.transform =
                    `
                    perspective(1200px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateZ(10px)
                    `;

            }
        );


        profileCard.addEventListener(
            "pointerleave",
            () => {

                profileCard.style.transform =
                    `
                    perspective(1200px)
                    rotateY(-7deg)
                    rotateX(3deg)
                    `;

            }
        );

    }



    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    function updateNavigation() {

        let currentSection = "";


        sections.forEach(
            (section) => {

                const sectionTop =
                    section.offsetTop - 180;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.id;

                }

            }
        );


        navLinks.forEach(
            (link) => {

                link.classList.remove(
                    "active"
                );


                const target =
                    link.getAttribute(
                        "href"
                    );


                if (
                    target ===
                    `#${currentSection}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        updateNavigation,
        {
            passive: true
        }
    );


    updateNavigation();



    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach(
        (link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    const navbarHeight =
                        80;


                    const targetPosition =
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        navbarHeight;


                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            reducedMotion
                                ? "auto"
                                : "smooth"

                    });

                }
            );

        }
    );



    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    const year =
        document.getElementById(
            "year"
        );


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }



    /* =====================================================
       BATCOMPUTER CONSOLE
    ===================================================== */

    console.log(
        "%c MANASHVI SHARMA ",
        "background:#d6b13f;color:#050608;font-weight:bold;padding:6px 12px;"
    );

    console.log(
        "BATCOMPUTER // SYSTEM ONLINE"
    );

    console.log(
        "CURRENT ORGANIZATION // STUDIQUE SRM"
    );

});