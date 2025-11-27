// Cargar y renderizar el JSON del currículum
async function loadResume() {
  try {
    const response = await fetch("data/resume.json");
    const data = await response.json();
    renderResume(data);
  } catch (error) {
    console.error("Error al cargar el currículum:", error);
    document.body.innerHTML =
      '<div style="padding: 20px; text-align: center;"><h2>Error al cargar el currículum</h2><p>Por favor, verifica que el archivo data/resume.json existe.</p></div>';
  }
}

function renderResume(data) {
  // Información personal
  document.getElementById("name").textContent = data.personalInfo.name;

  const contactDiv = document.getElementById("contact");
  const contactInfo = [
    data.personalInfo.location,
    data.personalInfo.email,
    data.personalInfo.phone,
  ].filter(Boolean);

  contactDiv.innerHTML = contactInfo
    .map((info) => `<span>${info}</span>`)
    .join("");

  // Perfil profesional
  document.getElementById("profile").textContent = data.professionalProfile;

  // Educación
  const educationDiv = document.getElementById("education");
  educationDiv.innerHTML = data.education
    .map((edu) => {
      let html = `<div class="education-item">`;
      html += `<div class="education-degree">${edu.degree}</div>`;
      html += `<div class="education-institution">${edu.institution}</div>`;
      html += `<div class="education-location">${edu.location}</div>`;
      if (edu.graduationDate) {
        html += `<div class="education-date">${edu.graduationDate}</div>`;
      }
      html += `</div>`;
      return html;
    })
    .join("");

  // Experiencia
  const experienceDiv = document.getElementById("experience");
  experienceDiv.innerHTML = data.experience
    .map((exp) => {
      let html = `<div class="experience-item">`;
      html += `<div class="experience-header">`;
      html += `<div>`;
      html += `<span class="experience-position">${exp.position}</span>`;
      html += ` - <span class="experience-company">${exp.company}</span>`;
      html += `</div>`;
      html += `<span class="experience-date">${exp.startDate} - ${exp.endDate}</span>`;
      html += `</div>`;
      html += `<ul class="experience-responsibilities">`;
      exp.responsibilities.forEach((resp) => {
        html += `<li>${resp}</li>`;
      });
      html += `</ul>`;
      html += `</div>`;
      return html;
    })
    .join("");

  // Habilidades técnicas
  const skillsDiv = document.getElementById("skills");
  let skillsHTML = "";

  if (
    data.technicalSkills.languages &&
    data.technicalSkills.languages.length > 0
  ) {
    skillsHTML += `<div class="skills-category">`;
    skillsHTML += `<div class="skills-list">${data.technicalSkills.languages.join(
      " / "
    )}</div>`;
    skillsHTML += `</div>`;
  }

  if (
    data.technicalSkills.frameworks &&
    data.technicalSkills.frameworks.length > 0
  ) {
    skillsHTML += `<div class="skills-category">`;
    skillsHTML += `<div class="skills-list">${data.technicalSkills.frameworks.join(
      " / "
    )}</div>`;
    skillsHTML += `</div>`;
  }

  if (data.technicalSkills.tools && data.technicalSkills.tools.length > 0) {
    skillsHTML += `<div class="skills-category">`;
    skillsHTML += `<div class="skills-list">${data.technicalSkills.tools.join(
      " / "
    )}</div>`;
    skillsHTML += `</div>`;
  }

  if (data.technicalSkills.other && data.technicalSkills.other.length > 0) {
    skillsHTML += `<div class="skills-category">`;
    skillsHTML += `<div class="skills-list">${data.technicalSkills.other.join(
      " / "
    )}</div>`;
    skillsHTML += `</div>`;
  }

  skillsDiv.innerHTML = skillsHTML;

  // Proyectos
  const projectsDiv = document.getElementById("projects");
  projectsDiv.innerHTML = data.projects
    .map((project) => {
      let html = `<div class="project-item">`;
      html += `<div class="project-name">${project.name}</div>`;
      html += `<div class="project-description">${project.description}</div>`;
      if (project.technologies && project.technologies.length > 0) {
        html += `<div class="project-technologies">(${project.technologies.join(
          ", "
        )})</div>`;
      }
      if (project.link) {
        html += `<a href="${project.link}" target="_blank" class="project-link">Ver proyecto →</a>`;
      }
      html += `</div>`;
      return html;
    })
    .join("");

  // Programas
  const programsDiv = document.getElementById("programs");
  programsDiv.innerHTML = data.programs
    .map((program) => `<span>${program}</span>`)
    .join("");

  // Idiomas
  const languagesDiv = document.getElementById("languages");
  languagesDiv.innerHTML = data.languages
    .map((lang) => {
      return `<div class="language-item"><span class="language-name">${lang.name}:</span><span class="language-level">${lang.level}</span></div>`;
    })
    .join("");
}

// Función para descargar el PDF
function setupDownloadButton() {
  const downloadBtn = document.getElementById("downloadPdf");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      // Ruta al PDF
      const pdfPath = "./HDVAFLC-ENG.pdf";

      // Intentar descargar el PDF
      fetch(pdfPath)
        .then((response) => {
          if (!response.ok) {
            throw new Error("PDF no encontrado");
          }
          return response.blob();
        })
        .then((blob) => {
          // Crear un enlace temporal para descargar
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "Andres-Felipe-Lopez-Cabrera-CV.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        })
        .catch((error) => {
          console.error("Error al descargar el PDF:", error);
          // Fallback: intentar abrir directamente
          window.open(pdfPath, "_blank");
        });
    });
  }
}

// Cargar el currículum cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
  loadResume();
  setupDownloadButton();
});
