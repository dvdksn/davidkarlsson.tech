const main = document.querySelector("main");
const header = document.querySelector("header");
const images = main.querySelectorAll("img");

const createModal = (e) => {
    const clickedFigure = e.target.parentElement;
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.appendChild(clickedFigure.cloneNode(true));
    document.body.appendChild(modal);
    main.classList.add("fade");
    header.classList.add("fade");
    modal.addEventListener("click", () => {
        modal.remove();
        main.classList.remove("fade");
        header.classList.remove("fade");
    });
}

images.forEach(image => {
    image.addEventListener("click", createModal)
});