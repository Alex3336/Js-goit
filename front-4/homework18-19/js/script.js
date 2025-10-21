document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#add-student-form");
    const submitButt = document.querySelector("#add-student-button");
    const studentsContainer = document.querySelector("#students-container");
    const url = "http://localhost:3000/students";
    let data = [];

    // ===== get =====
    async function getStudents() {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`error GET: ${response.status}`);
            const students = await response.json();
            return students;
        } catch (error) {
            console.error("error while getting:", error);
            return [];
        }
    }

    // ===== post =====
    async function addStudent(student) {
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(student),
                headers: { "Content-Type": "application/json" },
            });
            if (!response.ok) throw new Error(`error POST: ${response.status}`);
            const result = await response.json();
            return result;
        } catch (error) {
            console.error("error while adding:", error);
            return null;
        }
    }

    // ===== put/patch =====
    async function updateStudent(id, updatedStudent) {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedStudent),
            });
            if (!response.ok)
                throw new Error(`error PATCH: ${response.status}`);
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(`error while patching ${id}:`, error);
            return null;
        }
    }

    // ===== delete =====
    async function deleteStudent(id) {
        try {
            if (!confirm("RR u ok??????")) return;
            const response = await fetch(`${url}/${id}`, { method: "DELETE" });
            if (!response.ok)
                throw new Error(`error DELETE: ${response.status}`);
            data = data.filter((student) => student.id !== id);
            renderStudents(data);
        } catch (error) {
            console.error(`error while deleting ${id}:`, error);
        }
    }

    // ===== render =====
    function renderStudents(data) {
        studentsContainer.innerHTML = "";

        data.forEach((student) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>${student.skills.join(", ")}</td>
            <td>${student.email}</td>
            <td>${student.isEnrolled ? "✅" : "❌"}</td>
            <td>
                <button class="delete-butt" data-id="${student.id}">❌</button>
                <button class="edit-butt" data-id="${student.id}">🖋️</button>
            </td>
        `;
            studentsContainer.appendChild(tr);
        });

        // ===== eventlisteners =====
        submitButt.addEventListener("click", (e) => {
            e.preventDefault();
            const student = {
                id: data.length + 1,
                name: document.querySelector("#name").value,
                age: document.querySelector("#age").value,
                course: document.querySelector("#course").value,
                skills: document
                    .querySelector("#skills")
                    .value.split(",")
                    .map((s) => s.trim()),
                email: document.querySelector("#email").value,
                isEnrolled: document.querySelector("#isEnrolled").checked,
            };

            addStudent(student).then((resp) => {
                data.push(resp);
                renderStudents(data);
                form.reset();
            });
        });

        document.querySelectorAll(".delete-butt").forEach((btn) => {
            btn.addEventListener("click", async () => {
                const id = +btn.dataset.id;
                deleteStudent(id);
            });
        });

        document.querySelectorAll(".edit-butt").forEach((btn) => {
            btn.addEventListener("click", () => {
                const id = +btn.dataset.id;
                const student = data[id - 1];
                openEditModal(student);
            });
        });
    }

    // ===== students load =====
    document
        .querySelector("#get-students-btn")
        .addEventListener("click", () => {
            getStudents()
                .then((students) => {
                    data = students;
                    renderStudents(data);
                })
                .catch((error) =>
                    console.error("Error fetching students:", error)
                );
        });

    // ===== modal window =====
    const modal = document.getElementById("edit-modal");
    const closeBtn = modal.querySelector(".close-btn");
    const editForm = document.getElementById("edit-student-form");
    let currentEditId = null;

    // ===== modal open =====
    function openEditModal(student) {
        modal.style.display = "block";
        currentEditId = student.id;

        document.getElementById("edit-name").value = student.name;
        document.getElementById("edit-age").value = student.age;
        document.getElementById("edit-course").value = student.course;
        document.getElementById("edit-skills").value =
            student.skills.join(", ");
        document.getElementById("edit-email").value = student.email;
        document.getElementById("edit-isEnrolled").checked = student.isEnrolled;
    }

    // ===== modal close =====
    closeBtn.onclick = () => (modal.style.display = "none");
    window.onclick = (e) => {
        if (e.target === modal) modal.style.display = "none";
    };

    // ===== save changes =====
    editForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const updatedStudent = {
            name: document.getElementById("edit-name").value,
            age: document.getElementById("edit-age").value,
            course: document.getElementById("edit-course").value,
            skills: document
                .getElementById("edit-skills")
                .value.split(",")
                .map((s) => s.trim()),
            email: document.getElementById("edit-email").value,
            isEnrolled: document.getElementById("edit-isEnrolled").checked,
        };
        await updateStudent(currentEditId, updatedStudent);
        modal.style.display = "none";
        data = await getStudents();
        renderStudents(data);
    });
});
