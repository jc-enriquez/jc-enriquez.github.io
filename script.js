const home = document.getElementById("home");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const experience = document.getElementById("experience");
const mainContent = document.getElementById("main-content");

const navLinks = Array.from(document.querySelectorAll(".link"));

navLinks.forEach(function (highlight) {
  highlight.addEventListener("click", highlightLink);
});

function highlightLink(e) {
  navLinks.forEach((button) => button.classList.remove("active"));
  e.target.classList.add("active");
}

function showHome(e) {
  e.preventDefault();
  mainContent.innerHTML = "";
  let mainContentElement = document.createElement("div");
  mainContentElement.innerHTML = `
    <h1 class="animate__animated animate__fadeInUp">John Christopher Enriquez</h1>
    <p class="animate__animated animate__fadeInUp">Front-End Developer</p>
  `;
  mainContent.appendChild(mainContentElement);
}

function showAbout(e) {
  e.preventDefault(e);
  mainContent.innerHTML = "";
  let mainContentElement = document.createElement("div");
  mainContent.innerHTML = `
  <h1 class="animate__animated animate__fadeInUp">About</h1>
  <p class="animate__animated animate__fadeInUp">My name is John Christopher V. Enriquez and I enjoy translating designs into existence.</p>
  `;
  mainContent.appendChild(mainContentElement);
}

function showProjects(e) {
  e.preventDefault(e);
  mainContent.innerHTML = "";
  let mainContentElement = document.createElement("div");
  mainContent.innerHTML = `
  <h1 class="animate__animated animate__fadeInUp">Projects</h1>
  <div class="animate__animated animate__fadeInUp">
    <div class="content-block">
      <h2>CSS</h2>
      <small>(All of the mentioned projects below are mockup websites.)</small>
      <li>
        <a href="" target="_blank">Real Estate</a>
      </li>
      <li>
        <a href="" target="_blank">Photography Company</a>
      </li>
      <li>
        <a href="" target="_blank">Architecture Firm</a>
      </li>
    </div>
    <div class="content-block">
      <h2>JavaScript</h2>
      <small>(All of the mentioned projects below are API based.)</small>
      <li>
        <a href="" target="_blank">Klima</a>
      </li>
      <li>
        <a href="" target="_blank">Pahayagan</a>
      </li>
      <li>
        <a href="" target="_blank">Tanghalan</a>
      </li>
      <li>
        <a href="" target="_blank">Kubyertos</a>
      </li>
    </div>
  </div>
  `;
  mainContent.appendChild(mainContentElement);
}

function showExperience(e) {
  e.preventDefault(e);
  mainContent.innerHTML = "";
  let mainContentElement = document.createElement("div");
  mainContent.innerHTML = `
  <h1 class="animate__animated animate__fadeInUp">Experience</h1>
  <div class="animate__animated animate__fadeInUp">
    <div class="content-block experience">
      <h2>Front-End Developer (Intern)</h2>
      <h4>Cobra Itech Services Corporation</h4>
      <small>May 2022 - August 2022</small>
      <li>Prototyped and developed website for the company and the CEO.</li>
      <li>Maintained and managed content of the company's learning platform.</li>
      <li>Conducted research about the medical industry here in the Philippines.</li>
    </div>
    <div class="content-block experience">
      <h2>Digital Specialist (Intern)</h2>
      <h4>Asia DTWords 24/7 Philippines Inc.</h4>
      <small>September 2022 - December 2022</small>
      <li>Content enrichment tasks.</li>
      <li>Handled image and SEO optimization tasks.</li>
      <li>Content integration, localization, and migration tasks.</li>
    </div>
  </div>
  `;
  mainContent.appendChild(mainContentElement);
}

home.addEventListener("click", showHome);
about.addEventListener("click", showAbout);
projects.addEventListener("click", showProjects);
experience.addEventListener("click", showExperience);