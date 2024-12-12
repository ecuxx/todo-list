const todos = document.querySelector(".todos");
import { priorityColor} from "./todofunc";

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
        boxDate.textContent = "Due Date: " + this.dueDate;
        const boxPriority = document.createElement("div");
        boxPriority.textContent = "Priority: " + this.priority;

        const buttons = document.createElement("div");

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.classList.add("todo-checkbox");
        box.classList.add("box");
        boxTitle.classList.add("title");
        boxDescription.classList.add("desc");
        boxDate.classList.add("date");
        boxPriority.classList.add("pri");

        box.appendChild(checkbox);
        box.appendChild(boxTitle);
        box.appendChild(boxDescription);
        box.appendChild(boxDate);
        box.appendChild(boxPriority);
        buttons.appendChild(delBtn);
        buttons.appendChild(editBtn);
        box.appendChild(buttons);
        todos.appendChild(box);

        priorityColor(box, this.priority);

        delBtn.addEventListener("click", () => {
            box.remove();
        })

    }


}





