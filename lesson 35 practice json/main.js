// const textArea = document.querySelector("#js-txt");

// textArea.addEventListener("input", (event) => {
//     let text = event.target.value;
//     let savedSettings = {
//         text: `${text}`,
//     };
//     console.log("text: ", text);
//     let jsonObject = JSON.stringify(savedSettings);
//     localStorage.setItem("obj", jsonObject);
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const data = localStorage.getItem("obj");
//     const parsed = JSON.parse(data);
//     textArea.value = parsed.text;
// });

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const coments = document.querySelector("#coments");
const form = document.querySelector("#form");
const update = document.querySelector("#upd-butt");
const clear = document.querySelector("#clr-butt");

update.addEventListener("click", (event) => {
    event.preventDefault();
    const formData = {
        name: name.value,
        email: email.value,
        coments: coments.value,
    };
    const jsonForm = JSON.stringify(formData);
    console.log("jsonForm:", jsonForm);
    localStorage.setItem("form", jsonForm);
});

clear.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.removeItem("form");
    name.value = "";
    email.value = "";
    coments.value = "";
});

document.addEventListener("DOMContentLoaded", () => {
    const data = localStorage.getItem("form");
    if (data) {
        try {
            const parsed = JSON.parse(data);
            name.value = parsed.name || "";
            email.value = parsed.email || "";
            coments.value = parsed.coments || "";
        } catch (error) {
            console.error("Помилка парсингу JSON з localStorage:", error);
        }
    }
});
