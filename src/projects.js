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
            this.renderTodos();
            const projectTitle = document.createElement("h3");
            projectTitle.textContent = `Project: ${this.name}`;

            todoContainer.appendChild(projectTitle);
        })
    }

    addTodo(todo) {
        this.todoList.push(todo);
    }

    renderTodos() {
        todoContainer.innerHTML = "";
        this.todoList.forEach((todo) => {
            todo.createTodo();
        })
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