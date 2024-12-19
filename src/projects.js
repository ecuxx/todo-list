import { saveToStorage, loadFromStorage } from "./storage";
import Todos from "./todo";

const projects = document.querySelector(".projects");
const todoContainer = document.querySelector(".todos");

let activeProject = null;

export default class Projects {
    constructor(name) {
        this.name = name;
        this.todoList = [];
    }

    createProject() {
        const newProject = document.createElement("p");
        newProject.textContent = this.name;
        newProject.classList.add("project");
        projects.appendChild(newProject);

        newProject.addEventListener("click", () => {
            activeProject = this;
            todoContainer.innerHTML = "";

            const projectTitle = document.createElement("h3");
            projectTitle.textContent = `Project: ${this.name}`;
            todoContainer.appendChild(projectTitle);

            const todosContainer = document.createElement("div");
            todosContainer.classList.add("todos-container");
            todoContainer.appendChild(todosContainer);

            this.renderTodos(todosContainer);

        })
    }

    addTodo(todo) {
        this.todoList.push(todo);
        saveToStorage("projects", this.exportProjects());
    }

    renderTodos(todosContainer) {
        todosContainer.innerHTML = "";
        this.todoList.forEach((todo) => {
            todo.createTodo();
        })
    }

    static loadTodosFromStorage() {
        const storedData = loadFromStorage("projects");
        const projects = [];
        if (storedData) {
            storedData.forEach((projectData) => {
                const project = new Projects(projectData.name);
                project.todoList = projectData.todoList.map((todo) => Todos.fromData(todo));
                projects.push(project);
            })
        }
        return projects;
    }

    exportProjects() {
        return {
            name: this.name,
            todoList: this.todoList,
        };
    }

}

const addProject = () => {
    const name = document.querySelector("#pro").value;

    const project = new Projects(name);
    project.createProject();

    if(!activeProject) {
        activeProject = project;
    }
}

const defaultProject = new Projects("Default Project");
defaultProject.createProject();
activeProject = defaultProject;

export{ addProject, defaultProject, activeProject }