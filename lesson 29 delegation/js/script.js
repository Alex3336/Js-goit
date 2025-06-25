// const userList = document.getElementById('userList');


// function deleteUser(event) {
//     if(event.target.nodeName === "BUTTON" && event.target.classList.contains("deleteButton")){
//         const li = event.target.closest("li")
//         if(li){
//             li.remove();
//         }
//     }
// }
// userList.addEventListener('click', deleteUser)


document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById('taskList');
    const taskName = document.querySelector('#newTask');
    const addTask = document.querySelector('#addTask');

    addTask.addEventListener("click", (e) => {
        e.preventDefault();
        const text = taskName.value.trim(); 
        if (text) {
            const li = document.createElement("li");
            li.innerHTML = `
                <p class="text">${text}</p>
                <input type="checkbox" class="checkbox">
                <button class="deleteButton">Видалити завдання</button>
            `;
            li.classList.add("taskItem");
            taskList.appendChild(li);
            taskName.value = '';
        }
    });

    taskList.addEventListener('click', (event) => {
        if (event.target.classList.contains('deleteButton')) {
            const li = event.target.closest('li');
            if (li) {
                li.remove();
            }
        }
    });

    taskList.addEventListener("click", (event) => {
        if(event.target.classList.contains('checkbox')){
            const p = event.target.closest('p');
            if(p){
                alert(`завдання ${p} виконано`);
            }
        }
    })
})