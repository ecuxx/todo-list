
import Todos from "./todo.js";


const listTodo = function () {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const dueDate = document.querySelector("#duedate").value;
    const priority = document.querySelector("#priority").value;
    
    const todoListItem = new Todos(title, description, dueDate, priority);
    todoListItem.createTodo();

} 

const priorityColor = function (box, priority) {
    if (priority === "low") {
        box.style.backgroundColor = "green";
    }else if (priority === "medium") {
        box.style.backgroundColor = "blue";
    }else {
        box.style.backgroundColor = "red";
    }
}

const checkDone = function (checkbox, title) {
    if(checkbox.checked) {
        title.style.textDecoration = "line-through";
    }else {
        title.style.textDecoration = "none";
    }
}



export { listTodo, priorityColor, checkDone}