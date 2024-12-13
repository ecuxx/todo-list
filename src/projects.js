const projects = document.querySelector(".projects");

export default class Projects {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    createProject() {
        const newProject = document.createElement("p");
        newProject.textContent = this.name;

        newProject.classList.add("project");
        projects.appendChild(newProject);
    }
}

const addProject = () => {
    const name = document.querySelector("#pro").value;

    const project = new Projects(name);
    project.createProject();
}


const ece = new Projects("ece");
ece.createProject();

export{ addProject }