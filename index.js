const fadeInRightElements = document.querySelectorAll('.fade-in-right');
const fadeInUpElements = document.querySelectorAll('.fade-in-up');
const fadeInLeftElements = document.querySelectorAll('.fade-in-left');
const fadeInDownElements = document.querySelectorAll('.fade-in-down');

const hamburger = document.querySelector(".hamburger-icon");
const navigation = document.getElementById("navigation");
const header = document.querySelector("header"); // only one header

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

fadeInRightElements.forEach(el => observer.observe(el));
fadeInUpElements.forEach(el => observer.observe(el));
fadeInLeftElements.forEach(el => observer.observe(el));
fadeInDownElements.forEach(el => observer.observe(el));

// Hamburger toggle for mobile menu
hamburger.addEventListener("click", () => {
    navigation.classList.toggle("active");
    hamburger.classList.toggle("open");
});

// Handle all navigation links (internal + external)
document.querySelectorAll("#navigation a").forEach(link => {
    link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");

        // Always close menu when a link is clicked
        navigation.classList.remove("active");
        hamburger.classList.remove("open");

        // Handle internal links with smooth scroll
        if (targetId && targetId.startsWith("#")) {
            e.preventDefault();

            if (targetId === "#") {
                // Home → scroll to very top
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                const target = document.querySelector(targetId);
                if (target) {
                    const headerHeight = header.offsetHeight + 3; // header height + 3px
                    const topPos = target.offsetTop - headerHeight;
                    window.scrollTo({ top: topPos, behavior: "smooth" });
                }
            }
        }
        // External links (GitHub, LinkedIn) → just follow normally
    });
});
