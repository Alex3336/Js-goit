document.addEventListener("DOMContentLoaded", function () {
    const userAgeInput = document.querySelector(".age");
    const userNameInput = document.querySelector(".name");
    const addButton = document.querySelector(".add");
    const deleteButton = document.querySelectorAll(".delete")
    const sortButton = document.querySelector(".sort");
    const userList = document.querySelector(".user-list");
    let users = [];

    class User {
        constructor(userName, userAge, createdAt, id) {
            this.userName = userName;
            this.userAge = userAge;
            this.createdAt = createdAt;
            this.id = id;
        }
        getInfo() {
            return `Мене звати ${this.userName}, мені ${this.userAge} років, створено: ${this.createdAt}`;
        }
    }

    function addNewUser(userAge, userName, now, id) {
        let newUser = new User(userName, userAge, now, id);
        users.push(newUser);
        console.log("users: ", users);
    }

    function createNewUser(users) {
        userList.innerHTML = "";
        users.forEach((item) => {
            if (parseInt(item.userAge) > 0) {
                userList.innerHTML += `
                    <li class="user-item" data-id="${item.id}"><p class="user-name" data-name="${item.userName}">
                    Мене звати ${item.userName}</p>, 
                    мені ${item.userAge} років, 
                    створено: ${item.createdAt},
                    <button class="delete">Видалити Користувача</button></li>
                `;
            }
        });
    }

    addButton.addEventListener("click", () => {
        const name = userNameInput.value;
        const age = userAgeInput.value;
        const now = new Date();
        const date = now.toUTCString()
        const id = users.length + 1;
        addNewUser(age, name, date, id);
        createNewUser(users);
    });

    userList.addEventListener("click", function (event) {
        if (event.target.classList.contains("user-name")) {
            const userName = event.target.dataset.name;
            console.log(`Ви натиснули на користувача: ${userName}`);
        }
    });

    userList.addEventListener("mouseover", function (event) {
        if (event.target.classList.contains("user-name")) {
            const userName = event.target;
            userName.style.color = "#aa42f8"
        }
    });
    userList.addEventListener("mouseout", function (event) {
        if (event.target.classList.contains("user-name")) {
            const userName = event.target;
            userName.style.color = "#000"
        }
    });

    sortButton.addEventListener("click", () => {
        users.sort((a, b) => a.userAge - b.userAge);
        createNewUser(users);
    });

    userList.addEventListener('click', (event) => {
        if (event.target.classList.contains("delete")) {
            const userItem = event.target.closest('.user-item');
            const userId = parseInt(userItem.dataset.id);
            users = users.filter(user => user.id !== userId);
            createNewUser(users);
        }
    });
});
