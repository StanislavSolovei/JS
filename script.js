const tasks = [];

const task = document.querySelector("#task");
const addTask = document.querySelector("#addTask");
const containerTasks = document.querySelector(".right");

function renderTasks() {
    containerTasks.textContent = "";
    tasks.forEach((task) => {
        const section = document.createElement("section");
        const paragraf = document.createElement("p");
        paragraf.textContent = task.text;
        section.classList.add("todo");
        section.appendChild(paragraf);
        containerTasks.appendChild(section);
    });
}

addTask.addEventListener('click', () => {
    const newTask = {
        text: task.value
    }
    task.value = "";
    tasks.push(newTask);
    renderTasks();
});

renderTasks();
