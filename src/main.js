import "./style.css";

import { Navbar } from "../components/Navbar/index";
import { Projects } from "../sections/Projects/projects.js";
import { About } from "../sections/About/about.js";
import { Footer } from "../components/Footer/footer.js";

document.querySelector("#app").innerHTML = `
  <header>${Navbar()}</header>
  <main></main>
  <footer></footer>
`;
About();
const main = document.querySelector("main");
const title = document.createElement("h2");
title.id = "projects";
title.textContent = "Recent Projects";
main.appendChild(title);

Projects();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();
