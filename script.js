const tasks = [];

const task = document.querySelector("#task");
const addTask = document.querySelector("#addTask");
const containerTasks = document.querySelector(".right");

function renderTasks() {
    containerTasks.textContent = "";
    tasks.forEach((task, index) => {
        let changed = false;
        let userText = "";
        const section = document.createElement("section");
        const paragraf = document.createElement("p");
        const chgBtn = document.createElement("button");
        const resBtn = document.createElement("button");
        chgBtn.id = "chgBtn";
        chgBtn.textContent = "Изменить";
        resBtn.id = "resBtn";
        resBtn.textContent = "Удалить";
        paragraf.textContent = task.text;
        section.classList.add("todo");
        section.appendChild(paragraf);
        section.appendChild(chgBtn);
        section.appendChild(resBtn);
        containerTasks.appendChild(section);

        chgBtn.addEventListener('click', () => {
            if(changed === false){
                paragraf.textContent = "";
                const input = document.createElement("input");
                input.type = "text";
                input.value = task.text;
                input.addEventListener('input', () => {
                    userText = input.value;
                });
                paragraf.appendChild(input);
                changed = true;
            } else {
                task.text = userText;
                paragraf.textContent = userText;
                changed = false;
            }
            
        });

        resBtn.addEventListener('click', () => {
            tasks.splice(index, 1);
            section.remove();
            console.log(tasks);
            renderTasks();
        });

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
