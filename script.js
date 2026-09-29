/* =========================
   TYPING EFFECT
========================= */

const typingElement = document.getElementById("typing");

const roles = [
    "Software Developer",
    "Data Analyst"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();


/* =========================
   PROFILE CARD 3D TILT
========================= */

const scene = document.querySelector(".profile-scene");
const profileCard = document.querySelector(".profile-card");

if (scene && profileCard) {

    scene.addEventListener("mousemove", function(e) {

        const rect = scene.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -7;

        const rotateY =
            ((x - centerX) / centerX) * 7;

        profileCard.style.animation = "none";

        profileCard.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    scene.addEventListener("mouseleave", function() {

        profileCard.style.transform =
            "rotateX(0deg) rotateY(0deg)";

        profileCard.style.animation =
            "floatCard 5s ease-in-out infinite";

    });
}


/* =========================
   SKILL / PROJECT TILT
========================= */

const tiltCards =
    document.querySelectorAll(".tilt-card");

tiltCards.forEach(card => {

    card.addEventListener("mousemove", function(e) {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX =
            ((y - rect.height / 2) / rect.height) * -5;

        const rotateY =
            ((x - rect.width / 2) / rect.width) * 5;

        card.style.transform =
            `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave", function() {

        card.style.transform =
            "perspective(700px) rotateX(0) rotateY(0)";

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

revealElements.forEach(element => {
    observer.observe(element);
});


/* =========================
   NAVBAR SCROLL
========================= */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 15px 40px rgba(0,0,0,.35)";

        navbar.style.borderColor =
            "rgba(255,22,136,.2)";

    } else {

        navbar.style.boxShadow = "none";

        navbar.style.borderColor =
            "rgba(255,255,255,.12)";
    }

});


/* =========================
   SMOOTH NAVIGATION
========================= */

document.querySelectorAll('a[href^="#"]')
.forEach(link => {

    link.addEventListener("click", function(e) {

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});