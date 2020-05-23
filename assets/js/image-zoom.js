const main = document.querySelector("main");
const header = document.querySelector("header");
const images = main.querySelectorAll("img");

const createModal = (e) => {
    const clickedImage = e.target;
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.appendChild(clickedImage.cloneNode(true));
    document.body.appendChild(modal);
    main.classList.add("fade");
    header.classList.add("fade");
    modal.addEventListener("click", () => {
        modal.remove();
        main.classList.remove("fade");
        header.classList.remove("fade");
    });
}

  //  clickedImage.classList.toggle("zoom");
  //  document.addEventListener("click", e => {
  //      const isOutside = !e.target.closest("img");
  //      isOutside ? clickedImage.classList.remove("zoom") : null;
  //  });

images.forEach(image => {
    image.addEventListener("click", createModal)
});