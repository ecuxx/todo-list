const projects = document.querySelector(".projects");

const addProject = () => {
    const newProject = document.createElement("p");
    const name = document.querySelector("#pro").value;
    newProject.textContent = name;

    projects.appendChild(newProject);
}

export{ addProject }