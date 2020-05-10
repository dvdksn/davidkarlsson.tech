const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

const toggleMenu = () => {
    menu.classList.toggle("open");
}

const closeMenu = () => {
    if (window.innerWidth >= 768) {
        menu.classList.remove("open");
    };
}

menuBtn.addEventListener("click", toggleMenu);

window.addEventListener("resize", closeMenu);