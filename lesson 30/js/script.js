// const result = _.add(2, 3);
// console.log("result: ", result);

// window.addEventListener("scroll", () => {
//     console.log("1111");
// });
// window.addEventListener(
//     "scroll",
//     _.throttle(() => {
//         console.log("zxc 1000 - 7");
//     }, 10000)
// );
// function throttle(func, delay) {
//     let lastCall = 0;
//     return function (...args) {
//         const now = Date.now();
//         if (now - lastCall >= delay) {
//             lastCall = now;
//             func.apply(this, args);
//         }
//     };
// }
// window.addEventListener("scroll", throttle(()=> {
//     console.log('peremoga');
// },3000))

// const input = document.querySelector("#input");
// input.addEventListener(
//     "input",
//     _.throttle(() => {
//         alert(`ви ввели ${input.value}`)
//     },5000)
// );

// const textArea = document.querySelector("#text");
// const div = document.querySelector(".div");
// let text = '';

// function saveDraft() {
//     text = textArea.value;
//     let element = document.createElement("p");
//     element.textContent = `ви ввели ${text}`;
//     div.append(element);
// }

// textArea.addEventListener('input', _.throttle(saveDraft, 1000));

const input = document.querySelector("#login");
// function firstEvent(e){
//     console.log(`віправлено ${e.target.value}`)
// }
// let depounce = _.debounce(firstEvent, 1000);
// function secondEvent(e){
//     alert(`ви перестали ворушити мишею`)
// }
// let secondDepounce = _.debounce(secondEvent,1000)
// document.addEventListener('mousemove', secondDepounce);

const graph = document.getElementById("graph");
const point = document.getElementById("point");
const coord = document.getElementById("coord");
const handleMouseMove = _.throttle((event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    const clampedX = Math.max(5, Math.min(495, x));
    const clampedY = Math.max(5, Math.min(295, y));

    point.setAttribute("cx", clampedX);
    point.setAttribute("cy", clampedY);
    coord.textContent = `Координати: (${Math.round(clampedX)}, ${Math.round(
        clampedY
    )})`;
}, 50);

graph.addEventListener("mousemove", handleMouseMove);

const loginInput = document.getElementById("login");
const takenLogins = ["heimmler", "goring", "adolf"];

function checkLoginAvailability(login) {
    console.log(`Перевірка доступності логіна: ${login}`);
    if (takenLogins.includes(login)) {
        console.log("Логін зайнятий. Спробуйте інший.");
    } 
    else {
        console.log("Логін доступний.");
        takenLogins.push(login);
    }
}

const debouncedCheckLogin = _.debounce(checkLoginAvailability, 1000); // 1000 мс = 1 секунда

loginInput.addEventListener("input", (event) => {
    const login = event.target.value.trim();
    if (login) {
        debouncedCheckLogin(login);
    } 
    else {
        console.log("Логін не введено");
    }
});
