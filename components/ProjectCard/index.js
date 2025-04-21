import "../ProjectCard/style.css";
export const ProjectCard = (project) => {
  const techIcons = {
    HTML5: "/icons/html5.svg",
    CSS3: "/icons/css3.svg",
    JavaScript: "/icons/javascript.svg",
  };

  // Generamos los <img> para cada tecnología usada
  const techIconsHTML = project.tech
    .map(
      (tech) =>
        `<img src="${techIcons[tech]}" alt="${tech} icon" title="${tech}" class="tech-icon" />`
    )
    .join("");

  return `
    <div class="efectito">
      <div class="project-card">
        <a href="${project.link}">
          <img class="imagenproyecto" src="${project.image}" alt="${project.title}" />
        </a>
        <div class="header">
          <a href="${project.link}">
            <h3>${project.title}<img src="icons/enlace.png" alt="enlace externo"/></h3>
            
          </a>
        </div>
        <div class="detail">
          <p>${project.description}</p>
          <div class="techs">
            ${techIconsHTML}
          </div>
          <div class="botones-card">
            <a href="${project.github}">
              <img src="/icons/github.jpg" alt="GitHub Icon" />
            </a>
            <a href="${project.link}">
              <img src="/icons/adjunto.jpg" alt="Link Icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
};
