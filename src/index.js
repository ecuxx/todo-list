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

const todo1 = new Todos ("test1", "this is an test desc", "12-12-2014", "low");
const todo2 = new Todos ("test2", "this is an tessdfdsfdgfdgfght desc", "12-12-2014", "high");
todo1.createTodo();
todo2.createTodo();



