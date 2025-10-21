const list = document.querySelector("#list");
const addBtn = document.querySelector("#addBtn");
const link = "http://localhost:3000/students";
let headers = { "Content-Type": "application/json" };

function GET() {
    fetch(link)
        .then((res) => res.json())
        .then((data) => render(data))
        .catch((err) => console.error(err));
}

function POST(student) {
    return fetch(link, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(student),
    });
}

function PUT(id, updatedStudent) {
    return fetch(`${link}/${id}`, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(updatedStudent),
    });
}

function DELETE(id) {
    return fetch(`${link}/${id}`, { method: "DELETE" });
}

addBtn.addEventListener("click", () => {
    const nameInput = document.querySelector("#name");
    const ageInput = document.querySelector("#age");
    const emailInput = document.querySelector("#email");
    const phoneInput = document.querySelector("#tel");
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    if (!name || !age || !email || !phone) return alert("заповни всі поля");
    POST({ name, age: Number(age), email, phone })
        .then((res) => res.json())
        .then(() => {
            nameInput.value = "";
            ageInput.value = "";
            emailInput.value = "";
            phoneInput.value = "";
            GET();
        });
});

function render(students) {
    list.innerHTML = "";
    students.forEach((s) => {
        const div = document.createElement("div");
        div.className = "student";
        div.innerHTML = `
            <b>${s.name}</b> (${s.age})<br>
             ${s.email} | ${s.phone}<br>
            <button onclick="remove('${s.id}')">❌ Видалити</button>
            <button onclick="edit('${s.id}', ${JSON.stringify(s.name)}, ${
            s.age
        }, ${JSON.stringify(s.email)}, ${JSON.stringify(
            s.phone
        )})">🖋️ Редагувати</button>
        `;
        list.append(div);
    });
}

function remove(id) {
    DELETE(id).then(() => GET());
}

function edit(id, name, age, email, phone) {
    const newName = prompt("new name:", name);
    const newAge = prompt("new age:", age);
    const newEmail = prompt("new email:", email);
    const newPhone = prompt("new phone:", phone);

    if (!newName || !newAge || !newEmail || !newPhone) return;
    PUT(id, {
        name: newName,
        age: Number(newAge),
        email: newEmail,
        phone: newPhone,
    }).then(() => GET());
}

GET();
