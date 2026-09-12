/* =========================================================
   MANASHVI SHARMA
   CINEMATIC GREY // WAYNE TECH PORTFOLIO
========================================================= */

:root {
    --black: #050607;
    --black-2: #080a0c;
    --panel: #0d1012;
    --panel-2: #111518;

    --grey-1: #e1e5e7;
    --grey-2: #b4bcc0;
    --grey-3: #899398;
    --grey-4: #5d676c;
    --grey-5: #343c40;

    --line: rgba(190, 198, 202, 0.12);
    --line-bright: rgba(220, 225, 227, 0.22);

    --green: #8fa99a;

    --font-main: "Orbitron", sans-serif;
    --font-body: "Inter", sans-serif;
    --font-mono: "Space Mono", monospace;

    --ease: cubic-bezier(.2, .8, .2, 1);
}


/* =========================================================
   RESET
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--black);
    color: var(--grey-1);
    font-family: var(--font-body);
    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

button,
a {
    -webkit-tap-highlight-color: transparent;
}

::selection {
    background: rgba(210, 216, 219, .2);
    color: white;
}


/* =========================================================
   BODY BACKGROUND
========================================================= */

body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: -5;

    background:
        radial-gradient(
            circle at 70% 15%,
            rgba(190, 200, 205, .055),
            transparent 28%
        ),
        radial-gradient(
            circle at 20% 80%,
            rgba(120, 130, 135, .035),
            transparent 30%
        ),
        linear-gradient(
            180deg,
            #07090b,
            #050607 60%,
            #080a0c
        );
}


/* =========================================================
   NOISE
========================================================= */

.noise {
    position: fixed;
    inset: 0;
    z-index: 9998;
    pointer-events: none;
    opacity: .035;

    background-image:
        url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E");
}


/* =========================================================
   GRID
========================================================= */

.grid-background {
    position: fixed;
    inset: 0;
    z-index: -4;
    pointer-events: none;
    opacity: .22;

    background-image:
        linear-gradient(
            rgba(180, 190, 195, .035) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(180, 190, 195, .035) 1px,
            transparent 1px
        );

    background-size: 65px 65px;

    mask-image:
        linear-gradient(
            to bottom,
            black,
            transparent 80%
        );
}


/* =========================================================
   AMBIENT LIGHT
========================================================= */

.ambient-light {
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    z-index: -3;
    filter: blur(90px);
    opacity: .13;
}

.ambient-one {
    width: 420px;
    height: 420px;
    top: -180px;
    right: -120px;
    background: #aeb7bb;
}

.ambient-two {
    width: 300px;
    height: 300px;
    bottom: 10%;
    left: -180px;
    background: #596267;
}


/* =========================================================
   LOADER
========================================================= */

#loader {
    position: fixed;
    inset: 0;
    z-index: 10000;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background:
        radial-gradient(
            circle,
            #151a1d,
            #050607 65%
        );

    transition:
        opacity .7s ease,
        visibility .7s ease;
}

#loader.hide {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
}

.loader-symbol {
    width: 72px;
    height: 72px;

    display: grid;
    place-items: center;

    border: 1px solid rgba(210, 218, 220, .3);

    font-family: var(--font-main);
    font-size: 26px;
    font-weight: 800;

    color: #d4d9db;

    box-shadow:
        0 0 50px rgba(190, 200, 205, .08),
        inset 0 0 25px rgba(255, 255, 255, .03);
}

.loader-text {
    margin-top: 25px;

    font-family: var(--font-mono);
    font-size: 9px;
    letter-spacing: 2px;
    color: var(--grey-3);
}

.loader-bar {
    width: 230px;
    height: 2px;

    margin-top: 20px;

    background: rgba(255,255,255,.08);
}

.loader-progress {
    width: 0%;
    height: 100%;

    background: #b9c0c3;

    box-shadow:
        0 0 15px rgba(210,220,223,.3);

    transition: width .1s linear;
}

.loader-percent {
    margin-top: 10px;

    font-family: var(--font-mono);
    font-size: 8px;

    color: var(--grey-4);
}


/* =========================================================
   NAVBAR
========================================================= */

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    z-index: 1000;

    height: 78px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 5vw;

    border-bottom: 1px solid rgba(190,198,202,.07);

    background:
        linear-gradient(
            180deg,
            rgba(5,7,8,.92),
            rgba(5,7,8,.65)
        );

    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}

.nav-logo {
    display: flex;
    align-items: center;
    gap: 12px;

    font-family: var(--font-mono);
    font-size: 9px;
    letter-spacing: 1.5px;
    color: var(--grey-3);
}

.logo-mark {
    width: 31px;
    height: 31px;

    display: grid;
    place-items: center;

    border: 1px solid rgba(210,216,219,.25);

    color: var(--grey-1);

    font-family: var(--font-main);
    font-size: 12px;
    font-weight: 800;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,.08),
            rgba(255,255,255,.015)
        );

    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.06);
}

.navbar nav {
    display: flex;
    gap: 35px;
}

.navbar nav a {
    position: relative;

    font-family: var(--font-mono);
    font-size: 8px;
    letter-spacing: 1.3px;

    color: #687277;

    transition: color .3s ease;
}

.navbar nav a::after {
    content: "";

    position: absolute;
    left: 0;
    bottom: -9px;

    width: 0;
    height: 1px;

    background: #d0d6d8;

    transition: width .3s ease;
}

.navbar nav a:hover,
.navbar nav a.active {
    color: #e0e4e6;
}

.navbar nav a:hover::after,
.navbar nav a.active::after {
    width: 100%;
}

.nav-status {
    display: flex;
    align-items: center;
    gap: 7px;

    font-family: var(--font-mono);
    font-size: 7px;
    letter-spacing: 1px;

    color: #626d72;
}

.status-dot {
    width: 5px;
    height: 5px;

    border-radius: 50%;

    background: #92a79b;

    box-shadow:
        0 0 10px rgba(145,170,155,.5);

    animation: statusPulse 2s infinite;
}

@keyframes statusPulse {
    0%,100% {
        opacity: .45;
    }

    50% {
        opacity: 1;
    }
}


/* =========================================================
   HERO
========================================================= */

.hero {
    min-height: 100vh;

    padding:
        150px 7vw
        80px;

    display: grid;

    grid-template-columns:
        1.05fr
        .95fr;

    align-items: center;

    gap: 50px;

    position: relative;
}

.hero-left {
    position: relative;
    z-index: 2;
}

.classification {
    display: flex;
    align-items: center;
    gap: 12px;

    margin-bottom: 28px;

    font-family: var(--font-mono);
    font-size: 8px;
    letter-spacing: 2px;

    color: #657075;
}

.classification-line {
    width: 30px;
    height: 1px;

    background: #90999d;
}

.hero-small {
    margin-bottom: 16px;

    font-family: var(--font-mono);
    font-size: 9px;
    letter-spacing: 2.5px;

    color: #7c868b;
}

.hero h1 {
    font-family: var(--font-main);

    font-size:
        clamp(60px, 8vw, 125px);

    line-height: .83;

    letter-spacing: -.065em;

    font-weight: 900;

    color: #dfe3e5;

    text-shadow:
        0 15px 50px rgba(0,0,0,.5);
}

.hero h1 span {
    display: block;

    color: transparent;

    -webkit-text-stroke:
        1px rgba(210,216,219,.52);

    text-shadow: none;
}

.hero-title {
    display: flex;
    align-items: center;
    gap: 13px;

    margin-top: 32px;

    font-family: var(--font-mono);
    font-size: 9px;
    letter-spacing: 1.8px;

    color: #899398;
}

.hero-title span {
    width: 42px;
    height: 1px;

    background: #899398;
}

.hero-description {
    max-width: 620px;

    margin-top: 24px;

    font-size: 14px;
    line-height: 1.9;

    color: #727d82;
}

.hero-buttons {
    display: flex;
    gap: 12px;

    margin-top: 34px;
}

.btn {
    min-height: 48px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 18px;

    padding: 0 22px;

    font-family: var(--font-mono);
    font-size: 8px;
    letter-spacing: 1.4px;

    border: 1px solid rgba(210,216,219,.18);

    transition:
        transform .35s var(--ease),
        background .35s ease,
        border-color .35s ease,
        color .35s ease;
}

.btn:hover {
    transform: translateY(-3px);
}

.btn.primary {
    background:
        linear-gradient(
            145deg,
            #d5dadd,
            #929b9f
        );

    color: #080a0c;

    box-shadow:
        0 15px 40px rgba(180,190,195,.09);
}

.btn.primary:hover {
    background: #e5e8e9;
}

.btn.secondary {
    color: #aab2b5;

    background:
        rgba(255,255,255,.015);
}

.btn.secondary:hover {
    border-color: rgba(220,225,227,.35);
    color: #edf0f1;
}

.hero-socials {
    display: flex;
    gap: 25px;

    margin-top: 38px;
}

.hero-socials a {
    font-family: var(--font-mono);
    font-size: 8px;
    letter-spacing: 1.5px;

    color: #515c61;

    transition: color .3s ease;
}

.hero-socials a:hover {
    color: #d1d6d8;
}


/* =========================================================
   HERO PROFILE
========================================================= */

.hero-right {
    min-height: 590px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    perspective: 1400px;
}

.profile-card {
    position: relative;
    z-index: 4;

    width: min(400px, 90%);

    padding: 14px;

    background:
        linear-gradient(
            145deg,
            rgba(45,51,54,.62),
            rgba(8,11,13,.94) 65%
        );

    border:
        1px solid rgba(205,212,215,.15);

    box-shadow:
        35px 40px 90px rgba(0,0,0,.65),
        inset 0 1px 0 rgba(255,255,255,.06);

    transform:
        rotateY(-7deg)
        rotateX(3deg);

    transform-style: preserve-3d;

    transition:
        transform .7s var(--ease),
        border-color .4s ease,
        box-shadow .4s ease;
}

.profile-card:hover {
    border-color: rgba(220,226,228,.27);

    box-shadow:
        40px 45px 110px rgba(0,0,0,.75),
        inset 0 1px 0 rgba(255,255,255,.08);
}

.profile-top {
    height: 36px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 8px;

    font-family: var(--font-mono);
    font-size: 7px;
    letter-spacing: 1.5px;

    color: #707b80;
}

.verified {
    color: var(--green);

    text-shadow:
        0 0 10px rgba(145,170,155,.3);
}

.profile-image-wrap {
    position: relative;

    aspect-ratio: .82;

    overflow: hidden;

    background: #101416;
}

.profile-image {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;
    object-position: center 25%;

    filter:
        grayscale(100%)
        contrast(1.12)
        brightness(.78);

    transition:
        filter .7s ease,
        transform .8s var(--ease);
}

.profile-card:hover .profile-image {
    filter:
        grayscale(65%)
        contrast(1.08)
        brightness(.88);

    transform: scale(1.035);
}

.profile-image-wrap::after {
    content: "";

    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            180deg,
            transparent 40%,
            rgba(4,6,7,.9)
        );

    pointer-events: none;
}

.image-glow {
    position: absolute;

    width: 200px;
    height: 200px;

    left: 50%;
    top: 25%;

    transform: translate(-50%, -50%);

    border-radius: 50%;

    background: rgba(220,225,227,.08);

    filter: blur(60px);

    z-index: 2;

    pointer-events: none;
}

.image-scan {
    position: absolute;

    left: 0;
    right: 0;

    top: 0;

    height: 1px;

    background: rgba(210,216,219,.5);

    box-shadow:
        0 0 15px rgba(220,225,227,.5);

    z-index: 5;

    animation: scan 5s linear infinite;
}

@keyframes scan {
    0% {
        top: 0;
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        top: 100%;
        opacity: 0;
    }
}

.image-corner {
    position: absolute;

    width: 22px;
    height: 22px;

    z-index: 6;

    border-color: rgba(220,225,227,.45);
}

.corner-tl {
    top: 15px;
    left: 15px;
    border-top: 1px solid;
    border-left: 1px solid;
}

.corner-tr {
    top: 15px;
    right: 15px;
    border-top: 1px solid;
    border-right: 1px solid;
}

.corner-bl {
    bottom: 15px;
    left: 15px;
    border-bottom: 1px solid;
    border-left: 1px solid;
}

.corner-br {
    bottom: 15px;
    right: 15px;
    border-bottom: 1px solid;
    border-right: 1px solid;
}

.profile-info {
    display: flex;
    justify-content: space-between;

    padding:
        20px
        8px
        14px;
}

.profile-info div {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.profile-info span,
.profile-footer {
    font-family: var(--font-mono);
    font-size: 7px;
    letter-spacing: 1.2px;

    color: #5d676c;
}

.profile-info strong {
    font-family: var(--font-main);
    font-size: 12px;

    color: #c7ced1;
}

.profile-footer {
    display: flex;
    justify-content: space-between;

    padding: 12px 8px 4px;

    border-top:
        1px solid rgba(190,198,202,.08);
}


/* =========================================================
   ORBITS
========================================================= */

.orbit {
    position: absolute;

    border:
        1px solid rgba(190,198,202,.07);

    border-radius: 50%;

    pointer-events: none;

    transform:
        rotateX(68deg)
        rotateZ(20deg);
}

.orbit-one {
    width: 500px;
    height: 220px;

    animation: orbit 14s linear infinite;
}

.orbit-two {
    width: 580px;
    height: 260px;

    transform:
        rotateX(68deg)
        rotateZ(-25deg);

    animation: orbitReverse 18s linear infinite;
}

.orbit-three {
    width: 390px;
    height: 180px;

    transform:
        rotateX(68deg)
        rotateZ(70deg);

    opacity: .55;
}

@keyframes orbit {
    from {
        transform:
            rotateX(68deg)
            rotateZ(20deg);
    }

    to {
        transform:
            rotateX(68deg)
            rotateZ(380deg);
    }
}

@keyframes orbitReverse {
    from {
        transform:
            rotateX(68deg)
            rotateZ(-25deg);
    }

    to {
        transform:
            rotateX(68deg)
            rotateZ(-385deg);
    }
}


/* =========================================================
   STATS
========================================================= */

.stats {
    width: 90%;

    margin: 0 auto;

    display: grid;
    grid-template-columns:
        repeat(4, 1fr);

    border-top:
        1px solid var(--line);

    border-bottom:
        1px solid var(--line);
}

.stat-card {
    min-height: 160px;

    padding: 28px;

    display: flex;
    flex-direction: column;

    border-right:
        1px solid var(--line);

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,.015),
            transparent
        );

    transition:
        background .4s ease,
        transform .4s var(--ease);
}

.stat-card:last-child {
    border-right: 0;
}

.stat-card:hover {
    background: rgba(255,255,255,.025);
    transform: translateY(-3px);
}

.stat-number {
    font-family: var(--font-main);
    font-size: 32px;
    font-weight: 800;

    color: #cbd1d3;
}

.stat-label {
    margin-top: 8px;

    font-family: var(--font-mono);
    font-size: 8px;
    letter-spacing: 1.5px;

    color: #7c878c;
}

.stat-description {
    margin-top: 8px;

    font-family: var(--font-mono);
    font-size: 7px;

    color: #4f5a5f;
}

.stat-link {
    margin-top: auto;

    font-family: var(--font-mono);
    font-size: 7px;
    letter-spacing: 1px;

    color: #919a9e;
}


/* =========================================================
   SYSTEM STRIP
========================================================= */

.system-strip {
    width: 90%;

    margin: 0 auto;

    min-height: 52px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom:
        1px solid var(--line);

    font-family: var(--font-mono);
    font-size: 7px;
    letter-spacing: 1.2px;

    color: #525d62;
}

.system-strip span {
    display: flex;
    align-items: center;
    gap: 7px;
}

.system-strip i {
    width: 4px;
    height: 4px;

    border-radius: 50%;

    background: #879c91;
}


/* =========================================================
   GENERAL SECTIONS
========================================================= */

.section {
    width: 90%;

    margin: auto;

    padding:
        150px
        0;
}

.section-heading {
    display: flex;
    align-items: flex-start;
    gap: 25px;
}

.section-number {
    font-family: var(--font-mono);
    font-size: 9px;

    color: #4f595e;

    padding-top: 10px;
}

.eyebrow {
    margin-bottom: 13px;

    font-family: var(--font-mono);
    font-size: 8px;
    letter-spacing: 2px;

    color: #667176;
}

.section-heading h2,
.contact-left h2,
.connect-card h2 {
    font-family: var(--font-main);

    font-size:
        clamp(34px, 5vw, 70px);

    line-height: .95;

    letter-spacing: -.05em;

    color: #d5dadd;
}

.section-heading h2 span,
.contact-left h2 span,
.connect-card h2 span {
    color: transparent;

    -webkit-text-stroke:
        1px rgba(200,207,210,.45);
}

.section-intro {
    max-width: 650px;

    margin:
        35px
        0
        55px
        55px;

    font-size: 13px;
    line-height: 1.8;

    color: #697479;
}


/* =========================================================
   ABOUT
========================================================= */

.about-grid {
    margin-top: 60px;

    display: grid;

    grid-template-columns:
        1fr
        1fr;

    gap: 80px;
}

.about-text {
    color: #737e83;

    line-height: 1.9;
}

.about-text p {
    margin-bottom: 25px;
}

.large-text {
    font-size: 20px;
    line-height: 1.7;
    color: #9ba3a7;
}

.about-text strong {
    color: #c9d0d2;
}

.about-tags {
    display: flex;
    flex-wrap: wrap;

    gap: 8px;

    margin-top: 35px;
}

.about-tags span {
    padding: 8px 11px;

    border: 1px solid rgba(190,198,202,.1);

    font-family: var(--font-mono);
    font-size: 7px;

    color: #687277;

    background: rgba(255,255,255,.015);
}


/* =========================================================
   TERMINAL
========================================================= */

.about-terminal {
    border:
        1px solid rgba(190,198,202,.12);

    background:
        linear-gradient(
            145deg,
            rgba(24,29,32,.65),
            rgba(7,9,11,.9)
        );

    box-shadow:
        25px 30px 70px rgba(0,0,0,.35);
}

.terminal-header {
    height: 48px;

    display: flex;
    align-items: center;

    padding: 0 18px;

    border-bottom:
        1px solid rgba(190,198,202,.09);
}

.terminal-dots {
    display: flex;
    gap: 6px;
}

.terminal-dots span {
    width: 6px;
    height: 6px;

    border-radius: 50%;

    background: #535d61;
}

.terminal-header label {
    margin-left: auto;

    font-family: var(--font-mono);
    font-size: 7px;
    letter-spacing: 1px;

    color: #5f696e;
}

.terminal-body {
    padding: 30px;

    font-family: var(--font-mono);
    font-size: 8px;
    line-height: 1.8;
}

.terminal-body p {
    margin-bottom: 4px;

    color: #697479;
}

.terminal-body b {
    color: #a4adaf;
}

.terminal-output {
    margin:
        0 0 20px 17px !important;

    color: #a5adb0 !important;
}

.terminal-output.success {
    color: #899d91 !important;
}


/* =========================================================
   PROJECTS
========================================================= */

.projects-grid {
    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 18px;
}

.project-card {
    position: relative;

    min-height: 560px;

    padding: 32px;

    overflow: hidden;

    border:
        1px solid rgba(190,198,202,.11);

    background:
        linear-gradient(
            145deg,
            rgba(28,34,37,.62),
            rgba(8,11,13,.92) 65%
        );

    box-shadow:
        20px 25px 70px rgba(0,0,0,.35);

    transform-style: preserve-3d;

    transition:
        transform .55s var(--ease),
        border-color .35s ease,
        box-shadow .35s ease;
}

.project-card::before {
    content: "";

    position: absolute;
    inset: 0;

    pointer-events: none;

    background:
        radial-gradient(
            circle at var(--mx, 50%) var(--my, 20%),
            rgba(220,225,227,.1),
            transparent 30%
        );

    opacity: .7;
}

.project-card::after {
    content: "";

    position: absolute;

    left: 0;
    right: 0;
    top: 0;

    height: 1px;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(220,225,227,.35),
            transparent
        );
}

.project-card:hover {
    border-color:
        rgba(215,221,223,.25);

    box-shadow:
        30px 35px 90px rgba(0,0,0,.58);
}

.project-topline {
    position: relative;
    z-index: 2;

    display: flex;
    justify-content: space-between;

    font-family: var(--font-mono);
    font-size: 7px;
    letter-spacing: 1.5px;

    color: #596469;
}

.project-state {
    padding: 5px 8px;

    border:
        1px solid rgba(190,198,202,.1);

    color: #7c878b;
}

.project-icon {
    width: 48px;
    height: 48px;

    margin-top: 30px;

    display: grid;
    place-items: center;

    border:
        1px solid rgba(210,216,219,.13);

    background:
        linear-gradient(
            145deg,
            #242b2f,
            #0b0e10
        );

    color: #c5cccf;

    font-family: var(--font-main);
    font-size: 14px;
    font-weight: 800;

    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.07),
        0 15px 35px rgba(0,0,0,.35);
}

.project-number {
    position: absolute;

    top: 72px;
    right: 30px;

    font-family: var(--font-main);
    font-size: 80px;
    font-weight: 900;

    color: rgba(210,216,219,.025);
}

.project-card h3 {
    position: relative;
    z-index: 2;

    margin-top: 25px;

    font-family: var(--font-main);
    font-size: 30px;
    line-height: 1;

    letter-spacing: -.04em;

    color: #d7dcde;
}

.project-type {
    position: relative;
    z-index: 2;

    margin-top: 10px;

    font-family: var(--font-mono);
    font-size: 7px;
    letter-spacing: 1px;

    color: #697479;
}

.project-description {
    position: relative;
    z-index: 2;

    margin-top: 25px;

    font-size: 12px;
    line-height: 1.75;

    color: #778186;
}

.project-features {
    position: relative;
    z-index: 2;

    margin-top: 22px;

    list-style: none;
}

.project-features li {
    position: relative;

    padding-left: 15px;

    margin-bottom: 9px;

    font-family: var(--font-mono);
    font-size: 7px;
    line-height: 1.6;

    color: #626d72;
}

.project-features li::before {
    content: "";

    position: absolute;

    left: 0;
    top: 7px;

    width: 4px;
    height: 4px;

    background: #858f93;
}

.tech-stack {
    position: relative;
    z-index: 2;

    display: flex;
    flex-wrap: wrap;

    gap: 6px;

    margin-top: 25px;
}

.tech-stack span {
    padding: 7px 8px;

    border:
        1px solid rgba(190,198,202,.1);

    background:
        rgba(255,255,255,.015);

    font-family: var(--font-mono);
    font-size: 6px;
    letter-spacing: .7px;

    color: #6d787d;
}

.project-link {
    position: absolute;

    bottom: 0;
    left: 32px;
    right: 32px;

    padding:
        18px
        0;

    border-top:
        1px solid rgba(190,198,202,.1);

    display: flex;
    justify-content: space-between;

    font-family: var(--font-mono);
    font-size: 7px;
    letter-spacing: 1.3px;

    color: #9ca5a9;

    transition:
        color .3s ease;
}

.project-link:hover {
    color: #edf0f1;
}


/* =========================================================
   SKILLS
========================================================= */

.skills-grid {
    margin-top: 60px;

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 14px;
}

.skill-group {
    padding: 25px;

    min-height: 190px;

    border:
        1px solid rgba(190,198,202,.09);

    background:
        linear-gradient(
            145deg,
            rgba(25,30,33,.48),
            rgba(8,11,13,.78)
        );

    transition:
        transform .4s var(--ease),
        border-color .35s ease;
}

.skill-group:hover {
    transform: translateY(-5px);

    border-color:
        rgba(205,212,214,.2);
}

.skill-icon {
    width: 42px;
    height: 42px;

    display: grid;
    place-items: center;

    margin-bottom: 25px;

    border:
        1px solid rgba(200,208,211,.12);

    background: #101416;

    font-family: var(--font-mono);
    font-size: 9px;

    color: #aeb6b9;
}

.skill-group h3 {
    font-family: var(--font-main);
    font-size: 11px;
    letter-spacing: .5px;

    color: #aeb6b9;
}

.skill-list {
    display: flex;
    flex-wrap: wrap;

    gap: 6px;

    margin-top: 15px;
}

.skill-list span {
    padding: 6px 7px;

    border:
        1px solid rgba(180,190,194,.09);

    background:
        rgba(255,255,255,.02);

    font-family: var(--font-mono);
    font-size: 6px;

    color: #727d82;
}


/* =========================================================
   ACHIEVEMENTS
========================================================= */

.achievement-grid {
    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 12px;

    margin-top: 60px;
}

.achievement-card {
    min-height: 125px;

    padding: 25px;

    display: flex;
    gap: 25px;

    border:
        1px solid rgba(190,198,202,.09);

    background:
        rgba(10,13,15,.7);

    transition:
        transform .4s var(--ease),
        border-color .3s ease,
        background .3s ease;
}

.achievement-card:hover {
    transform: translateY(-4px);

    background:
        rgba(25,29,32,.7);

    border-color:
        rgba(205,212,214,.18);
}

.achievement-card > span {
    font-family: var(--font-main);
    font-size: 22px;
    font-weight: 900;

    color: #3e474c;
}

.achievement-card h3 {
    font-family: var(--font-main);
    font-size: 12px;

    color: #c4cbcd;
}

.achievement-card p {
    margin-top: 6px;

    font-size: 11px;

    color: #727d82;
}

.achievement-card small {
    display: block;

    margin-top: 8px;

    font-family: var(--font-mono);
    font-size: 7px;

    line-height: 1.5;

    color: #5e686d;
}


/* =========================================================
   CONNECT
========================================================= */

.connect-section {
    width: 90%;

    margin:
        0 auto
        150px;
}

.connect-card {
    min-height: 420px;

    padding: 65px;

    position: relative;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    border:
        1px solid rgba(200,208,210,.12);

    background:
        radial-gradient(
            circle at 80% 50%,
            rgba(190,200,205,.07),
            transparent 35%
        ),
        linear-gradient(
            145deg,
            rgba(34,40,43,.6),
            rgba(7,9,11,.92)
        );

    box-shadow:
        25px 35px 90px rgba(0,0,0,.45);
}

.connect-card::before {
    content: "";

    position: absolute;

    width: 300px;
    height: 300px;

    right: -120px;
    top: -120px;

    border:
        1px solid rgba(210,216,219,.08);

    border-radius: 50%;
}

.connect-icon {
    width: 45px;
    height: 45px;

    display: grid;
    place-items: center;

    margin-bottom: 30px;

    border:
        1px solid rgba(200,208,210,.13);

    background: #111619;

    font-family: var(--font-main);
    font-size: 12px;
}

.connect-card h2 {
    font-size:
        clamp(45px, 7vw, 85px);
}

.connect-card > p:not(.eyebrow) {
    max-width: 550px;

    margin:
        25px
        0
        30px;

    font-size: 13px;
    line-height: 1.8;

    color: #717c81;
}


/* =========================================================
   CONTACT
========================================================= */

.contact-section {
    width: 90%;

    margin: auto;

    padding:
        120px
        0;

    display: grid;

    grid-template-columns:
        .8fr
        1.2fr;

    gap: 80px;

    border-top:
        1px solid rgba(190,198,202,.08);
}

.contact-left > p:last-child {
    margin-top: 25px;

    max-width: 420px;

    font-size: 13px;
    line-height: 1.8;

    color: #707b80;
}

.contact-links {
    display: flex;
    flex-direction: column;

    gap: 8px;
}

.contact-link {
    min-height: 72px;

    padding:
        0
        20px;

    display: grid;

    grid-template-columns:
        1fr
        2fr
        25px;

    align-items: center;

    border:
        1px solid rgba(190,198,202,.08);

    background:
        rgba(10,13,15,.45);

    font-family: var(--font-mono);
    font-size: 7px;

    color: #616c71;

    transition:
        background .3s ease,
        border-color .3s ease,
        transform .3s var(--ease);
}

.contact-link:hover {
    transform: translateX(5px);

    background:
        rgba(255,255,255,.035);

    border-color:
        rgba(205,212,214,.2);

    color: #aeb6b9;
}

.contact-link strong {
    font-size: 9px;
    font-weight: 400;

    color: #aeb6b9;
}


/* =========================================================
   FOOTER
========================================================= */

footer {
    width: 90%;

    margin: auto;

    min-height: 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-top:
        1px solid rgba(190,198,202,.08);

    font-family: var(--font-mono);
    font-size: 7px;
    letter-spacing: 1px;

    color: #505b60;
}


/* =========================================================
   SCROLL REVEAL
========================================================= */

.reveal {
    opacity: 0;

    transform:
        translateY(30px);

    transition:
        opacity .8s ease,
        transform .8s var(--ease);
}

.reveal.visible {
    opacity: 1;

    transform:
        translateY(0);
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 1000px) {

    .navbar {
        padding: 0 25px;
    }

    .navbar nav {
        gap: 18px;
    }

    .hero {
        grid-template-columns: 1fr;
        padding-top: 130px;
    }

    .hero-right {
        min-height: 550px;
    }

    .skills-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

}


@media (max-width: 768px) {

    .navbar {
        height: auto;

        min-height: 70px;

        flex-wrap: wrap;

        gap: 12px;

        padding:
            14px
            20px;
    }

    .navbar nav {
        order: 3;

        width: 100%;

        padding-bottom: 7px;

        justify-content: center;

        flex-wrap: wrap;

        gap: 13px;
    }

    .nav-status {
        margin-left: auto;
    }

    .hero {
        width: 100%;

        padding:
            145px
            25px
            70px;
    }

    .hero h1 {
        font-size:
            clamp(48px, 15vw, 80px);
    }

    .hero-description {
        font-size: 12px;
    }

    .hero-buttons {
        flex-wrap: wrap;
    }

    .hero-right {
        min-height: 500px;
    }

    .profile-card {
        width: min(360px, 90vw);

        transform: none;
    }

    .orbit {
        opacity: .5;
    }

    .stats {
        width: calc(100% - 40px);

        grid-template-columns:
            repeat(2, 1fr);
    }

    .stat-card {
        border-bottom:
            1px solid var(--line);
    }

    .stat-card:nth-child(2) {
        border-right: 0;
    }

    .system-strip {
        width: calc(100% - 40px);

        padding: 15px 0;

        display: grid;

        grid-template-columns:
            1fr 1fr;

        gap: 10px;
    }

    .section {
        width: calc(100% - 40px);

        padding:
            100px
            0;
    }

    .section-intro {
        margin-left: 0;
    }

    .about-grid {
        grid-template-columns: 1fr;

        gap: 50px;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .skills-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .achievement-grid {
        grid-template-columns: 1fr;
    }

    .connect-section {
        width: calc(100% - 40px);

        margin-bottom: 90px;
    }

    .connect-card {
        padding: 45px 25px;
    }

    .contact-section {
        width: calc(100% - 40px);

        grid-template-columns: 1fr;

        gap: 50px;

        padding:
            90px
            0;
    }

    footer {
        width: calc(100% - 40px);

        padding:
            25px
            0;

        flex-direction: column;

        justify-content: center;

        gap: 12px;
    }

}


@media (max-width: 500px) {

    .nav-logo span:last-child {
        display: none;
    }

    .nav-status {
        font-size: 6px;
    }

    .hero {
        padding-left: 20px;
        padding-right: 20px;
    }

    .hero-buttons {
        flex-direction: column;

        align-items: stretch;
    }

    .btn {
        width: 100%;
    }

    .hero-socials {
        flex-wrap: wrap;

        gap: 15px;
    }

    .hero-right {
        min-height: 430px;
    }

    .profile-card {
        width: 88vw;
    }

    .stats {
        width: calc(100% - 30px);

        grid-template-columns: 1fr;
    }

    .stat-card {
        border-right: 0;
    }

    .system-strip {
        width: calc(100% - 30px);

        grid-template-columns: 1fr;
    }

    .section {
        width: calc(100% - 30px);

        padding:
            80px
            0;
    }

    .section-heading {
        gap: 13px;
    }

    .section-heading h2 {
        font-size: 34px;
    }

    .large-text {
        font-size: 17px;
    }

    .project-card {
        min-height: auto;

        padding: 25px;

        padding-bottom: 85px;
    }

    .project-number {
        font-size: 55px;

        top: 70px;
        right: 20px;
    }

    .project-card h3 {
        font-size: 26px;
    }

    .project-link {
        left: 25px;
        right: 25px;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .achievement-card {
        gap: 15px;
    }

    .contact-link {
        grid-template-columns:
            1fr;

        gap: 6px;

        padding: 17px;

        min-height: auto;
    }

    .contact-link > span:last-child {
        display: none;
    }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: .001ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .001ms !important;
    }

    .reveal {
        opacity: 1;
        transform: none;
    }

}