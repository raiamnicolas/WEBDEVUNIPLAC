document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
    const filterButtons = document.querySelectorAll(".filters button");

    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement("li");
            li.textContent = taskText;
            li.classList.add("pending");
            li.addEventListener("click", () => {
                li.classList.toggle("completed");
                li.classList.toggle("pending");
            });
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            const filter = button.getAttribute("data-filter");
            const tasks = taskList.querySelectorAll("li");
            tasks.forEach(task => {
                if (filter === "all" || task.classList.contains(filter)) {
                    task.style.display = "";
                } else {
                    task.style.display = "none";
                }
            });
        });
    });
});

