const categoriesList = document.querySelectorAll("#categories .item");

const ingredients = [
    "Картопля",
    "Гриби",
    "Часник",
    "Помідори",
    "Зелень",
    "Приправи",
];

const images = [
    {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
];

let counterValue = 0;
const valueEl = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

console.log(`У списку ${categoriesList.length} категорії.`);

categoriesList.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    const elementsCount = item.querySelectorAll("ul li").length;

    console.log(`Категорія: ${title}`);
    console.log(`Кількість елементів: ${elementsCount}`);
});

document.addEventListener("DOMContentLoaded", () => {
    ingredients.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item;
        ingredientsList.appendChild(li);
    });
});

const gallery = document.querySelector("#gallery");

const markup = images
    .map(
        (image) =>
            `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}" width="300"></li>`
    )
    .join("");

gallery.insertAdjacentHTML("beforeend", markup);

function increment() {
    counterValue += 1;
    updateValue();
}

function decrement() {
    counterValue -= 1;
    updateValue();
}

function updateValue() {
    valueEl.textContent = counterValue;
}

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
