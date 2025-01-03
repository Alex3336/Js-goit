/* document.getElementById('happy').onclick = function(){
    let firstValue = document.getElementById('input-venom').value;
    let secondValue = document.getElementById('input-sigmo').value;
    if (firstValue && secondValue){
        alert("Обидва поля заповнені");
    }
    else{
        alert("Не всі поля заповнені");
    }
} */

// document.getElementById('happy').onclick = function(){
//     let firstValue = Number.parseInt(document.getElementById('input-venom').value);
//     let secondValue = Number.parseInt(document.getElementById('input-sigmo').value);
//     let sum = firstValue + secondValue;
//     if (sum <= 10){
//         alert("Сума менша або дорівнює 10");
//     }
//     else{
//         alert("Сума більша за 10");
//     }
// }

document.getElementById('happy').onclick = function(){
    let password = document.getElementById('input-venom').value;
    let email = document.getElementById('input-sigmo').value;
    let name = document.getElementById('input-guards').value;
    if (name.length >= 3 && email.includes("@") && email.includes(".") && password.length >= 6){
        window.location.href = './WebStudio_main.html';
    }
    else{
        alert("Невірне повторення пароля, не вірний email або невірна довжина імені");
    }
}