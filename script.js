const header = document.querySelector("header");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".nav-links");

function closeMenu() {
    menuButton.classList.remove("is-open");
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
}

menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.classList.toggle("is-open", !isOpen);
    navigation.classList.toggle("is-open", !isOpen);
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
});

navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
});
