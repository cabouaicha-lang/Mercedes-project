/* =====================================================
   MERCEDES-BENZ CINEMATIC WEBSITE
===================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* =================================================
       OPENING SEQUENCE
    ================================================= */

    const opening = document.querySelector(".opening");

    setTimeout(() => {

        opening.classList.add("opening-finished");

    }, 3200);


    /* =================================================
       CUSTOM CURSOR
    ================================================= */

    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";

    document.body.appendChild(cursor);


    const cursorDot = document.createElement("div");
    cursorDot.className = "cursor-dot";

    document.body.appendChild(cursorDot);


    let mouseX = 0;
    let mouseY = 0;

    let cursorX = 0;
    let cursorY = 0;


    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;

    });


    function animateCursor() {

        cursorX += (mouseX - cursorX) * 0.12;
        cursorY += (mouseY - cursorY) * 0.12;

        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;

        requestAnimationFrame(animateCursor);

    }

    animateCursor();


    /* =================================================
       CURSOR HOVER EFFECT
    ================================================= */

    const hoverElements = document.querySelectorAll(
        "a, button, .model-card, .innovation-item"
    );


    hoverElements.forEach(element => {

        element.addEventListener("mouseenter", () => {

            cursor.classList.add("cursor-hover");

        });


        element.addEventListener("mouseleave", () => {

            cursor.classList.remove("cursor-hover");

        });

    });


    /* =================================================
       MAGNETIC BUTTONS
    ================================================= */

    const magneticButtons = document.querySelectorAll(
        ".primary-btn, .dark-btn, .outline-btn"
    );


    magneticButtons.forEach(button => {

        button.addEventListener("mousemove", (e) => {

            const rect = button.getBoundingClientRect();

            const x =
                e.clientX -
                rect.left -
                rect.width / 2;

            const y =
                e.clientY -
                rect.top -
                rect.height / 2;


            button.style.transform =
                `translate(${x * 0.15}px, ${y * 0.15}px)`;

        });


        button.addEventListener("mouseleave", () => {

            button.style.transform =
                "translate(0,0)";

        });

    });


    /* =================================================
       HERO MOUSE PARALLAX
    ================================================= */

    const hero = document.querySelector(".hero");
    const heroImage = document.querySelector(".hero-image");


    if (hero && heroImage) {

        hero.addEventListener("mousemove", (e) => {

            const rect = hero.getBoundingClientRect();

            const x =
                (e.clientX - rect.left) /
                rect.width -
                0.5;

            const y =
                (e.clientY - rect.top) /
                rect.height -
                0.5;


            heroImage.style.transform =
                `scale(1.03)
                 translate(${x * -12}px, ${y * -8}px)`;

        });


        hero.addEventListener("mouseleave", () => {

            heroImage.style.transform =
                "scale(1.02) translate(0,0)";

        });

    }


    /* =================================================
       CURSOR LIGHT
    ================================================= */

    const cursorLight = document.createElement("div");

    cursorLight.className = "cursor-light";

    document.body.appendChild(cursorLight);


    document.addEventListener("mousemove", (e) => {

        cursorLight.style.left =
            `${e.clientX}px`;

        cursorLight.style.top =
            `${e.clientY}px`;

    });


    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealElements = document.querySelectorAll(
        ".intro-content, " +
        ".models-header, " +
        ".model-card, " +
        ".innovation-title, " +
        ".innovation-content, " +
        ".statement-content, " +
        ".electric-content, " +
        ".experience-content, " +
        ".cta"
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

    });


    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("revealed");

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =================================================
       STAGGER MODEL CARDS
    ================================================= */

    const cards =
        document.querySelectorAll(".model-card");


    cards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 120}ms`;

    });


    /* =================================================
       3D CARD TILT
    ================================================= */

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect =
                card.getBoundingClientRect();


            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                (y - centerY) / 30;

            const rotateY =
                (centerX - x) / 30;


            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.02)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

        });

    });


    /* =================================================
       SCROLL PARALLAX
    ================================================= */

    const parallaxImages =
        document.querySelectorAll(
            ".statement img, .electric img, .experience-image img"
        );


    window.addEventListener("scroll", () => {

        const scrollY = window.scrollY;


        parallaxImages.forEach(image => {

            const rect =
                image.parentElement.getBoundingClientRect();


            const distance =
                rect.top - window.innerHeight / 2;


            const movement =
                distance * -0.04;


            image.style.transform =
                `translateY(${movement}px) scale(1.05)`;

        });

    });


    /* =================================================
       NAVBAR SCROLL EFFECT
    ================================================= */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    });


    /* =================================================
       ACTIVE NAVIGATION
    ================================================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-links a");


    window.addEventListener("scroll", () => {

        let current = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 200;


            if (window.scrollY >= sectionTop) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add("active");

            }

        });

    });


    /* =================================================
       SMOOTH SCROLL
    ================================================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );


            if (!target) return;


            e.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =================================================
       ANIMATED COUNTER
    ================================================= */

    const numbers =
        document.querySelectorAll(".hero-number");


    numbers.forEach(number => {

        number.dataset.target =
            number.textContent.trim();

    });


    /* =================================================
       IMAGE LOAD EFFECT
    ================================================= */

    const images =
        document.querySelectorAll("img");


    images.forEach(image => {

        image.addEventListener("load", () => {

            image.classList.add("image-loaded");

        });

    });


});

/* =========================================
   MERCEDES OPENING
========================================= */

window.addEventListener("load", () => {

    const opening =
        document.getElementById("openingScreen");

    /*
        Let the existing website load
        underneath the opening.
    */

    setTimeout(() => {

        opening.classList.add("opening-exit");

    }, 4300);


    /*
        Remove the opening completely
        after the animation.
    */

    setTimeout(() => {

        opening.remove();

    }, 5700);

});
/* =====================================================
   MERCEDES CINEMATIC SCROLL HUD
   AUTOMATIC — NO HTML CHANGES
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------
       CREATE HUD
    ----------------------------------------- */

    const hud = document.createElement("div");

    hud.className = "scroll-hud";

    hud.innerHTML = `

        <div class="scroll-hud-line">

            <div class="scroll-hud-progress"></div>

            <div class="scroll-hud-dot"></div>

        </div>

        <div class="scroll-hud-number">
            01 / 01
        </div>

        <div class="scroll-hud-name">
            HOME
        </div>

    `;

    document.body.appendChild(hud);


    /* -----------------------------------------
       CREATE BACK TO TOP
    ----------------------------------------- */

    const topButton =
        document.createElement("button");

    topButton.className = "scroll-top";

    topButton.innerHTML = `
        <span>↑</span>
    `;

    topButton.setAttribute(
        "aria-label",
        "Back to top"
    );

    document.body.appendChild(topButton);


    /* -----------------------------------------
       FIND SECTIONS AUTOMATICALLY
    ----------------------------------------- */

    const sections =
        document.querySelectorAll("section");


    const sectionNames = [

        "HOME",
        "THE RANGE",
        "INNOVATION",
        "EXPERIENCE",
        "MERCEDES-BENZ"

    ];


    /* -----------------------------------------
       UPDATE SCROLL
    ----------------------------------------- */

    function updateScrollHUD() {

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;


        /* overall progress */

        let progress = 0;

        if (documentHeight > 0) {

            progress =
                (scrollTop / documentHeight) * 100;

        }


        const progressBar =
            document.querySelector(
                ".scroll-hud-progress"
            );

        const dot =
            document.querySelector(
                ".scroll-hud-dot"
            );


        if (progressBar) {

            progressBar.style.height =
                `${progress}%`;

        }


        if (dot) {

            dot.style.top =
                `${progress}%`;

        }


        /* -----------------------------------------
           CURRENT SECTION
        ----------------------------------------- */

        let currentSection = 0;


        sections.forEach((section, index) => {

            const rect =
                section.getBoundingClientRect();


            if (
                rect.top <=
                window.innerHeight * .45
            ) {

                currentSection = index;

            }

        });


        const number =
            document.querySelector(
                ".scroll-hud-number"
            );

        const name =
            document.querySelector(
                ".scroll-hud-name"
            );


        const total =
            Math.max(sections.length, 1);


        if (number) {

            number.textContent =
                `${String(currentSection + 1).padStart(2,"0")} / ${String(total).padStart(2,"0")}`;

        }


        if (name) {

            let title =
                sectionNames[currentSection];


            /*
                If there are more sections
                than predefined names,
                use their ID automatically.
            */

            if (!title && sections[currentSection]) {

                title =
                    sections[currentSection]
                    .id
                    .replace(/[-_]/g, " ")
                    .toUpperCase();

            }


            if (!title) {

                title = "EXPLORE";

            }


            name.textContent = title;

        }


        /* -----------------------------------------
           BACK TO TOP
        ----------------------------------------- */

        if (scrollTop > 500) {

            topButton.classList.add(
                "visible"
            );

        } else {

            topButton.classList.remove(
                "visible"
            );

        }

    }


    /* -----------------------------------------
       SCROLL LISTENER
    ----------------------------------------- */

    window.addEventListener(
        "scroll",
        updateScrollHUD,
        { passive: true }
    );


    /* -----------------------------------------
       BACK TO TOP
    ----------------------------------------- */

    topButton.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );


    /* -----------------------------------------
       INITIAL STATE
    ----------------------------------------- */

    updateScrollHUD();

});
/* =====================================================
   MOUSE FOLLOWING CAR SPOTLIGHT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const interactiveImages =
        document.querySelectorAll(
            ".model-card, .statement, .electric, .experience-image"
        );


    interactiveImages.forEach(element => {

        element.addEventListener("mousemove", (event) => {

            const rect =
                element.getBoundingClientRect();


            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            element.style.setProperty(
                "--mouse-x",
                `${x}px`
            );


            element.style.setProperty(
                "--mouse-y",
                `${y}px`
            );

        });


        element.addEventListener("mouseleave", () => {

            element.style.setProperty(
                "--mouse-x",
                "50%"
            );


            element.style.setProperty(
                "--mouse-y",
                "50%"
            );

        });

    });

});