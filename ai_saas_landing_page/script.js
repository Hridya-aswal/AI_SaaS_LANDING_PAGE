// =============================
// FAQ ACCORDION
// =============================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        document.querySelectorAll(".faq-answer").forEach(item => {

            if (item !== answer) {
                item.style.display = "none";
            }

        });

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

    });

});


// =============================
// ACTIVE NAVBAR LINK
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active-link");
        }

    });

});


// =============================
// PRICING CARD SELECTION
// =============================

const pricingCards =
    document.querySelectorAll(".pricing-card");

pricingCards.forEach(card => {

    card.addEventListener("click", () => {

        pricingCards.forEach(item => {
            item.classList.remove("selected-plan");
        });

        card.classList.add("selected-plan");

    });

});


// =============================
// SCROLL REVEAL ANIMATION
// =============================

const revealElements = document.querySelectorAll(
    ".feature-card, .testimonial-card, .pricing-card, .faq-item"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =============================
// HERO BUTTON RIPPLE EFFECT
// =============================

const buttons = document.querySelectorAll(
    ".primary-btn, .start-btn"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-4px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0) scale(1)";

    });

});


// =============================
// FLOATING STATS EFFECT
// =============================

const stats = document.querySelectorAll(".stat");

stats.forEach(stat => {

    stat.addEventListener("mouseenter", () => {

        stat.style.transform = "translateY(-8px)";
        stat.style.transition = "0.3s";

    });

    stat.addEventListener("mouseleave", () => {

        stat.style.transform = "translateY(0px)";

    });

});


// =============================
// FEATURE CARD GLOW
// =============================

const featureCards =
    document.querySelectorAll(".feature-card");

featureCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
            "0 0 30px rgba(74,222,128,.25)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow =
            "none";

    });

});


// =============================
// CONSOLE MESSAGE
// =============================

console.log(
    " Grocify Loaded Successfully"
);