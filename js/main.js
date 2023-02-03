// Scrool Icon
let btn = document.querySelector(".up");
window.onscroll = function() {
    if (window.scrollY >= 600) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    };
};
btn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
let toggler = document.querySelector(".toggle");
let iconAndLinks = document.querySelector(".icon-links");
let close = document.querySelector(".close");
toggler.onclick = function() {
    iconAndLinks.classList.add("open");
};
close.onclick = function() {
    this.parentElement.classList.remove("open");
};
document.onkeyup = function(e) {
    if (e.key === "Escape") {
        iconAndLinks.classList.remove("open");
    }
}