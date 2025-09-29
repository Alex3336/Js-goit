const bankAccount = {
    ownerName: "John Doe",
    accountNumber: "1234567890",
    balance: 1000, 
    deposit: function () {
        const amount = prompt("Введіть суму для поповнення:");
        if (amount === null) {
            return; 
        }
        const parsedAmount = parseFloat(amount);
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            alert("Некоректна сума для поповнення.");
            return;
        }

        this.balance += parsedAmount;
        alert(`Поповнення успішно! Ваш баланс: ${this.balance}`);
    },
  withdraw: function () {
      const amount = prompt("Введіть суму для зняття:");
      if (amount === null) {
          return; 
      }
      const parsedAmount = parseFloat(amount);
      if (isNaN(parsedAmount) || parsedAmount <= 0) {
          alert("Некоректна сума для зняття.");
          return;
      }
      if (parsedAmount > this.balance) {
          alert("Недостатньо коштів на рахунку.");
          return;
      }
      this.balance -= parsedAmount;
      alert(`Зняття успішно! Ваш баланс: ${this.balance}`);
  },
  operations: function() {
      const operation = confirm("Виберіть операцію: Поповнити рахунок (OK) або Зняти кошти (Cancel)?");
      if (operation) {
          this.deposit();
      }
      else {
          this.withdraw();
      }
  }
};

bankAccount.operations(); 

const weather = {
    temperature: null,
    humidity: 70,
    windSpeed: 15,
    isFreezing: function () {
        const tempInput = prompt("Введіть температуру в градусах Цельсія:");
        this.temperature = parseFloat(tempInput);
        if (tempInput === null) {
            return; // Скасування операції
        }

        if (isNaN(this.temperature)) {
            alert("Некоректне значення температури.");
            return;
        }

        return this.temperature < 0;
    },
    checkTemperature: function() {
        if (this.isFreezing()) {
            alert("Температура нижче 0 градусів Цельсія");
        } 
        else {
            alert("Температура 0 градусів Цельсія або вище");
        }
    }
};

weather.checkTemperature();

const user = {
    name: "John",
    email: "john.doe@example.com",
    password: "password123",
    login: function () {
        const enteredEmail = prompt("Введіть email:");
        const enteredPassword = prompt("Введіть пароль:");
        if (enteredEmail === this.email && enteredPassword === this.password) {
            alert("Вхід успішний!");
            return true;
        } 
        else {
            alert("Невірний email або пароль.");
            return false;
        }
    },
};

user.login();

const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
    isGoodMovie: function () {
        return this.rating > 8;
    },
    displayInfo: function() {
        console.log(`Назва: ${this.title}`);
        console.log(`Режисер: ${this.director}`);
        console.log(`Рік: ${this.year}`);
        console.log(`Рейтинг: ${this.rating}`);
    }
};

movie.displayInfo();
console.log(`Фільм хороший? ${movie.isGoodMovie()}`);
