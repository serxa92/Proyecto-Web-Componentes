import "./styles.css";

// Espera a que el documento HTML se haya cargado completamente antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los enlaces dentro de la lista de navegación
  const links = document.querySelectorAll("nav ul li a");

  // Recorre cada enlace y le añade un evento de escucha al hacer clic
  links.forEach((link) => {
    link.addEventListener("click", function () {
      // Recorre todos los enlaces y elimina la clase 'active' para asegurarse de que solo un enlace esté activo a la vez
      links.forEach((item) => item.classList.remove("active"));

      // Agrega la clase 'active' únicamente al enlace que ha sido clicado
      this.classList.add("active");
    });
  });
});

export const Navbar = () => `
<nav>
<h1> <a href="#" class="h2nav"> SERGIO.A </a></h1>
<ul>
    <li>
        <a href="#" id="homelink" class="active">HOME</a>
    </li>
    
    <li>
        <a href="#projects" id="homelink">PROJECTS</a>
    </li>
    
    
    <li>
        <a href="#contact" id="homelink">CONTACT</a>
    </li>
    
    
    </div>

    </li>
</ul>
</nav>

`;
