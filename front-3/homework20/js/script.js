const images = document.querySelectorAll(".gallery .image");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let currentIndex = 0;

const input = document.querySelector("#controls input");
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesContainer = document.querySelector("#boxes");

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
    });
});

function showImage() {
    lightboxImg.src = images[currentIndex].src;
    lightbox.style.display = "block";
}

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "block") {
        if (e.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % images.length;
            showImage();
        }
        if (e.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage();
        }
        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }
    }
});

function getRandomColor() {
    return `rgb(
                ${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)}
            )`;
}

function createBoxes(amount) {
    const boxes = [];
    let size = 30;
    for (let i = 0; i < amount; i++) {
        const div = document.createElement("div");
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomColor();
        div.style.margin = "5px";
        div.style.display = "inline-block";
        boxes.push(div);
        size += 10;
    }
    boxesContainer.append(...boxes);
}

function destroyBoxes() {
    boxesContainer.innerHTML = "";
}

renderBtn.addEventListener("click", () => {
    destroyBoxes();
    const amount = Number(input.value);
    createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);
