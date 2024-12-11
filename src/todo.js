const todos = document.querySelector(".todos");

export default class Todos {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    createTodo() {
        const box = document.createElement("div");
        const boxTitle = document.createElement("div");
        boxTitle.textContent = this.title;
        const boxDescription = document.createElement("p");
        boxDescription.textContent = this.description;
        const boxDate = document.createElement("div");
        boxDate.textContent = this.dueDate;
        const boxPriority = document.createElement("div");
        boxPriority.textContent = this.priority;

        box.appendChild(boxTitle);
        box.appendChild(boxDescription);
        box.appendChild(boxDate);
        box.appendChild(boxPriority);
        todos.appendChild(box);
    }
}


