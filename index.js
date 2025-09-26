const fadeInRightElements = document.querySelectorAll('.fade-in-right');
const fadeInUpElements = document.querySelectorAll('.fade-in-up');
const fadeInLeftElements = document.querySelectorAll('.fade-in-left');
const fadeinDownElements = document.querySelectorAll('.fade-in-down');

const hamburger = document.querySelector(".hamburger-icon");
const navigation = document.getElementById("navigation");


//for any element that appears 20% of the element is on screen
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.2});//trigger when 20% vis
// add the animations to all that have the fade in right effect
fadeInRightElements.forEach(el => observer.observe(el));
fadeInUpElements.forEach(el => observer.observe(el));
fadeInLeftElements.forEach(el => observer.observe(el));
fadeinDownElements.forEach(el => observer.observe(el));

// hamburger effect for phone to open and close
hamburger.addEventListener("click", () => {
    navigation.classList.toggle("active");
    hamburger.classList.toggle("open");
});

// Close nav when clicking a link inside it
document.querySelectorAll("#navigation a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
        hamburger.classList.remove("open");
    });
});
//We use remove to guarantee that it will close

