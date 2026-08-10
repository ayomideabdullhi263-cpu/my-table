// ============================
// MOBILE MENU
// ============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


// Close menu when a link is clicked

const links = document.querySelectorAll("#navLinks a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


// ============================
// SCROLL ANIMATION
// ============================

const revealElements =
    document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

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


// ============================
// PROJECT CARD TILT
// ============================

const cards =
    document.querySelectorAll(".project");


cards.forEach(card => {

    card.addEventListener("mousemove", event => {

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


        const rotateX =
            (y - centerY) / 25;

        const rotateY =
            (centerX - x) / 25;


        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0)";

    });

});


// ============================
// TYPING EFFECT
// ============================

const words = [
    "experiences.",
    "websites.",
    "interfaces.",
    "ideas."
];

const typingElement =
    document.querySelector("h1 em");

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const word = words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            word.substring(0, characterIndex + 1);

        characterIndex++;


        if (characterIndex === word.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            word.substring(0, characterIndex - 1);

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;

        }

    }


    const speed =
        deleting ? 50 : 100;


    setTimeout(typeEffect, speed);

}


typeEffect();