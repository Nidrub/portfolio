// Fade-in animations
const fadeInRightElements = document.querySelectorAll('.fade-in-right');
const fadeInUpElements = document.querySelectorAll('.fade-in-up');
const fadeInLeftElements = document.querySelectorAll('.fade-in-left');
const fadeinDownElements = document.querySelectorAll('.fade-in-down');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.2}); // trigger when 20% visible

fadeInRightElements.forEach(el => observer.observe(el));
fadeInUpElements.forEach(el => observer.observe(el));
fadeInLeftElements.forEach(el => observer.observe(el));
fadeinDownElements.forEach(el => observer.observe(el));

// Hamburger toggle for mobile
const hamburger = document.querySelector(".hamburger-icon");
const navigation = document.getElementById("navigation");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("active");
    hamburger.classList.toggle("open");
});

// Smooth scroll & close mobile menu
const navLinks = document.querySelectorAll("#navigation a");
const header = document.querySelector("header"); // single header element

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // prevent default jump

        // Close mobile menu if open
        if (navigation.classList.contains("active")) {
            navigation.classList.remove("active");
            hamburger.classList.remove("open");
        }

        const targetId = link.getAttribute("href");

        if (targetId === "#") {
            // Scroll Home to very top
            window.scrollTo({top: 0, behavior: "smooth"});
        } else if (targetId.startsWith("#")) {
            const target = document.querySelector(targetId);
            if (target) {
                const headerHeight = header.offsetHeight; // only header height
                const topPos = target.offsetTop - headerHeight + 4; //calculates pixels
                window.scrollTo({top: topPos, behavior: "smooth"});
            }
        }
    });
});
