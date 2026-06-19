const tasks = [];

const task = document.querySelector("#task");
const addTask = document.querySelector("#addTask");
const containerTasks = document.querySelector(".right");

function renderTasks() {
    containerTasks.textContent = "";
    tasks.forEach((task) => {
        const section = document.createElement("section");
        const paragraf = document.createElement("p");
        const chgBtn = document.createElement("button");
        chgBtn.id = "chgBtn";
        chgBtn.textContent = "Изменить";
        paragraf.textContent = task.text;
        section.classList.add("todo");
        section.appendChild(paragraf);
        section.appendChild(chgBtn);
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

  chgBtn.addEventListener('click', () => {
            const chgTask = prompt("Измени задачу");
            newTask = chgTask
        });

renderTasks();
