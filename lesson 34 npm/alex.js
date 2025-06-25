// import {
//     alert,
//     defaults,
// } from "https://cdn.jsdelivr.net/npm/@pnotify/core/+esm";
// import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";

// defaults.styling = 'brighttheme';
// defaults.delay = 2000;

const butt = document.querySelector("#butt");
// document.addEventListener('DOMContentLoaded', () => {

//     butt.addEventListener('click', () => {
//         alert({
//             text: 'Повідомлення змінено!',
//             type: 'info',
//             addClass: 'custom-pnotify'
//         });
//     });

// function addTask() {
//     const input = document.querySelector("#taskInput");
//     const button = document.querySelector("#addTaskBtn");
//     const taskList = document.querySelector("#taskList");
//     const li = document.createElement("li");
//     const id = nanoid();
//     li.innerHTML = `
//         <p>${input.value}</p>
//         <button class="delete-button">кнопка для видалення</button>
//         <button class="mark-button">кнопка для відмічення завдання як виконаного</button>
//     `;
//     li.id = id;
//     console.log('li: ', li);
//     taskList.append(li);
// }
// button.addEventListener("click", addTask);

// const data = {
//     labels: [
//         "january",
//         "february",
//         "march",
//         "april",
//         "may",
//         "june",
//         "july",
//         "august",
//         "september",
//         "october",
//         "november",
//         "december",
//     ],
//     datasets: [
//         {
//             label: "temp",
//             data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//             tension: 0.1,
//         },
//     ],
// };
// const config = {
//     type: "line",
//     data: data,
//     options: {},
// };
// const swag = new Chart(document.getElementById("canvas"), config);

butt.addEventListener("click", () => {
    basicLightbox
        .create("<h1 style='color: #ffa23e'>Тестове модальне вікно</h1><img src='./poroxobot.png'>")
        .show();
});
