import "./styles.css";
import Todos from "./todo.js"

const showBtn = document.querySelector("#show-dialog");
const dialog = document.querySelector("#add-new");
const addBtn = document.querySelector("#add-btn");


showBtn.addEventListener("click", () => {
    dialog.showModal();
})

addBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const dueDate = document.querySelector("#duedate").value;
    const priority = document.querySelector("#priority").value;

    const todoListItem = new Todos(title, description, dueDate, priority);
    todoListItem.createTodo();

    dialog.close();
})




