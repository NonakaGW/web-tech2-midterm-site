"use strict";

// Scrolling helper.
const topLink = document.querySelector(".top-link");
function updateTopLink() {
    if (topLink) {
        topLink.classList.toggle("is-hidden", window.scrollY < 300);
    }
}
window.addEventListener("scroll", updateTopLink, { passive: true });
updateTopLink();

// These only discourage casual browser-based copying; they are not access control.
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("copy", (event) => event.preventDefault());
document.addEventListener("cut", (event) => event.preventDefault());
document.addEventListener("dragstart", (event) => event.preventDefault());
document.addEventListener("selectstart", (event) => event.preventDefault());

document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    const mod = event.ctrlKey || event.metaKey;
    const blockMod = mod && ["u", "s", "p", "c", "a"].includes(key);
    const blockDevtools = (event.ctrlKey && event.shiftKey && ["i", "j", "c", "k"].includes(key)) ||
        (event.metaKey && event.altKey && ["i", "j", "c", "u"].includes(key));
    if (event.key === "F12" || blockMod || blockDevtools) {
        event.preventDefault();
        event.stopPropagation();
    }
}, { capture: true });
