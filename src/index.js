import "./styles.css";
import Todos from "./todo.js"
import { listTodo, checkDone } from "./todofunc.js";
import { addProject } from "./projects.js";

const showBtn = document.querySelector("#show-dialog");
const dialog = document.querySelector("#add-new");
const addBtn = document.querySelector("#add-btn");
const todo = document.querySelector(".todos");

const showProjectBtn = document.querySelector("#showPro-dialog");
const proDialog = document.querySelector("#add-project");
const addProBtn = document.querySelector("#pro-add-btn");

showProjectBtn.addEventListener("click", () => {
    proDialog.showModal();
})

addProBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addProject();
    proDialog.close();
})



showBtn.addEventListener("click", () => {
    dialog.showModal();
})

addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    listTodo();
    dialog.close();
})


todo.addEventListener("change", (event) => {
    if (event.target.classList.contains("todo-checkbox")) {
        const box = event.target.closest(".box");
        const title = box.querySelector(".title");
        checkDone(event.target, title); 
    }
})

todo.addEventListener("click", (event) => {
    if (event.target.textContent === "Edit") {
        const box = event.target.closest(".box");

        dialog.showModal();

        const titleInput = document.querySelector("#title");
        const descriptionInput = document.querySelector("#description");
        const dueDateInput = document.querySelector("#duedate");
        const priorityInput = document.querySelector("#priority");

        const title = box.querySelector(".title").textContent;
        const description = box.querySelector(".desc").textContent;
        const dueDate = box.querySelector(".date").textContent.replace("Due Date: ", "");
        const priority = box.querySelector(".pri").textContent.replace("Priority: ", "");

        titleInput.value = title;
        descriptionInput.value = description;
        dueDateInput.value = dueDate;
        priorityInput.value = priority;

        box.remove();

    }
})






const todo1 = new Todos ("test1", "this is an test desc", "12-12-2014", "low");
const todo2 = new Todos ("test2", "this is an tessdfdsfdgfdgfght desc", "12-12-2014", "high");
const todo3 = new Todos ("test3", "this isodfopjdjfidjfjidifrfjrgi an tessdfdsfdgfdgfght desc", "12-12-2087", "medium");
todo3.createTodo();
todo1.createTodo();
todo2.createTodo();



