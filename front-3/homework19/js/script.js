const radios = document.querySelectorAll('input[name="color"]');
const form = document.querySelector("form");
const checkedRadio = document.querySelector('input[name="color"]:checked');

const validationInput = document.querySelector("#validation-input");
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

form.style.backgroundColor = checkedRadio.value;
radios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
        form.style.backgroundColor = event.target.value;
    });
});

nameInput.addEventListener("input", (event) => {
    const value = event.target.value.trim();
    nameOutput.textContent = value === "" ? "незнайомець" : value;
});

validationInput.addEventListener("blur", () => {
    const requiredLength = Number(validationInput.dataset.length);
    const actualLength = validationInput.value.trim().length;

    if (actualLength === requiredLength) {
        validationInput.classList.add("valid");
        validationInput.classList.remove("invalid");
    } else {
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid");
    }
});

text.style.fontSize = fontSizeControl.value + "px";

fontSizeControl.addEventListener("input", (event) => {
    text.style.fontSize = event.target.value + "px";
});
