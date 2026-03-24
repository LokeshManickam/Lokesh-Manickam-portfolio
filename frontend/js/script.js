const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
let current = "";

sections.forEach(section => {
const sectionTop = section.offsetTop;
if(pageYOffset >= sectionTop - 200){
current = section.getAttribute("id");
}
});

navLinks.forEach(link => {
link.classList.remove("active");
if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}
});
});

const revealElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
revealElements.forEach(el => {
const windowHeight = window.innerHeight;
const revealTop = el.getBoundingClientRect().top;

if(revealTop < windowHeight - 100){
el.classList.add("active");
}
});
});