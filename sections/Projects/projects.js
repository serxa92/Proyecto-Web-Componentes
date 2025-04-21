import "../Projects/style.css";
import { projects } from "../../src/Data/projects.js";
import { ProjectCard } from "../../components/ProjectCard/index.js";

export const Projects = () => {
  const main = document.querySelector("main");
  const section = document.createElement("section");
section.className = "projects";

section.innerHTML = `
  <div class="projects-container"></div>
`;

main.appendChild(section);

  const container = document.querySelector(".projects-container");
  for (const project of projects) {
    const figure = document.createElement("figure");
    figure.innerHTML = ProjectCard(project);
    container.appendChild(figure);
  }
};

